"use strict";

let form = document.querySelector("body > form")
let developers = document.querySelector("#developers");
let sitename = document.querySelector("#sitename");
let urlField = document.querySelector("#siteurl");
let dateField = document.querySelector("#date");
let visitorsField = document.querySelector("#visitors");
let emailField = document.querySelector("#email");
let division = document.querySelector("#division");
let payment = form.elements.payment;
let votes = document.querySelector("#votes");
let description = document.querySelector("#description");

developers.addEventListener('blur', EO => {
    validDevelopers(0);
});

function validDevelopers(autofocus) {
    let errorCount = 0;
    let developersValue = developers.value;
    let developersErr = developers.nextElementSibling;
    if (developersValue == '') {
        developersErr.innerHTML = 'Введите разработчиков';
        errorCount++;
    } else if (developersValue.length < 6) {
        developersErr.innerHTML = 'Разработчики должны быть длиннее 6 символов';
        errorCount++;
    } else {
        developersErr.innerHTML = ''
    }
    if (errorCount && autofocus) {
        developers.focus();
    }
    return errorCount;
}


