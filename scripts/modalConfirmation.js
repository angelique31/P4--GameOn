const btnSubmit = document.querySelector(".btn-submit");

//Faire apparaitre la modale de confirmation d'inscription
function launchModal1() {
    modalConfirmation.style.display = "block";
    spanValidModal.innerHTML = "Merci pour <br> votre inscription";
  }
  
  btnSubmit.addEventListener("click", launchModal1);