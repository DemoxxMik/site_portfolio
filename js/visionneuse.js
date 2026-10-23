/* ==========================================================================
   Visionneuse : un clic sur une image d'un projet l'affiche en grand.

   - flèches à l'écran, touches ← → du clavier ou glissement du doigt
     pour passer d'une image à l'autre du même projet ;
   - Échap, la croix ou un clic à côté de l'image pour fermer.

   On utilise l'élément <dialog> du navigateur : il se place tout seul
   au-dessus du reste, bloque le défilement de la page derrière et gère
   la touche Échap.
   ========================================================================== */

const visionneuse = document.getElementById("visionneuse");
const visionneuseImage = visionneuse.querySelector("img");
const visionneuseLegende = visionneuse.querySelector(".visionneuse-legende");
const visionneuseCompteur = visionneuse.querySelector(".visionneuse-compteur");

let imagesDuProjet = []; // les <img> du projet ouvert
let indexActuel = 0;     // position de l'image affichée dans cette liste

/* Ouvre la visionneuse sur l'image numéro « index ». */
function afficherImage(index) {
  // Le modulo fait boucler : après la dernière image, on revient à la première
  indexActuel = (index + imagesDuProjet.length) % imagesDuProjet.length;
  const image = imagesDuProjet[indexActuel];
  const legende = image.closest(".media").querySelector("figcaption");

  visionneuseImage.src = image.currentSrc || image.src;
  visionneuseImage.alt = image.alt;
  visionneuseLegende.textContent = legende ? legende.textContent : "";
  visionneuseCompteur.textContent = (indexActuel + 1) + " / " + imagesDuProjet.length;
}

/* Un clic sur une image de projet ouvre la visionneuse. */
document.getElementById("panneau").addEventListener("click", (evenement) => {
  const image = evenement.target.closest(".media img");
  if (!image || image.closest("a")) return; // pas les aperçus YouTube, qui sont des liens

  imagesDuProjet = [...document.querySelectorAll("#panneau .media img")]
    .filter((img) => !img.closest("a"));
  afficherImage(imagesDuProjet.indexOf(image));
  visionneuse.showModal();
});

/* Les boutons de la visionneuse */
visionneuse.querySelector(".visionneuse-precedente").addEventListener("click", () => afficherImage(indexActuel - 1));
visionneuse.querySelector(".visionneuse-suivante").addEventListener("click", () => afficherImage(indexActuel + 1));
visionneuse.querySelector(".visionneuse-fermer").addEventListener("click", () => visionneuse.close());

/* Un clic sur le fond noir (et pas sur l'image ou un bouton) ferme. */
visionneuse.addEventListener("click", (evenement) => {
  if (evenement.target === visionneuse || evenement.target.classList.contains("visionneuse-scene")) {
    visionneuse.close();
  }
});

/* Clavier : flèches gauche et droite */
visionneuse.addEventListener("keydown", (evenement) => {
  if (evenement.key === "ArrowLeft") afficherImage(indexActuel - 1);
  if (evenement.key === "ArrowRight") afficherImage(indexActuel + 1);
});

/* Téléphone : glisser le doigt vers la gauche ou la droite */
let departDuDoigt = null;
visionneuse.addEventListener("touchstart", (evenement) => {
  departDuDoigt = evenement.touches[0].clientX;
}, { passive: true });
visionneuse.addEventListener("touchend", (evenement) => {
  if (departDuDoigt === null) return;
  const distance = evenement.changedTouches[0].clientX - departDuDoigt;
  if (Math.abs(distance) > 50) afficherImage(indexActuel + (distance < 0 ? 1 : -1));
  departDuDoigt = null;
});
