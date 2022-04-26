const btnSubmit = document.querySelector(".btn-submit");

function launchModal1() {
    modalConfirmation.style.display = "block";
    spanValidModal.innerHTML = "Merci pour <br> votre inscription";
  }
  
  btnSubmit.addEventListener("click", launchModal1);