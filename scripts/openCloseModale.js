const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");

function launchModal() {
    modalbg.style.display = "block"; /*pour faire apparaitre la modale*/
  }
  
   modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
 
  
  // close modal
  function closeModal() {
    modalbg.style.display = "none"; /*pour faire disparaitre la modale*/
  }
  
  closeBtn.addEventListener("click", closeModal);