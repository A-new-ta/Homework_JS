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

let inputs = document.querySelectorAll('input');


developers.addEventListener('blur', validDevelopers, false);


sitename.addEventListener('blur', validSite, false);

urlField.addEventListener('blur', validUrl, false);

dateField.addEventListener('blur', validDate, false);

visitorsField.addEventListener('blur', validVisitors, false);

emailField.addEventListener('blur', validEmail, false);

division.addEventListener('change', validDivision, false);

for (let i = 0; i < payment.length; i++) {
    payment[i].addEventListener('change',validPayment,false);
};

votes.addEventListener('change', validVotes, false);

description.addEventListener('blur', validDescription, false);

form.addEventListener('submit', validFormAll, false);



function validDevelopers(EO) {
    EO=EO ||window.event;
    
    let developersValue = developers.value;
    let developersErr = developers.nextElementSibling;
    if (!developersValue) {
        developersErr.innerHTML = 'Вы не ввели разработчиков';
        developers.classList.add('errcolor');
        // developers.focus();
        return false;

    } else if (developersValue.length < 3 || developersValue.length > 30) {
        developersErr.innerHTML = 'Длина строки может быть от 3 до 30 символов';
        developers.classList.add('errcolor');
        return false;
        
    } else {
        developersErr.innerHTML = '';
        developers.classList.remove('errcolor');
        return true;
    }
    
}

function validSite(EO) {
    EO = EO || window.event;

    let siteValue = sitename.value;
    let siteErr = sitename.nextElementSibling;
    if (!siteValue) {
        siteErr.innerHTML = 'Вы не ввели название сайта';
        sitename.classList.add('errcolor');
        return false;
    } else if (siteValue.length > 30) {
        siteErr.innerHTML = 'Название не может быть длиннее 30 символов';
        sitename.classList.add('errcolor');
        sitename.focus();
        return false;
    } else {
        siteErr.innerHTML = '';
        sitename.classList.remove('errcolor');
        return true;
    };
}


function validUrl(EO) {
    EO = EO || window.event;
    
    let urlValue = urlField.value;
    let urlErr = urlField.nextElementSibling;
    let pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlValue) {
        urlErr.innerHTML = 'Вы не ввели URL сайта';
        urlField.classList.add('errcolor');
        return false;
    } else if (!pattern.test(urlValue)) {
        urlErr.innerHTML = 'Введите корректный URL сайта (должен начинаться с https://)';
        urlField.classList.add('errcolor');
        return false;
    } else {
        urlErr.innerHTML = '';
        urlField.classList.remove('errcolor');
        return true;
    };
}


function validDate(EO) {
    EO = EO || window.event;
    let today = new Date();
    today = Date.parse(today);
    let dateValue = dateField.value;
    dateValue = Date.parse(dateValue);
    let dateErr = dateField.nextElementSibling;
    if (!dateValue) {
        dateErr.innerHTML = 'Вы не указали дату запуска сайта';
        dateField.classList.add('errcolor');
        return false;
    } else if (dateValue > today) {
        dateErr.innerHTML = 'Дата запуска не может быть больше текущей даты ';
        dateField.classList.add('errcolor');
        return false;
    } else if (dateValue < 1970) {
        dateErr.innerHTML = 'В те времена еще не было интернета ';
        dateField.classList.add('errcolor');
        return false;
    } else {
        dateErr.innerHTML = '';
        dateField.classList.remove('errcolor');
        return true;
    };
}


function validVisitors(EO) {
    EO = EO || window.event;
    
    let visitorsValue = visitorsField.value;
    let visitorsErr = visitorsField.nextElementSibling;
    if (!visitorsValue) {
        visitorsErr.innerHTML = 'Вы не ввели количество посетителей';
        visitorsField.classList.add('errcolor');
        return false;
    } else if (visitorsValue < 0) {
        visitorsErr.innerHTML = 'Количество посетителей не может быть отрицательным';
        visitorsField.classList.add('errcolor');
        return false;
    } else if (!Number.isInteger(+(visitorsValue))) {
        visitorsErr.innerHTML = 'Введите целое число';
        visitorsField.classList.add('errcolor');
        return false;
    } else {
        visitorsErr.innerHTML = '';
        visitorsField.classList.remove('errcolor');
        return true;
    };
}

function validEmail(EO) {
    EO = EO || window.event;
    
    let emailValue = emailField.value;
    let emailErr = emailField.nextElementSibling;
    let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValue) {
        emailErr.innerHTML = 'Вы не ввели email';
        emailField.classList.add('errcolor');
        return false;
    } else if (!pattern.test(emailValue)) {
        emailErr.innerHTML = 'Введите корректный email';
        emailField.classList.add('errcolor');
        return false;
    } else {
        emailErr.innerHTML = '';
        emailField.classList.remove('errcolor');
        return true;
    };
}

function validDivision(EO) {
    EO = EO || window.event;

    let divisionValue = Number(division.value);
    let divisionErr = division.nextElementSibling;
    
    if (divisionValue === 2) {
        divisionErr.innerHTML = 'Эта рубрика недоступна';
        division.classList.add('errcolor');
        return false;
    } else {
        divisionErr.innerHTML = '';
        division.classList.remove('errcolor');
        return true;
    };
}


function validPayment(EO) {
    EO=EO ||window.event;
    
    let paymentValue = payment.value;
    let paymentErr = document.querySelector("body > form > div:nth-child(8) > span");
    
    switch (paymentValue) {
        case (''):
            paymentErr.innerHTML = 'Вы не выбрали вариант размещения';
            return false;
        case ('1'):
            paymentErr.innerHTML = 'В данный момент эта опция недоступна';
            return false;
        default:
            paymentErr.innerHTML = '';
            return true;
    }
}

function validVotes(EO) {
    EO = EO || window.event;

    let votesErr = votes.nextElementSibling;
    if (!votes.checked) {
        votesErr.innerHTML = 'Вы не разрешили отзывы';
        return false;
    } else {
        votesErr.innerHTML = '';
        return true;
    };
}


function validDescription(EO) {
    EO=EO ||window.event;
    
    let descriptionValue = description.value;
    let descriptionErr = description.nextElementSibling;
    if (!descriptionValue) {
        descriptionErr.innerHTML = 'Вы не ввели описание сайта';
        description.classList.add('errcolor');
        return false;
    } else if (descriptionValue.length < 30) {
        descriptionErr.innerHTML = 'Описание должно быть более 30 символов';
        description.classList.add('errcolor');
        return false;
    } else {
        descriptionErr.innerHTML = '';
        description.classList.remove('errcolor');
        return true;
    };
}


function validFormAll(EO) {
    EO = EO || window.event;
    let value = true;
    
    try {
        validDevelopers();
        validSite();
        validUrl();
        validDate();
        validVisitors();
        validEmail();
        validPayment();
        validVotes();
        validDescription();

        value = validDevelopers(value);
        value = validSite(value);
        value = validUrl(value);
        value = validDate(value);
        value = validVisitors(value);
        value = validEmail(value);
        value = validPayment(value);
        value = validVotes(value);
        value = validDescription(value);

        
        if (value === false) {
            EO.preventDefault();
            focusToInput();
        }
        
        
    }
    catch (ex) {
        EO.preventDefault();
    }
}

function focusToInput() {
    
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].nextElementSibling.textContent != '') {
            inputs[i].focus(); break;
        } 
        description.focus();
    }
}