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
const modalConfirmation = document.querySelector(".formConfirmation");
const spanValidModal = document.querySelector(".formConfirmation > span");

//On pointe les inputs
const inputs = document.querySelectorAll(
  "#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 "
);
// console.log(inputs)

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


/*********function firstname (first) ***********/
const firstChecker = (value) => {
  const firstContainer = document.querySelector(".first-container");
  const errorDisplay = document.querySelector(".first-container > span");
  let isValid = false;

  //Est ce que le prénom fait au moins de 2 caractères?
  if (value.length < 2) {
    firstContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    // firstContainer.classList.remove("error");
    errorDisplay.textContent = ""; //on enlève le texte qui dit l'erreur
    isValid = true;
  }
  return isValid;
};

/*********function name (last) ***********/
const lastChecker = (value) => {
  const lastContainer = document.querySelector(".last-container");
  const errorDisplay = document.querySelector(".last-container > span");
  let isValid = false;

  if (value.length < 2) {
    lastContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    // lastContainer.classList.remove("error");
    errorDisplay.textContent = ""; //on vide le texte qui dit l'erreur
    isValid = true;
  }
  return isValid;
};


/*********function email ***********/
const emailChecker = (value) => {
  const emailContainer = document.querySelector(".email-container");
  const errorDisplay = document.querySelector(".email-container > span");
  let isValid = false;
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    emailContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une adresse mail valide.";
  } else {
    // emailContainer.classList.remove("error");
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/*********function birthdate ***********/

const birthdateChecker = (value) => {
  const birthdateContainer = document.querySelector(".birthdate-container");
  const errorDisplay = document.querySelector(".birthdate-container > span");
  let isValid = false;

  if (!value) {
    birthdateContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une date de naissance.";
  } else {
    // birthdateContainer.classList.remove("error");
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


/*********function quantity ***********/
const quantityChecker = (value) => {
  const quantityContainer = document.querySelector(".quantity-container");
  const errorDisplay = document.querySelector(".quantity-container > span");
  let isValid = false;

  if (!value) {
    quantityContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer un chiffre.";
  } else {
    // quantityContainer.classList.remove("error");
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/*************checkbox************* */

const checkboxContainer = (value) => {
  const errorDisplay = document.querySelector(".formData > small");
  const checkboxInputs = document.queryselector("input[name=location]:checked");
  let isValid = false;

  if (!checkboxInputs.checked) {
    // checkboxInputs.classList.add("error");
    errorDisplay.textContent = "Veuillez sélectionner un choix.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**********cgv checked*************/
const errorDisplay = document.querySelector(".formData > div");
const check = document.querySelector(".checkbox1");
const checkbox1 = document.querySelector("#checkbox1");
let isValid = false;

const checkboxChecker = (value) => {
  if (!checkbox1.checked) {
    check.classList.add("error");
    errorDisplay.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    // check.classList.remove("error");
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

console.log(form[13]);
const submitInput = form[form.length-1];
console.log(submitInput);

/*********Fonction submit************/
submitInput.addEventListener("click", function (e) {
  console.log('entrée dans le formulaire', e);
  //on empêche le rechargement de la page
  e.preventDefault();

  if (
    firstChecker(value) &&
    lastChecker(value) &&
    emailChecker(value) &&
    birthdateChecker(value) &&
    quantityChecker(value) &&
    checkboxChecker(value) &&
    checkboxContainer(value)
  ) {
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".formConfirmation").style.display = "block";
  }

  
  // if (!inputs.value) {
  //   document.querySelector(".modal-body").style.display = "block";
  //   document.querySelector(".formConfirmation").style.display = "none";
  // }

  //   vider les champs une fois qu'on a appuyé sur "valider"
  inputs.forEach((input) => (input.value = ""));
});

// const testSubmit = (e) => {
//   console.log('entrée dans le formulaire', e);
//   //on empêche le rechargement de la page
//   e.preventDefault();

//   if (
//     firstChecker() &&
//     lastChecker() &&
//     emailChecker() &&
//     birthdateChecker() &&
//     quantityChecker() &&
//     checkboxChecker() &&
//     checkboxContainer()
//   ) {
//     console.log('condition vérifiée');
//     document.querySelector(".modal-body").style.display = "none";
//     document.querySelector(".formConfirmation").style.display = "block";
//   }
// };