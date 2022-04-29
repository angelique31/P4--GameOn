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

/********************For each*************/
//On créé un for each pour pointer tous les inputs et pour évoluer dans chacun d'eux
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // console.log(e.target.value); //C'est ce qui est tapé dans l'input en temps réel
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
  // console.log('test du firstchecker', value, errorDisplay);

  //Est ce que le prénom fait au moins de 2 caractères?
  if (value.length < 2) {
    firstContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      // console.log(errorDisplay);
  } else {
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

  // console.log('call avec submit');

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

// TODO: début de la correction
// J'ai séparé l'add event listener de la fonction pour gagner en lisbilité
// Faut utiliser la jsDoc
// Pense à supprimer les consoles.log que tu n'utilises plus
// Pense à supprimer mes commentaires à supp

/**
 * Vérifie les inputs du formulaire avant sa soumission
 * @param {*} e - object event
 */
const onSubmit = (e) => {
  e.preventDefault();

  /**
   * Récupère les valeurs des inputs du formulaire
   * @param {*} inputs - array: les tags du query selector
   * @returns - array: les données du query selector
   */
  const formValues = (inputs) => {
    let data = [];
  
    for (let i = 0; i < inputs.length; i++) {
      // Com' à sup: on ajoute la donnée uniquement si c'est pas un string
      if (inputs[i].type === 'text' || inputs[i].type === 'email' || inputs[i].type === 'date' || inputs[i].type === 'number') {
        data.push(inputs[i].value);
      }
      // Com' à sup: on ajoute uniquement si c'un checkbox et que c'checké
      if (inputs[i].type === 'checkbox') {
        let currentValue = '';
  
        if (inputs[i].checked) {
          currentValue = inputs[i].value;
        }
        data.push(currentValue);
      }
      // Com' à sup: pas besoin de le faire pour tes boutons radios. Car ta fonction n'utilise rien en paramètre
    }
    return data;
  }

  /**
   * Vérifie la valeur de chacun des inputs
   * @param {*} values - array: les données du query selector
   * @returns - bool: true si valid
   */
  const formIsValid = (values) => {
    let isValid = false;

    // Com à sup: on teste chacune des valeurs
    isValid = firstChecker(values[0]);
    isValid = lastChecker(values[1]);
    isValid = emailChecker(values[2]);
    isValid = birthdateChecker(values[3]);
    isValid = quantityChecker(values[4]);
    isValid = checkboxChecker(values[5]);
    isValid = checkboxChecker();

    return isValid;
  }

  // si Valid
  if (formIsValid(formValues(inputs))) {
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".formConfirmation").style.display = "block";
  }
  else {
    document.querySelector(".formConfirmation").style.display = "none";
  }
}

// C'est plus élégant de déclarer ces fonctions d'une part. Et de déclarer ces event listener après.
submitInput.addEventListener("click", (e) => onSubmit(e));

// Je t'ai gardé la fonction d'origine en dessous pour que tu puisses comparer les deux.
// TODO: fin de la correction

/*********Fonction submit************/
// submitInput.addEventListener("click", function (e) {
//   console.log('entrée dans le formulaire', e);
//   //on empêche le rechargement de la page
//   e.preventDefault();

//   if (
//     firstChecker(e.target.value) &&
//     lastChecker(e.target.value) &&
//     emailChecker(e.target.value) &&
//     birthdateChecker(e.target.value) &&
//     quantityChecker(e.target.value) &&
//     checkboxChecker(e.target.value) &&
//     checkboxContainer(e.target.value)
//   ) {
//     document.querySelector(".modal-body").style.display = "none";
//     document.querySelector(".formConfirmation").style.display = "block";
//   }

  
//   // if (!inputs.value) {
//   //   document.querySelector(".modal-body").style.display = "block";
//   //   document.querySelector(".formConfirmation").style.display = "none";
//   // }

//   //   vider les champs une fois qu'on a appuyé sur "valider"
//   inputs.forEach((input) => (input.value = ""));
// });

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