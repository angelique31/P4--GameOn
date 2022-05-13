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
    switch (
      e.target.id 
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
      default:
        null;
    }
  });
});


/**
 * function firstname (first)
 * @param {*} value 
 * @returns 
 */
const firstChecker = (value) => {
  const firstContainer = document.querySelector(".first-container");
  const errorDisplay = document.querySelector(".first-container > span");
  let isValid = false;

  //Si le prénom fait moins de 2 caractères, on met un message d'erreur
  if (value.length < 2) {
    firstContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  // Si au moins 2 caractères sont tapés, on enlève le message d'erreur
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  //IsValid devient true pour la soumission du formulaire
  return isValid;
};


/**
 * function name (last)
 * @param {*} value 
 * @returns 
 */
const lastChecker = (value) => {
  const lastContainer = document.querySelector(".last-container");
  const errorDisplay = document.querySelector(".last-container > span");
  let isValid = false;

  //Si le nom fait moins de 2 caractères, on met un message d'erreur
  if (value.length < 2) {
    lastContainer.classList.add("error");
    errorDisplay.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  // Si au moins 2 caractères sont tapés, on enlève le message d'erreur
  } else {
    lastContainer.classList.remove("error");
    errorDisplay.textContent = "";
    isValid = true;
  }
  //IsValid devient true pour la soumission du formulaire
  return isValid;
};


/**
 * function email
 * @param {*} value 
 * @returns 
 */
const emailChecker = (value) => {
  const emailContainer = document.querySelector(".email-container");
  const errorDisplay = document.querySelector(".email-container > span");
  let isValid = false;

  //Si ce qui est tapé dans l'input de l'email est différent du regex ci dessous, on affiche un message d'erreur
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    emailContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une adresse mail valide.";
  } else {
    //Si ce qui est tapé dans l'input de l'email correspond au regex ci dessus, on enlève le message d'erreur
    errorDisplay.textContent = "";
    isValid = true;
  }
  //IsValid devient true pour la soumission du formulaire
  return isValid;
};


/**
 * function birthdate
 * @param {*} value 
 * @returns 
 */
const birthdateChecker = (value) => {
  const birthdateContainer = document.querySelector(".birthdate-container");
  const errorDisplay = document.querySelector(".birthdate-container > span");
  let isValid = false;

  //Si aucune date de naissance n'est affichée, on affiche le message d'erreur
  if (!value) {
    birthdateContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une date de naissance.";
  //Si on met une date de naissance, on enlève le message d'erreur
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  //IsValid devient true pour la soumission du formulaire
  return isValid;
};


/**
 * function quantity
 * @param {*} value 
 * @returns 
 */
const quantityChecker = (value) => {
  const quantityContainer = document.querySelector(".quantity-container");
  const errorDisplay = document.querySelector(".quantity-container > span");
  let isValid = false;
  //Si on ne met aucunes valeures dans l'input, faire apparaitre un message d'erreur, et renvoyer false
  if (!value) {
    quantityContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer un chiffre.";
  //Si on met un chiffre compris entre 0 et 99, enlever le message d'erreur et renvoyer true
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  // IsValid devient true pour la soumission du formulaire
  return isValid;
};


/**
 * function checkbox
 * @returns 
 */
const checkboxContainer = () => {
  const errorDisplay = document.querySelector(".formData > small");
  const radios = document.querySelectorAll('input[name = "location"]');
  // console.log(radios)
  isValid = false;

  //La boucle s'execute autant de fois qu'il y a de boutons radios
  for (let i = 0; i < radios.length; i++) {
    // console.log(radios[i])
    if (radios[i].checked) {
      isValid = true;
      errorDisplay.textContent = "";
      break;
    } else {
      errorDisplay.textContent = "Veuillez sélectionner un choix.";
      errorDisplay.style.color = "red";
      errorDisplay.style.fontSize = "0.6em";

    }
    // console.log(radios[i])
  }
  console.log(isValid);
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
  // console.log(checkbox1);

  //Si la checkbox des CGU n'est pas cochée, on affiche le message d'erreur
  if (!checkbox1.checked) {
    check.classList.add("error");
    errorDisplay.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  //Si la chekbox des CGU est cochée, on enlève le message d'erreur
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  // IsValid devient true pour la soumission du formulaire
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

    //La boucle s'execute autant de fois qu'il y a d'inputs
    for (let i = 0; i < inputs.length; i++) {
      //  console.log(i)  //11 inputs
      // console.log(inputs[i].value)
      //On vérifie si au moins une des conditions est vrai avec l'opérateur logique ou ||
      if (
        inputs[i].type === "text" ||
        inputs[i].type === "email" ||
        inputs[i].type === "date" ||
        inputs[i].type === "number"
      ) {
        // On ajoute la valeur des inputs à la fin du tableau nommé data grâce à la méthode .push
        data.push(inputs[i].value);
        // console.log(inputs[i].value);
      }

      
      if (inputs[i].type === "checkbox") {
        let currentValue = "";
        
        if (inputs[i].checked) {
          currentValue = inputs[i].value;
        }
        data.push(currentValue);
      }
      
      // On pointe les 6 villes :
      // console.log(inputs[i].value)
    }
    //on retourne un tableau 
    return data;
  };
  
  /**
   * Vérifie la valeur de chacun des inputs
   * @param {*} values - array: les données du query selector
   * @returns - bool: true si valid
   */
  const formIsValid = (values) => {
    let validInputs = [];

    // On indique si la valeur de l'input est valide ou non, en accédant à la valeur de l'input vià l'index du tableau
    // isValid = firstChecker(values[0]);
    // isValid = lastChecker(values[1]);
    // isValid = emailChecker(values[2]);
    // isValid = birthdateChecker(values[3]);
    // // console.log(isValid);
    // isValid = quantityChecker(values[4]);
    // // console.log(isValid);
    // isValid = checkboxChecker(values[5]);
    // // console.log(isValid);
    // isValid = checkboxContainer();
    // console.log(isValid);

    validInputs.push(firstChecker(values[0]));
    validInputs.push(lastChecker(values[1]));
    validInputs.push(emailChecker(values[2]));
    validInputs.push(birthdateChecker(values[3]));
    validInputs.push(quantityChecker(values[4]));
    validInputs.push(checkboxChecker(values[5]));
    validInputs.push(checkboxContainer());
    
    console.log(validInputs);

    let isValid = true;
  
   for (let i = 0; i < validInputs.length; i++) {
      if(validInputs[i] === false) {
        isValid = false;
        break;
      }
     
   }
      
    //isValid est true si toutes les fonctions renvoient true
    return isValid;
  };
  // console.log("formValue", formValues(inputs));
  // console.log("formIsValid", formIsValid(formValues(inputs)));

  // si Valid
  if (formIsValid(formValues(inputs))) {
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".formConfirmation").style.display = "block";
  } else {
    document.querySelector(".formConfirmation").style.display = "none";
  }
};

submitInput.addEventListener("click", (e) => onSubmit(e));
// console.log(submitInput);
// console.log(onSubmit);
