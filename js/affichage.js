/* ==========================================================================
   Affichage : fabrique le HTML d'une section ou d'un projet
   à partir des données de data/projets.js.

   C'est le « modèle unique » : toutes les pages projet passent par
   creerProjet(), donc changer la mise en page ici la change partout.
   ========================================================================== */

/* Langue de la page, lue dans <html lang="..."> : "fr" pour index.html, "en" pour en/index.html. */
const LANGUE = document.documentElement.lang;

/* La page anglaise est rangée dans le sous-dossier en/ : pour elle, les images
   et les vidéos sont un dossier plus haut (« ../ »). */
const RACINE = LANGUE === "en" ? "../" : "";

/* Les petits mots écrits par le site lui-même, dans chaque langue. */
const MOTS = {
  fr: { fermer: "Fermer", aPropos: "À propos", precedent: "Projet précédent", suivant: "Projet suivant", image: "image", youtube: "Vidéo YouTube :", voirYoutube: "Voir la vidéo sur YouTube" },
  en: { fermer: "Close", aPropos: "About", precedent: "Previous project", suivant: "Next project", image: "image", youtube: "YouTube video:", voirYoutube: "Watch the video on YouTube" }
}[LANGUE];

/* Le bouton qui mène à l'autre langue. Son adresse exacte (avec le projet ouvert)
   est complétée par js/panneaux.js, fonction mettreAJourLienLangue(). */
const BOUTON_LANGUE = LANGUE === "en"
  ? `<a class="bouton bouton-blanc lien-langue" href="../index.html" data-page="../index.html" hreflang="fr" lang="fr" aria-label="Version française">FR</a>`
  : `<a class="bouton bouton-blanc lien-langue" href="en/index.html" data-page="en/index.html" hreflang="en" lang="en" aria-label="English version">EN</a>`;

/* Renvoie le texte d'une fiche dans la langue de la page.
   Sur la page anglaise, on prend "titre_en" s'il existe, sinon "titre" (le français).
   Un projet pas encore traduit s'affiche donc en français au lieu de rester vide. */
function traduire(fiche, champ) {
  return (LANGUE === "en" && fiche[champ + "_en"]) || fiche[champ];
}

/* Page d'une section : bouton Fermer, bouton vers la section suivante,
   puis les colonnes de vignettes. */
function creerSection(section) {
  const suivante = SECTIONS.find((s) => s.id === section.suivante);

  const colonnes = section.colonnes.map((colonne) => {
    const vignettes = colonne.vignettes.map((v) => `
      <a class="vignette" href="#${v.projet}">
        <img src="${RACINE}${v.image}" width="${v.largeur}" height="${v.hauteur}" alt="" loading="lazy">
        <h2>${traduire(v, "titre")}</h2>
        <hr>
      </a>`).join("");
    return `<div class="colonne" style="grid-column: span ${colonne.largeur}">${vignettes}</div>`;
  }).join("");

  return `
    <div class="barre-haut">
      <a class="bouton bouton-blanc" href="#">${MOTS.fermer}</a>
      <div class="barre-droite">
        <a class="bouton bouton-blanc" href="#${suivante.id}">${traduire(section, "boutonSuivante")}</a>
        ${BOUTON_LANGUE}
      </div>
    </div>
    <h1 class="invisible">${traduire(section, "titre")}</h1>
    <div class="grille">${colonnes}</div>`;
}

/* Page d'un projet : texte à gauche (4 colonnes sur 12), médias à droite (8 sur 12). */
function creerProjet(projet) {
  const paragraphes = traduire(projet, "texte").map((t) => `<p>${t}</p>`).join("");

  let numero = 0; // pour le texte alternatif par défaut des images
  const rangees = projet.medias.map((rangee) => {
    const medias = rangee.map((media) => {
      numero++;
      return creerMedia(media, projet, numero);
    }).join("");
    return `<div class="rangee">${medias}</div>`;
  }).join("");

  const [precedent, suivant] = projetsVoisins(projet);

  return `
    <div class="barre-haut">
      <a class="bouton bouton-blanc" href="#${projet.section}">${MOTS.fermer}</a>
      ${BOUTON_LANGUE}
    </div>
    <div class="grille">
      <div class="projet-texte">
        <h1>${traduire(projet, "titre")}</h1>
        <p class="date">${projet.date}</p>
        <div class="texte">${paragraphes}</div>
      </div>
      <div class="projet-medias">${rangees}</div>
    </div>
    <nav class="projet-navigation" aria-label="${MOTS.precedent} / ${MOTS.suivant}">
      <a class="bouton bouton-blanc" href="#${precedent.id}" aria-label="${MOTS.precedent} : ${traduire(precedent, "titre")}">← ${traduire(precedent, "titre")}</a>
      <a class="bouton bouton-blanc" href="#${suivant.id}" aria-label="${MOTS.suivant} : ${traduire(suivant, "titre")}">${traduire(suivant, "titre")} →</a>
    </nav>`;
}

/* Le projet d'avant et celui d'après, dans la même section.
   L'ordre est celui des vignettes dans data/projets.js (colonne par colonne).
   Après le dernier projet, on revient au premier : comme un carrousel. */
function projetsVoisins(projet) {
  const section = SECTIONS.find((s) => s.id === projet.section);
  const ids = section.colonnes.flatMap((colonne) => colonne.vignettes.map((v) => v.projet));
  const position = ids.indexOf(projet.id);
  const trouver = (decalage) => {
    const id = ids[(position + decalage + ids.length) % ids.length];
    return PROJETS.find((p) => p.id === id);
  };
  return [trouver(-1), trouver(+1)];
}

/* Un média (image, vidéo ou YouTube) dans une rangée.
   --ratio = largeur / hauteur : sert à la galerie justifiée (voir style.css, section 9). */
function creerMedia(media, projet, numero) {
  const titre = traduire(projet, "titre");
  let contenu;
  let ratio;

  if (media.type === "youtube" && location.protocol === "file:") {
    // Page ouverte par double-clic : YouTube refuse de s'afficher (erreur 153),
    // car il exige de savoir sur quel site la vidéo est intégrée.
    // On montre donc l'image de la vidéo, avec un lien vers YouTube.
    ratio = 16 / 9;
    contenu = `<a class="youtube-apercu" href="https://www.youtube.com/watch?v=${media.id}" target="_blank" rel="noopener">
      <img src="https://i.ytimg.com/vi/${media.id}/hqdefault.jpg" alt="${MOTS.youtube} ${titre}" loading="lazy">
      <span>${MOTS.voirYoutube}</span></a>`;
  } else if (media.type === "youtube") {
    ratio = 16 / 9;
    // referrerpolicy : indique à YouTube sur quel site la vidéo est intégrée (obligatoire depuis 2025)
    contenu = `<iframe src="https://www.youtube-nocookie.com/embed/${media.id}"
      title="${MOTS.youtube} ${titre}" loading="lazy" allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
      allow="autoplay; encrypted-media; picture-in-picture"></iframe>`;
  } else if (media.type === "video") {
    ratio = media.largeur / media.hauteur;
    contenu = `<video src="${RACINE}${media.src}" width="${media.largeur}" height="${media.hauteur}"
      autoplay muted loop playsinline></video>`;
  } else {
    ratio = media.largeur / media.hauteur;
    const alt = traduire(media, "alt") || `${titre}, ${MOTS.image} ${numero}`;
    contenu = `<img src="${RACINE}${media.src}" width="${media.largeur}" height="${media.hauteur}"
      alt="${alt}" loading="lazy">`;
  }

  const legende = traduire(media, "legende");
  const figcaption = legende ? `<figcaption>${legende}</figcaption>` : "";
  return `<figure class="media" style="--ratio: ${ratio}">${contenu}${figcaption}</figure>`;
}
