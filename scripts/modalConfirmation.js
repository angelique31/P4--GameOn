const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanValidModal = document.querySelector(".formConfirmation > span");
const btnSubmitConfirm = document.querySelector(".btn-submit-confirm");


//Faire apparaitre la modale de confirmation d'inscription
/**
 * @requires
 */
function launchModal() {
    modalConfirmation.style.display = "block";
    spanValidModal.innerHTML = "Merci pour <br> votre inscription";
  }
  
  btnSubmit.addEventListener("click", launchModal);

  // close modal
function closeModal() {
  modalbg.style.display = "none"; /*pour faire disparaitre la modale*/
}

btnSubmitConfirm.addEventListener("click", closeModal);
