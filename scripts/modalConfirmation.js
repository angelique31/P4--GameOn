const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanValidModal = document.querySelector(".formConfirmation > span");
const btnSubmitConfirm = document.querySelector(".btn-submit-confirm");


/**
 * Fonction pour ouvrir la modale de confirmation d'inscription
 */
function launchModal1() {
    modalConfirmation.style.display = "block";
    spanValidModal.innerHTML = "Merci pour <br> votre inscription";
  }
  
  btnSubmit.addEventListener("click", launchModal1);

  /**
   * Fonction pour fermer la modale de confirmation d'inscription
   */
function closeModal1() {
  modalbg.style.display = "none"; 
}

btnSubmitConfirm.addEventListener("click", closeModal1);
