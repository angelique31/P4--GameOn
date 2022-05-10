const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanValidModal = document.querySelector(".formConfirmation > span");

//Faire apparaitre la modale de confirmation d'inscription
function launchModal1() {
    modalConfirmation.style.display = "block";
    spanValidModal.innerHTML = "Merci pour <br> votre inscription";
  }
  
  btnSubmit.addEventListener("click", launchModal1);