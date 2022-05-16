/**
 * Fonction de la navbar
 */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const form = document.querySelector("form");

/**
 * Bouton de soumission du formulaire "c'est parti"
 */
const submitInput = form[form.length - 1];

/**
 * On point les inputs par leur id
 */
const inputs = document.querySelectorAll(
  "#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 "
);

/**
 * Fonction qui permet d'évoluer dans chacun des inputs
 * @param {*} e - object event
 * @param {*} e.target.value - value de l'input
 */
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstChecker(e.target.value);
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
      default:
        null;
    }
  });
});

/**
 * function firstname (first)
 * @param {*} value
 * @returns - true pour la soumission du formulaire
 */
const firstChecker = (value) => {
  const firstContainer = document.querySelector(".first-container");
  const errorDisplay = document.querySelector(".first-container > span");
  let isValid = false;

  if (value.length < 2) {
    firstContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * function name (last)
 * @param {*} value
 * @returns - true pour la soumission du formulaire
 */
const lastChecker = (value) => {
  const lastContainer = document.querySelector(".last-container");
  const errorDisplay = document.querySelector(".last-container > span");
  let isValid = false;

  if (value.length < 2) {
    lastContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    lastContainer.classList.remove("error");
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * function email
 * @param {*} value
 * @returns - true pour la soumission du formulaire
 */
const emailChecker = (value) => {
  const emailContainer = document.querySelector(".email-container");
  const errorDisplay = document.querySelector(".email-container > span");
  let isValid = false;

  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    emailContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une adresse mail valide.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * function birthdate
 * @param {*} value
 * @returns - true pour la soumission du formulaire
 */
const birthdateChecker = (value) => {
  const birthdateContainer = document.querySelector(".birthdate-container");
  const errorDisplay = document.querySelector(".birthdate-container > span");
  let isValid = false;

  if (!value) {
    birthdateContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une date de naissance.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * function quantity
 * @param {*} value
 * @returns - true pour la soumission du formulaire
 */
const quantityChecker = (value) => {
  const quantityContainer = document.querySelector(".quantity-container");
  const errorDisplay = document.querySelector(".quantity-container > span");
  let isValid = false;

  if (!value) {
    quantityContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer un chiffre.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * function checkbox
 * @returns - true pour la soumission du formulaire
 */
const checkboxContainer = () => {
  const errorDisplay = document.querySelector(".formData > small");
  const radios = document.querySelectorAll('input[name = "location"]');
  isValid = false;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isValid = true;
      errorDisplay.textContent = "";
      break;
    } else {
      errorDisplay.textContent = "Veuillez sélectionner un choix.";
      errorDisplay.style.color = "red";
      errorDisplay.style.fontSize = "0.6em";
    }
  }
  return isValid;
};

/**
 * function checkbox cgv
 * @returns
 */
const checkboxChecker = () => {
  const errorDisplay = document.querySelector(".formData > div");
  const check = document.querySelector(".checkbox1");
  const checkbox1 = document.querySelector("#checkbox1");
  let isValid = false;

  if (!checkbox1.checked) {
    check.classList.add("error");
    errorDisplay.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * Vérifier les inputs du formulaire avant sa soumission
 * @param {*} e - object event
 */
const onSubmit = (e) => {
  e.preventDefault();

  /**
   * Récupérer les valeurs des inputs du formulaire
   * @param {*} inputs - array: les tags du query selector
   * @returns - array: les données du query selector
   */
  const formValues = (inputs) => {
    let data = [];

    for (let i = 0; i < inputs.length; i++) {
      if (
        inputs[i].type === "text" ||
        inputs[i].type === "email" ||
        inputs[i].type === "date" ||
        inputs[i].type === "number"
      ) {
        data.push(inputs[i].value);
      }

      if (inputs[i].type === "checkbox") {
        let currentValue = "";

        if (inputs[i].checked) {
          currentValue = inputs[i].value;
        }
        data.push(currentValue);
      }
    }
    return data;
  };

  /**
   * Vérifie la valeur de chacun des inputs
   * @param {*} values - array: les données du query selector
   * @returns - boolean: true si valid
   */
  const formIsValid = (values) => {
    /**
     * Teste la validité de chaque input
     * @type boolean
     */
    let validInputs = [];

    validInputs.push(firstChecker(values[0]));
    validInputs.push(lastChecker(values[1]));
    validInputs.push(emailChecker(values[2]));
    validInputs.push(birthdateChecker(values[3]));
    validInputs.push(quantityChecker(values[4]));
    validInputs.push(checkboxChecker(values[5]));
    validInputs.push(checkboxContainer());

    let isValid = true;

    for (let i = 0; i < validInputs.length; i++) {
      if (validInputs[i] === false) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  // si Valid
  if (formIsValid(formValues(inputs))) {
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".formConfirmation").style.display = "block";
  } else {
    document.querySelector(".modal-body").style.display = "block";
    document.querySelector(".formConfirmation").style.display = "none";
  }
};

submitInput.addEventListener("click", (e) => onSubmit(e));
