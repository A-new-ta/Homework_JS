"use strict";

// input window
let button = document.querySelector('.ok__button');
button.addEventListener('click', start);

function start() {

    let size = document.querySelector('.number');
    let widthClock = +size.value;
    clockDiameter = widthClock;
    if (widthClock >= 200 && widthClock <= 600) {
        let menu = document.querySelector('.menu');
        menu.classList.add('hidden');
        let container = document.querySelector('.container');
        container.classList.remove('hidden');
        let loadbar = document.querySelector('.loading-background');
        loadbar.classList.remove('hidden');
        let body = document.body;
        body.setAttribute('style', 'background: url("img/mountains_black_2.jpg") center center fixed');
        
    }
    definition();
    getAnalogClock();
}





//Loadbar-------------
const loadBar = document.querySelector('.load')
let widthBar = 0;

let loadId = setInterval(() => {
    loadBar.style.width = `${widthBar}%`
    widthBar === 100 ? 100 : widthBar+=10
  }, 160);
  
setTimeout(() => { 
    loadBar.style.width = '100%';
    clearInterval(loadId) 
    setTimeout(() => document.querySelector('.loading-background').style.display = 'none', 100) 
    
}, 2000);

function definition() {
    clock = document.querySelector('.clock');
    container = document.querySelector('.container');
    
    clockRad = clockDiameter / 2; // радиус циферблата часов
    childElemClock = clockDiameter / 9; // диаметр элемента циферблата
    childElemClockDiam = clockRad * 0.85; // общий диаметр всех элементов циферблата
    secondsArrowWidth = clockRad * 0.8 ; // длина секундной стрелки
    secondsArrowHeight = clockRad * 0.02; // ширина секундной стрелки
    minutesArrowWidth = clockRad * 0.8; // длина минутной стрелки
    minutesArrowHeight = clockRad * 0.04; // ширина минутной стрелки
    hoursArrowWidth = clockRad * 0.7; // длина часовой стрелки
    hoursArrowHeight = clockRad * 0.05; // ширина часовой стрелки
    proportionArrows = clockDiameter / 4 / 10;
}

let clock = document.querySelector('.clock');
let container = document.querySelector('.container');
// const clockDiameter = start(width);
let clockDiameter = 0; //диаметр циферблата часов
let clockRad = clockDiameter / 2; // радиус циферблата часов
let childElemClock = clockDiameter / 9; // диаметр элемента циферблата
let childElemClockDiam = clockRad * 0.85; // общий диаметр всех элементов циферблата
let secondsArrowWidth = clockRad * 0.8 ; // длина секундной стрелки
let secondsArrowHeight = clockRad * 0.02; // ширина секундной стрелки
let minutesArrowWidth = clockRad * 0.8; // длина минутной стрелки
let minutesArrowHeight = clockRad * 0.04; // ширина минутной стрелки
let hoursArrowWidth = clockRad * 0.7; // длина часовой стрелки
let hoursArrowHeight = clockRad * 0.05; // ширина часовой стрелки
let proportionArrows = clockDiameter / 4 / 10;

const digitalClock = document.createElement('div');
const hoursArrow = document.createElement('div');
const minutesArrow = document.createElement('div');
const secondsArrow = document.createElement('div');

// Аналоговые часы
function getAnalogClock() {

    
    // Создаем элементы циферблата (маленький круг вокруг цифр)
    function createCircle() {
        let circle = document.createElement('div');
        circle.style.width = childElemClock + 'px';
        circle.style.height = childElemClock + 'px';
        circle.classList.add('childElem');
        circle.style.fontSize = clockDiameter / 15 + 'px';
        clock.append(circle);
        return circle;
    }

    
    for (let i = 1; i <= 12; i++) {
        let circle = createCircle();
        let angle = i / 12 * Math.PI *2 // расположение цифр по окружности
        let circleCenterX = clockRad + childElemClockDiam * Math.sin(angle);
        let circleCenterY = clockRad - childElemClockDiam * Math.cos(angle);

        circle.style.left = Math.round(circleCenterX - (circle.offsetWidth / 2)) + 'px';
        circle.style.top = Math.round(circleCenterY - (circle.offsetHeight / 2)) + 'px';
        circle.innerHTML = i;
    }

    getDigitalClock();
    getSecondsArrow();
    getMinutesArrow();
    getHoursArrow();
    updateTime();
}

// Цифровые часы (положение и размер)
function getDigitalClock() {
    let digitalClock = document.createElement('div');
    digitalClock.classList.add('digital-clock');
      
    digitalClock.style.top = clockDiameter * 1.3 + 'px';
    digitalClock.style.width = clockDiameter + 'px';
    digitalClock.style.fontSize = clockDiameter / 9 + 'px';

    clock.appendChild(digitalClock);
    // return digitalClock;
}


// Получение секундной стрелки
function getSecondsArrow() {
    let secondsArrow = document.createElement('div');
    secondsArrow.classList.add('seconds');
    secondsArrow.style.width = secondsArrowHeight + 'px';
    secondsArrow.style.height = secondsArrowWidth + proportionArrows + 'px';
    secondsArrow.style.borderRadius = secondsArrowHeight + 'px';
    secondsArrow.style.transformOrigin = secondsArrowHeight / 2 + 'px ' + secondsArrowWidth * 0.92 + 'px';
    clock.append(secondsArrow);
    // положение секундной стрелки
    secondsArrow.style.left = clockRad - secondsArrow.offsetWidth/ 2 + 'px';
    secondsArrow.style.top = clockRad - secondsArrow.offsetHeight + (proportionArrows * 2) + 'px';
    return secondsArrow;
}

 // Получение минутной стрелки
function getMinutesArrow() {
    let minutesArrow = document.createElement('div');
    minutesArrow.classList.add('minutes');
    minutesArrow.style.width = minutesArrowHeight + 'px';
    minutesArrow.style.height = minutesArrowWidth + proportionArrows + 'px';
    minutesArrow.style.borderRadius = minutesArrowHeight + 'px';
    minutesArrow.style.transformOrigin = minutesArrowHeight / 2 + 'px ' + minutesArrowWidth * 0.92 + 'px';
    clock.append(minutesArrow);
    // положение минутной стрелки
    minutesArrow.style.left = clockRad - minutesArrow.offsetWidth/ 2 + 'px';
    minutesArrow.style.top = clockRad - minutesArrow.offsetHeight + (proportionArrows * 2) + 'px';
    return minutesArrow;
}

// Получение часовой стрелки
function getHoursArrow() {
    let hoursArrow = document.createElement('div');
    hoursArrow.classList.add('hours');
    hoursArrow.style.width = hoursArrowHeight + 'px';
    hoursArrow.style.height = hoursArrowWidth + proportionArrows + 'px';
    hoursArrow.style.borderRadius = hoursArrowHeight + 'px';
    hoursArrow.style.transformOrigin = hoursArrowHeight / 2 + 'px ' + hoursArrowWidth * 0.92 + 'px';
    clock.append(hoursArrow);
    // положение часовой стрелки
    hoursArrow.style.left = clockRad - hoursArrow.offsetWidth/ 2 + 'px';
    hoursArrow.style.top = clockRad - hoursArrow.offsetHeight + (proportionArrows * 2) + 'px';
    return hoursArrow;
}


// getAnalogClock();
// let digitalClock = getDigitalClock();
// let secondsArrow = getSecondsArrow();
// let minutesArrow = getMinutesArrow();
// let hoursArrow = getHoursArrow();

// функция текущего времени
function updateTime() {
    let time = new Date();
    let seconds = checkTime(time.getSeconds());
    let minutes = checkTime(time.getMinutes());
    let hours = checkTime(time.getHours());
    
    // Отображение времени на цифровых часах
    digitalClock.textContent = `${hours} : ${minutes} : ${seconds}`;
    
    // добавление нулей для цифровых часов
    function checkTime(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
    
    // Получение углов для стрелок
    let secondsAngle = seconds * (360 / 60);
    let minutesAngle = minutes * (360 / 60) + seconds * (360 / 60 / 60);
    let hoursAngle = hours * (360 / 12) + minutes * (360 / 12 / 60);
    
    hoursArrow.style.transform = `rotate(${hoursAngle}deg)`;
    minutesArrow.style.transform = `rotate(${minutesAngle}deg)`;
    secondsArrow.style.transform = `rotate(${secondsAngle}deg)`;

    setTimeout(updateTime, 1000 - time.getMilliseconds());
}

// updateTime();
// setTimeout(updateTime, 1000 - time.getMilliseconds());
