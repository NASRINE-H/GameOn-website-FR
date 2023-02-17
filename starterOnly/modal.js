function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//la fermeture de la modal
let span = document.getElementsByClassName("close")[0];
span.addEventListener('click', () => {

    modalbg.style.display = "none";

})

//Recuperation des champs du formulaire:
const form = document.getElementById("myForm")
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email")
const dateNaiss = document.getElementById("birthdate");
const quantité = document.getElementById("quantity");

const btnSubmit = document.getElementById("btnSubmit");





form.addEventListener('submit', (e) => {
        //console.log("formulaire envoi en cours");
        e.preventDefault();

        //if (validFirstName(form.first));
        if (validFirstName(prenom) &&
            validLastName(nom) &&
            validEmail(email) &&
            validBirthDate(dateNaiss) &&
            validQuantity(quantité)
        ) {
            let contact = {
                firstName: prenom.value,
                lastName: nom.value,
                email: email.value,
                birthdate: dateNaiss.value,
                quantity: quantité.value



            };
            console.log("contact:", contact);

        } else {
            console.log("le formulaire n'est pas valide");
        }


    }) /****************le prénom ********************************/
    //L' changeévénement est déclenché pour <input>les éléments
prenom.addEventListener('change', function() {
    validFirstName(this)

})

//création des RegEx et tester le valeurs
//La Element.nextElementSiblingpropriété en lecture seule renvoie
//l 'élément suivant immédiatement celui spécifié dans la liste des enfants de son parent, 
//ou null si l 'élément spécifié est le dernier de la liste.
const validFirstName = function(inputFirst) {
    let firstNameRegExp = new RegExp(
        '[A-Za-z ]+$'
    );
    let span = inputFirst.nextElementSibling;
    if (firstNameRegExp.test(inputFirst.value)) {
        span.innerHTML = 'Prénom correct';
        span.classList.remove('text-danger');
        span.classList.add('text-success');
        return true;
    } else {
        span.innerHTML = 'Prénom incorrect';
        span.classList.remove('text-success');
        span.classList.add('text-danger');
        return false;

    }
}

/***************************Le nom *******************************/

nom.addEventListener('change', function() {
    validLastName(this)
})
const validLastName = function(inputLast) {
    let lastNameRegExp = new RegExp(
        '[A-Za-z ]+$'
    );
    let span = inputLast.nextElementSibling;
    if (lastNameRegExp.test(inputLast.value)) {
        span.innerHTML = 'Nom correct';
        span.classList.remove('text-danger');
        span.classList.add('text-success');
        return true;
    } else {
        span.innerHTML = 'Nom incorrect';
        span.classList.remove('text-success');
        span.classList.add('text-danger');
        return false;
    }
}

/*************************email*********************************** */
email.addEventListener('change', function() {
    validEmail(this)
});

const validEmail = function(inputEmail) {
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
    );

    let span = inputEmail.nextElementSibling;
    if (emailRegExp.test(inputEmail.value)) {
        span.innerHTML = 'Email correct';
        span.classList.remove('text-danger');
        span.classList.add('text-success');
        return true;
    } else {
        span.innerHTML = 'Email incorrect';
        span.classList.remove('text-success');
        span.classList.add('text-danger');
        return false;
    }

}

/************************birthdaate********************************************** */
dateNaiss.addEventListener('change', function() {
    validBirthDate(this)
})

const validBirthDate = function(inputBirthDate) {
    let span = inputBirthDate.nextElementSibling;
    if (!birthdate) {
        span.innerHTML = "Veuillez entrer une date de naissance valide";
        span.classList.remove('text-succes');
        span.classList.add('text-danger');

        return false;
    } else {
        span.innerHTML = "Champs Valide";
        span.classList.remove('text-danger');
        span.classList.add('text-succes');

        return true;
    }
};

/********************************nombre de tours********************************** */
quantité.addEventListener('change', function() {
    validQuantity(this)
})
const validQuantity = function(inputQuantity) {
    let span = inputQuantity.nextElementSibling;
    if (quantité.value == 0) {
        span.innerHTML = "Merci de saisir le nombre de tournois";
        span.classList.remove('text-succes');
        span.classList.add('text-danger');
        return false;

    } else if (quantité.value > 50) {
        span.innerHTML = "vous n'avez pas le droit de faire ce nombre de tournois ";
        span.classList.remove('text-succes');
        span.classList.add('text-danger');
        return false;

    } else {
        span.innerHTML = "Champs Valide";
        span.classList.remove('text-danger');
        span.classList.add('text-succes');

        return true;
    }
}