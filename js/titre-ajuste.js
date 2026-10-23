/* ==========================================================================
   Titre ajusté : le grand « Mikaël Mahussier » de l'accueil remplit toute
   la largeur de son panneau, quelle que soit la taille de la fenêtre
   (l'effet « fit-text » de Cargo).

   Principe : on mesure le titre à une taille connue (100 px), puis on applique
   une règle de trois pour qu'il fasse exactement la largeur disponible.
   ========================================================================== */

function ajusterTitres() {
  for (const titre of document.querySelectorAll(".titre-ajuste")) {
    const largeurDisponible = titre.parentElement.clientWidth
      - parseFloat(getComputedStyle(titre.parentElement).paddingLeft)
      - parseFloat(getComputedStyle(titre.parentElement).paddingRight);

    titre.style.fontSize = "100px";
    const largeurDuTexte = titre.getBoundingClientRect().width;
    titre.style.fontSize = (100 * largeurDisponible / largeurDuTexte) + "px";
  }
}

ajusterTitres();
// On recommence quand la police est chargée (elle change la largeur du texte)
document.fonts.ready.then(ajusterTitres);
// ...et quand la fenêtre change de taille
window.addEventListener("resize", ajusterTitres);
