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
//const location = document.getElementById("ville");
const locationTours = document.getElementsByName("location");
const condition = document.getElementById("checkbox1");
const Message = document.getElementById("checkbox");
const validForm = document.querySelector(".validForm");
const validMessage = document.getElementById("confirmMessage");
const btnSubmit = document.getElementById("btnSubmit");
const btnValider = document.getElementById("btnFermer");

let locationName = 'vide'

function validate() {
    if (validFirstName(prenom) &&
        validLastName(nom) &&
        validEmail(email) &&
        validBirthDate(dateNaiss) &&
        validQuantity(quantité) &&
        validLocation() &&
        valideCondition(condition)

    ) {
        let contact = {
            firstName: prenom.value,
            lastName: nom.value,
            email: email.value,
            birthdate: dateNaiss.value,
            quantity: quantité.value,
            location: locationName,
            checkbox: condition.value
        };
        console.log("contact:", contact);
        pageRemerciment()

    } else {
        console.log("le formulaire n'est pas valide");
    }
}







// form.addEventListener('submit', (e) => {
//         //console.log("formulaire envoi en cours");
//         e.preventDefault();

//         //if (validFirstName(form.first));
//         if (validFirstName(prenom) &&
//             validLastName(nom) &&
//             validEmail(email) &&
//             validBirthDate(dateNaiss) &&
//             validQuantity(quantité) &&
//             validLocation() &&
//             valideCondition(condition)

//         ) {
//             let contact = {
//                 firstName: prenom.value,
//                 lastName: nom.value,
//                 email: email.value,
//                 birthdate: dateNaiss.value,
//                 quantity: quantité.value,
//                 location: locationTours.value,
//                 checkbox: condition.value



//             };
//             console.log("contact:", contact);

//         } else {
//             console.log("le formulaire n'est pas valide");
//         }


//     })
/****************le prénom ********************************/
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
        span.innerHTML = "Vous devez entrer votre date de naissance.";
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

/*********************la location************************************* */

// function verifeyLocation() {
//     for (let i = 0; i < locationTours.length; i++) {
//         locationTours[i].addEventListener('click', function() {
//             //desactive tous les choix
//             for (let j = 0; j < locationTours.length; j++) {
//                 locationTours[j].checked = false;
//             }
//             //activele choix séléctionné
//             this.checked = true
//         })
//     }
// }

// function validLocation() {

//     const locationText = document.getElementById("locationText");
//     if (!verifeyLocationCheck()) {
//         locationText.innerHTML = 'merci de choisir une ville';
//         locationText.classList.remove('text-succes');
//         locationText.classList.add('text-danger');
//         return (false);

//     } else {
//         locationText.innerHTML = "champs validé";
//         locationText.classList.remove('text-danger');
//         locationText.classList.add('text-succes');
//         return (true);
//     }
// }

// function verifeyLocationCheck() {
//     for (let i = 0; i < locationTours.length; i++) {
//         if (locationTours[j].checked == true)
//             return true
//     }
//     return false;
// }



function verifLocationTourname() {
    locTournamentChec = false;
    for (let i = 0; i < locationTours.length; i++) {
        const isCheck = locationTours[i].checked;
        if (isCheck) {
            locTournamentChec = true;
            locationName = locationTours[i].value;
            return true
        }
    }
    return false
}

locationTours.forEach((checkedBoxInput) => checkedBoxInput.addEventListener('change', function() {
    validLocation(this);
}));

function validLocation() {
    let locTournamentChec

    if (!verifLocationTourname(locTournamentChec)) {

        locationText.innerHTML = "Merci de cocher une ville";
        locationText.classList.remove('text-succes');
        locationText.classList.add('text-danger');
        return false;
    } else {
        locationText.innerHTML = "Champs valide";
        locationText.classList.remove('text-danger');
        locationText.classList.add('text-succes');
        return true;
    }
}

/***********************les condition*****************************/
condition.addEventListener('change', function() {
    valideCondition(this)
})

//vérifiersi la condition est coché ou pas

const valideCondition = function() {
    if (condition.checked === false) {

        Message.innerHTML = "Merci d'accepter les conditions d'utilisations";
        Message.classList.remove('text-succes');
        Message.classList.add('text-danger');
        return false;

    } else {
        Message.innerHTML = "Champs Valide";
        Message.classList.remove('text-danger');
        Message.classList.add('text-succes');
        return true
    }
};

/*******************bouton validation******************************** */
function pageRemerciment() {
    form.style.display = 'none';
    validForm.style.display = "flex";
    validMessage.innerHTML = "Merci pour votre réservation";


};
btnValider.addEventListener('click', function() {
    window.location.reload();
})



/************bouton submit************************* */