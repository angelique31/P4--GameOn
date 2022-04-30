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
const submitInput = form[form.length-1];

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

  //Si le prénom fait moins de 2 caractères, on met un message d'erreur
  if (value.length < 2) {
    firstContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else {
    errorDisplay.textContent = "";
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
    lastContainer.classList.remove("error");
    errorDisplay.textContent = ""; 
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
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/*************checkbox************* */

const checkboxContainer = () => {
  const errorDisplay = document.querySelector(".formData > small");
  const checkboxInputs = document.queryselector("input[name=location]:checked");
  let isValid = false;

  if (!checkboxInputs.checked) {
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

const checkboxChecker = () => {
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
    // console.log(i)  //11 inputs
    // console.log(inputs[i])
      if (inputs[i].type === 'text' || inputs[i].type === 'email' || inputs[i].type === 'date' || inputs[i].type === 'number') {
        data.push(inputs[i].value);
      }
      
      if (inputs[i].type === 'checkbox') {
        let currentValue = '';
       
        if (inputs[i].checked) {
          currentValue = inputs[i].value;
        }
        data.push(currentValue);
      }
      
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


submitInput.addEventListener("click", (e) => onSubmit(e));

