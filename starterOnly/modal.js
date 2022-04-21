function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.querySelector("form");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanValidModal = document.querySelector(".formConfirmation > span");

//On pointe les inputs
const inputs = document.querySelectorAll(
  "#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 "
);
// console.log(inputs)

/*****************Modal*************/
// open modal
function launchModal() {
  modalbg.style.display = "block"; /*pour faire apparaitre la modale*/
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal
function closeModal() {
  modalbg.style.display = "none"; /*pour faire disparaitre la modale*/
}

closeBtn.addEventListener("click", closeModal);

/**********Modal de confirmation d'inscription*****/

//modal de confirmation
function launchModal1() {
  modalConfirmation.style.display = "block";
  spanValidModal.innerHTML = "Merci pour <br> votre inscription";
}

btnSubmit.addEventListener("click", launchModal1);

/****************Le formulaire******************/

/*********function firstname (first) ***********/
const firstChecker = (value) => {
  const firstContainer = document.querySelector(".first-container");
  const errorDisplay = document.querySelector(".first-container > span");

  //Est ce que le prénom fait au moins de 2 caractères?
  if (value.length < 2) {
    firstContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  } else {
    // firstContainer.classList.remove("error");
    errorDisplay.textContent = ""; //on enlève le texte qui dit l'erreur
  }
  return false;
};

/*********function name (last) ***********/
const lastChecker = (value) => {
  const lastContainer = document.querySelector(".last-container");
  const errorDisplay = document.querySelector(".last-container > span");

  if (value.length < 2) {
    lastContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    // lastContainer.classList.remove("error");
    errorDisplay.textContent = ""; //on vide le texte qui dit l'erreur
  }
  return false;
};

/*********function email ***********/
const emailChecker = (value) => {
  const emailContainer = document.querySelector(".email-container");
  const errorDisplay = document.querySelector(".email-container > span");

  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    emailContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une adresse mail valide.";
    return 0;
  } else {
    // emailContainer.classList.remove("error");
    errorDisplay.textContent = "";
  }
  return false;
};

/*********function birthdate ***********/

const birthdateChecker = (value) => {
  const birthdateContainer = document.querySelector(".birthdate-container");
  const errorDisplay = document.querySelector(".birthdate-container > span");

  if (!value) {
    birthdateContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une date de naissance.";
  } else {
    // birthdateContainer.classList.remove("error");
    errorDisplay.textContent = "";
  }
  return false
};

//convert today date to input format
// const today = new Date().toISOString().split("T")[0];
// birthdate.value = today;
// birthdate.max = today;

/*********function quantity ***********/
const quantityChecker = (value) => {
  const quantityContainer = document.querySelector(".quantity-container");
  const errorDisplay = document.querySelector(".quantity-container > span");

  if (!value) {
    quantityContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer un chiffre.";
  } else {
    // quantityContainer.classList.remove("error");
    errorDisplay.textContent = "";
  }
  return false
};

/*************checkbox************* */

const checkboxContainer = () => {
  const errorDisplay = document.querySelector(".formData > small");
  const checkboxInputs = document.queryselector("input[name=location]:checked");

  if (!checkboxInputs.checked) {
    // checkboxInputs.classList.add("error");
    errorDisplay.textContent = "Veuillez sélectionner un choix.";
  } else {
    errorDisplay.textContent = "";
  }
  return false
};

/**********cgv checked*************/
const errorDisplay = document.querySelector(".formData > div");
const check = document.querySelector(".checkbox1");
const checkbox1 = document.querySelector("#checkbox1");

const checkboxChecker = (value) => {
  if (!checkbox1.checked) {
    check.classList.add("error");
    errorDisplay.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    // check.classList.remove("error");
    errorDisplay.textContent = "";
  }
  return false
};

/********************For each*************/
//On créé un for each pour pointer tous les inputs et pour évoluer dans chacun d'eux
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log(e.target.value); //C'est ce qui est tapé dans l'input en temps réel
    switch (
      e.target.id //on voit dans quel input on tape les lettres
    ) {
      case "first":
        firstChecker(e.target.value); //(e.target.value) est le paramètre de la fonction firstChecker
        break;
      case "last":
        lastChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      case "checkbox1":
        checkboxChecker(e.target.value);
        break;
      case "input[name=location]":
        checkboxContainer(e.target.value);
      default:
        null;
    }
  });
});

form.addEventListener("submit", function (e) {
  //on empêche le rechargement de la page
  e.preventDefault();

  if (
    firstChecker &&
    lastChecker &&
    emailChecker &&
    birthdateChecker &&
    quantityChecker &&
    checkboxChecker &&
    checkboxContainer
  ) {
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".formConfirmation").style.display = "block";
  }

  //   vider les champs une fois qu'on a appuyé sur "valider"
  inputs.forEach((input) => (input.value = ""));
});
