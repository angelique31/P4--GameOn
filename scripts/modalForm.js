const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const modalbg = document.querySelector(".bground");

/**
 * Fonction pour ouvrir la modale
 */
function launchModal() {
  modalbg.style.display = "block"; 
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


/**
 * Fonction pour fermer la modale
 */
function closeModal() {
  modalbg.style.display = "none"; 
}

closeBtn.addEventListener("click", closeModal);
