/* ==========================================================================
   Panneaux : ouvre et ferme les sections, les projets et « À propos »
   selon l'adresse de la page.

   L'adresse sert de « télécommande » : #design ouvre la section Design,
   #eremia ouvre le projet Eremia, #a-propos ouvre le panneau À propos,
   rien (ou #) revient à l'accueil. Les boutons sont de simples liens vers
   ces adresses, ce qui fait marcher aussi le bouton « Retour » du navigateur
   et permet d'envoyer le lien d'un projet précis.
   ========================================================================== */

const calque = document.getElementById("calque");
const panneau = document.getElementById("panneau");
const calqueAPropos = document.getElementById("calque-a-propos");
const panneauAPropos = document.getElementById("panneau-a-propos");
const TITRE_DU_SITE = document.title;

/* Lit l'adresse et affiche ce qu'il faut. Appelé au chargement et à chaque changement d'adresse. */
function afficherSelonAdresse() {
  if (visionneuse.open) visionneuse.close(); // bouton « Retour » pendant qu'une image est en grand
  const id = decodeURIComponent(location.hash.slice(1));
  const section = SECTIONS.find((s) => s.id === id);
  const projet = PROJETS.find((p) => p.id === id);

  if (id === "a-propos") {
    fermer(calque);
    ouvrir(calqueAPropos, panneauAPropos);
    document.title = MOTS.aPropos + " · " + TITRE_DU_SITE;
  } else if (section || projet) {
    fermer(calqueAPropos);
    panneau.innerHTML = section ? creerSection(section) : creerProjet(projet);
    calque.scrollTop = 0;
    ouvrir(calque, panneau);
    document.title = (section ? section.titre : projet.titre) + " · " + TITRE_DU_SITE;
  } else {
    fermer(calque);
    fermer(calqueAPropos);
    document.title = TITRE_DU_SITE;
  }
  mettreAJourLienLangue();
}

/* Les boutons FR / EN (accueil, sections, projets) mènent à la même page
   dans l'autre langue, avec le même projet ouvert.
   Sur l'ordinateur (double-clic), il faut le nom complet du fichier : en/index.html.
   En ligne, on peut l'abréger en en/ (l'adresse est plus jolie). */
function mettreAJourLienLangue() {
  for (const lien of document.querySelectorAll(".lien-langue")) {
    const page = location.protocol === "file:" ? lien.dataset.page : lien.dataset.page.replace("index.html", "");
    lien.href = page + location.hash;
  }
}

/* Ouvre un calque en rejouant l'animation d'apparition. */
function ouvrir(leCalque, lePanneau) {
  // On remet le panneau à sa position de départ sans animation...
  lePanneau.style.transition = "none";
  leCalque.classList.remove("ouvert");
  void lePanneau.offsetWidth; // ...on force le navigateur à en tenir compte...
  lePanneau.style.transition = "";
  leCalque.classList.add("ouvert"); // ...puis on lance l'animation d'arrivée.
  lePanneau.focus({ preventScroll: true }); // pour la navigation au clavier
}

/* Ferme un calque (l'animation de sortie est dans le CSS). */
function fermer(leCalque) {
  if (!leCalque.classList.contains("ouvert")) return;
  leCalque.classList.remove("ouvert");

  // Une fois l'animation finie, on vide le panneau des projets
  // pour arrêter les vidéos qui tourneraient encore en arrière-plan.
  if (leCalque === calque) {
    setTimeout(() => {
      if (!calque.classList.contains("ouvert")) panneau.innerHTML = "";
    }, 400);
  }
}

/* Revient à l'accueil sans laisser de « # » dans l'adresse. */
function revenirAccueil() {
  history.pushState(null, "", location.pathname + location.search);
  afficherSelonAdresse();
}

/* Un clic à côté du panneau (sur le calque lui-même) ferme tout. */
for (const leCalque of [calque, calqueAPropos]) {
  leCalque.addEventListener("click", (evenement) => {
    if (evenement.target === leCalque) revenirAccueil();
  });
}

/* Les boutons « Fermer » qui pointent vers « # » reviennent proprement à l'accueil. */
document.addEventListener("click", (evenement) => {
  const lien = evenement.target.closest('a[href="#"]');
  if (lien) {
    evenement.preventDefault();
    revenirAccueil();
  }
});

/* La touche Échap ferme tout. */
document.addEventListener("keydown", (evenement) => {
  if (visionneuse.open) return; // la visionneuse gère sa propre touche Échap
  if (evenement.key === "Escape" && location.hash) revenirAccueil();
});

window.addEventListener("hashchange", afficherSelonAdresse);
afficherSelonAdresse();
