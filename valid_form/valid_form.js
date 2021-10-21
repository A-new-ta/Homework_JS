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
}, false);

sitename.addEventListener('blur', EO => {
    validSite(0);
}, false);

urlField.addEventListener('blur', EO => {
    validUrl(0);
}, false);

dateField.addEventListener('blur', EO => {
    validDate(0);
}, false);

visitorsField.addEventListener('blur', EO => {
    validVisitors(0);
}, false);

emailField.addEventListener('blur', EO => {
    validEmail(0);
}, false);

division.addEventListener('change', EO => {
    validDivision(0);
}, false);

for (let i = 0; i < payment.length; i++) {
    payment[i].addEventListener('change',validPayment,false);
};

votes.addEventListener('change', EO => {
    validVotes(0);
}, false);

description.addEventListener('blur', EO => {
    validDescription(0);
}, false);




function validDevelopers(EO) {
    EO=EO ||window.event;
    
    let developersValue = developers.value;
    let developersErr = developers.nextElementSibling;
    if (!developersValue) {
        developersErr.innerHTML = 'Введите разработчиков';
        developers.setAttribute('style', 'background-color: #f5bcbc');
    } else if (developersValue.length < 3 || developersValue.length > 30) {
        developersErr.innerHTML = 'Длина строки может быть от 3 до 30 символов';
        developers.setAttribute('style', 'background-color: #f5bcbc');
    } else {
        developersErr.innerHTML = '';
        developers.setAttribute('style', 'background-color:none');
    };
}

function validSite(EO) {
    EO = EO || window.event;

    let siteValue = sitename.value;
    let siteErr = sitename.nextElementSibling;
    if (!siteValue) {
        siteErr.innerHTML = 'Вы не ввели название сайта';
        sitename.setAttribute('style', 'background-color: #f5bcbc');
    } else if (siteValue.length > 30) {
        siteErr.innerHTML = 'Название не может быть длиннее 20 символов';
        sitename.setAttribute('style', 'background-color: #f5bcbc');
    } else {
        siteErr.innerHTML = '';
        sitename.setAttribute('style', 'background-color:none');
    };
}


function validUrl(EO) {
    EO = EO || window.event;
    
    let urlValue = urlField.value;
    let urlErr = urlField.nextElementSibling;
    let pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlValue) {
        urlErr.innerHTML = 'Вы не ввели URL сайта';
        urlField.setAttribute('style', 'background-color: #f5bcbc');
    } else if (!pattern.test(urlValue)) {
        urlErr.innerHTML = 'Введите корректный URL сайта';
        urlField.setAttribute('style', 'background-color: #f5bcbc');
    } else {
        urlErr.innerHTML = '';
        urlField.setAttribute('style', 'background-color:none');
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
        dateField.setAttribute('style', 'background-color: #f5bcbc');
    } else if (dateValue > today) {
        dateErr.innerHTML = 'Дата запуска не может быть больше текущей даты ';
        dateField.setAttribute('style', 'background-color: #f5bcbc');
    } else if (dateValue < 1970) {
        dateErr.innerHTML = 'В те времена еще не было интернета ';
        dateField.setAttribute('style', 'background-color: #f5bcbc');
    } else {
        dateErr.innerHTML = '';
        dateField.setAttribute('style', 'background-color:none');
    };
}


function validVisitors(EO) {
    EO = EO || window.event;
    
    let visitorsValue = visitorsField.value;
    let visitorsErr = visitorsField.nextElementSibling;
    if (!visitorsValue) {
        visitorsErr.innerHTML = 'Вы не ввели количество посетителей';
        visitorsField.setAttribute('style', 'background-color: #f5bcbc');
    } else if (visitorsValue < 0) {
        visitorsErr.innerHTML = 'Количество посетителей не может быть отрицательным';
        visitorsField.setAttribute('style', 'background-color: #f5bcbc');
    } else if (!Number.isInteger(+(visitorsValue))) {
        visitorsErr.innerHTML = 'Введите целое число';
        visitorsField.setAttribute('style', 'background-color: #f5bcbc');
    } else {
        visitorsErr.innerHTML = '';
        visitorsField.setAttribute('style', 'background-color:none');
    };
}

function validEmail(EO) {
    EO = EO || window.event;
    
    let emailValue = emailField.value;
    let emailErr = emailField.nextElementSibling;
    let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValue) {
        emailErr.innerHTML = 'Вы не ввели email';
        emailField.setAttribute('style', 'background-color: #f5bcbc');
    } else if (!pattern.test(emailValue)) {
        emailErr.innerHTML = 'Введите корректный email';
        emailField.setAttribute('style', 'background-color: #f5bcbc');
    } else {
        emailErr.innerHTML = '';
        emailField.setAttribute('style', 'background-color:none');
    };
}

function validDivision(EO) {
    EO = EO || window.event;

    let divisionValue = Number(division.value);
    let divisionErr = division.nextElementSibling;
    // if (divisionValue === 0) {
    //     divisionErr.innerHTML = 'Вы не выбрали рубрику';
    //     division.setAttribute('style', 'background-color: #f5bcbc');
    if (divisionValue === 2) {
        divisionErr.innerHTML = 'Эта рубрика недоступна';
        division.setAttribute('style', 'background-color: #f5bcbc');
    } else {
        divisionErr.innerHTML = '';
        division.setAttribute('style', 'background-color:none');
    };
}


function validPayment(EO) {
    EO=EO ||window.event;
    
    let paymentValue = payment.value;
    let paymentErr = document.querySelector("body > form > div:nth-child(8) > span");
    
    switch (paymentValue) {
        case (''):
            paymentErr.innerHTML = 'Выберете вариант размещения';
            break;
        case ('1'):
            paymentErr.innerHTML = 'В данный момент эта опция отсутствует';
            break;
        default:
            paymentErr.innerHTML = '';
    }
}

function validVotes(EO) {
    EO = EO || window.event;

    let votesErr = votes.nextElementSibling;
    if (!votes.checked) {
        votesErr.innerHTML = 'Разрешите отзывы';
    } else {
        votesErr.innerHTML = '';
    };
}


function validDescription(EO) {
    EO=EO ||window.event;
    
    let descriptionValue = description.value;
    let descriptionErr = description.nextElementSibling;
    if (!descriptionValue) {
        descriptionErr.innerHTML = 'Введите описание сайта';
        description.setAttribute('style', 'background-color: #f5bcbc');
    } else if (descriptionValue.length < 30) {
        descriptionErr.innerHTML = 'Описание должно быть более 30 символов';
        description.setAttribute('style', 'background-color: #f5bcbc');
    } else {
        descriptionErr.innerHTML = '';
        description.setAttribute('style', 'background-color:none');
    };
}


