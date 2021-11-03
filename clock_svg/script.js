"use strict";

// input window
let button = document.querySelector('.ok__button');
button.addEventListener('click', start);
let input = document.querySelector('.number');
input.addEventListener('keydown', enter);

function enter(eo) {
    if (eo.keyCode === 13) {
        start();
    }
}
function start() {
    
        let size = document.querySelector('.number');
        let widthClock = +size.value;
        if (widthClock >= 200 && widthClock <= 800) {

            let menu = document.querySelector('.menu');
            menu.classList.add('hidden');
            let container = document.querySelector('.container');
            container.classList.remove('hidden');
            const clock = document.querySelector('.clock');
            clock.setAttribute('width', widthClock);
            clock.setAttribute('height', widthClock);
                                
            definition(widthClock);
            getAnalogClock();
            updateTime();
        }
}

const container = document.querySelector('.container');
let clockDiameter; //диаметр циферблата часов
let clockRad; // радиус циферблата часов
let childElemClock; // диаметр элемента циферблата
let childElemClockDiam; // общий диаметр всех элементов циферблата
let secondsArrowWidth; // длина секундной стрелки
let secondsArrowHeight; // ширина секундной стрелки
let minutesArrowWidth; // длина минутной стрелки
let minutesArrowHeight; // ширина минутной стрелки
let hoursArrowWidth; // длина часовой стрелки
let hoursArrowHeight; // ширина часовой стрелки
let proportionArrows;

function definition(width) {
    
    clockDiameter = width; // диаметр циферблата часов
    clockRad = clockDiameter / 2; // радиус циферблата часов
    childElemClock = clockDiameter / 9 / 2; // радиус элемента циферблата
    childElemClockDiam = clockRad * 0.85; // общий диаметр всех элементов циферблата
    secondsArrowWidth = clockRad * 0.2 ; // длина секундной стрелки
    secondsArrowHeight = clockRad * 0.02; // ширина секундной стрелки
    minutesArrowWidth = clockRad * 0.3; // длина минутной стрелки
    minutesArrowHeight = clockRad * 0.04; // ширина минутной стрелки
    hoursArrowWidth = clockRad * 0.4; // длина часовой стрелки
    hoursArrowHeight = clockRad * 0.05; // ширина часовой стрелки
    proportionArrows = clockDiameter / 4 / 10;
}


// Аналоговые часы
function getAnalogClock() {

    // Создаем элементы циферблата (маленький круг вокруг цифр)
    function createCircle() {
        let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', childElemClock + '');
        circle.setAttribute('class', 'circle');
        clock.append(circle);
        return circle;
    }

    function text() {
        let circleNumber = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        circleNumber.setAttribute('class', 'circlenumber');
        circleNumber.setAttribute('font-size', (clockDiameter / 15) + '');
        clock.append(circleNumber);
        return circleNumber;
    }

    for (let i = 1; i <= 12; i++) {
        let circle = createCircle();
        let circleNumber = text();
        let angle = i / 12 * Math.PI *2 // расположение цифр по окружности
        let circleCenterX = clockRad + childElemClockDiam * Math.sin(angle);
        let circleCenterY = clockRad - childElemClockDiam * Math.cos(angle);

        circle.setAttribute('cx', Math.round(circleCenterX) + '');
        circle.setAttribute('cy', Math.round(circleCenterY) + '');

        circleNumber.setAttribute('x', Math.round(circleCenterX - (circle.clientWidth / 2)) + '');
        circleNumber.setAttribute('y', Math.round(circleCenterY + (childElemClock / 3) - (circle.clientHeight / 2)) + '');
        circleNumber.textContent = i + '';
    }

    digitalClock = getDigitalClock();
    secondsArrow =  getSecondsArrow();
    minutesArrow =  getMinutesArrow();
    hoursArrow = getHoursArrow();
}

// Цифровые часы (положение и размер)
function getDigitalClock() {
    let digitalClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    digitalClock.setAttribute('x', clockDiameter / 2 + '');
    digitalClock.setAttribute('y', clockDiameter / 3 + '');
    digitalClock.setAttribute('class', 'digital');
    digitalClock.setAttribute('font-size', clockDiameter / 12 + '');
    clock.append(digitalClock);
    return digitalClock;
}


// Получение секундной стрелки
function getSecondsArrow() {
    let secondsArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    secondsArrow.setAttribute('class', 'seconds');
    secondsArrow.setAttribute('x1', clockRad + '');
    secondsArrow.setAttribute('x2', clockRad + '');
    secondsArrow.setAttribute('y2', (clockRad + proportionArrows) + '');
    secondsArrow.style.transformOrigin = '50% 50%';
    clock.append(secondsArrow);
    // положение секундной стрелки
    secondsArrow.setAttribute('y1', secondsArrowWidth + '');
    secondsArrow.setAttribute('stroke-width', secondsArrowHeight + '');
    return secondsArrow;
}

// Получение минутной стрелки
function getMinutesArrow() {
    let minutesArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    minutesArrow.setAttribute('class', 'minutes');
    minutesArrow.setAttribute('x1', clockRad + '');
    minutesArrow.setAttribute('x2', clockRad + '');
    minutesArrow.setAttribute('y2', (clockRad + proportionArrows) + '');
    minutesArrow.style.transformOrigin = '50% 50%';
    clock.append(minutesArrow);
    // положение минутной стрелки
    minutesArrow.setAttribute('y1', minutesArrowWidth + '');
    minutesArrow.setAttribute('stroke-width', minutesArrowHeight + '');
    return minutesArrow;
}

// Получение часовой стрелки
function getHoursArrow() {
    let hoursArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    hoursArrow.setAttribute('class', 'hours');
    hoursArrow.setAttribute('x1', clockRad + '');
    hoursArrow.setAttribute('x2', clockRad + '');
    hoursArrow.setAttribute('y2', (clockRad + proportionArrows) + '');
    hoursArrow.style.transformOrigin = '50% 50%';
    clock.append(hoursArrow);
    // положение часовой стрелки
    hoursArrow.setAttribute('y1', hoursArrowWidth + '');
    hoursArrow.setAttribute('stroke-width', hoursArrowHeight + '');
    return hoursArrow;
}


let digitalClock;
let secondsArrow;
let minutesArrow;
let hoursArrow;

// функция текущего времени
function updateTime() {
    let time = new Date();
    let seconds = checkTime(time.getSeconds());
    let minutes = checkTime(time.getMinutes());
    let hours = checkTime(time.getHours());
    
    // Отображение времени на цифровых часах
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
    
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

    setTimeout(updateTime, 1020 - time.getMilliseconds());
    
    console.log(time);
}



