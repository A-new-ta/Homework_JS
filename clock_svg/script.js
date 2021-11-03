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
            let clock = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            clock.setAttribute('class', 'clock');
            clock.setAttribute('width', widthClock);
            clock.setAttribute('height', widthClock);
            container.append(clock);
            // clock.style.width = widthClock + 'px';
            // clock.style.height = widthClock + 'px';
                    
            definition(widthClock);
            getAnalogClock();
            updateTime();
        }
}


let clock = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
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
    secondsArrowWidth = clockRad * 0.8 ; // длина секундной стрелки
    secondsArrowHeight = clockRad * 0.02; // ширина секундной стрелки
    minutesArrowWidth = clockRad * 0.8; // длина минутной стрелки
    minutesArrowHeight = clockRad * 0.04; // ширина минутной стрелки
    hoursArrowWidth = clockRad * 0.7; // длина часовой стрелки
    hoursArrowHeight = clockRad * 0.05; // ширина часовой стрелки
    proportionArrows = clockDiameter / 4 / 10;
}


// Аналоговые часы
function getAnalogClock() {

    // Создаем элементы циферблата (маленький круг вокруг цифр)
    function createCircle() {
        let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', childElemClock.toString());
        circle.setAttribute('fill', '#4eb083');

        // circle.style.width = childElemClock + 'px';
        // circle.style.height = childElemClock + 'px';
        // circle.classList.add('childElem');
        // circle.style.fontSize = clockDiameter / 15 + 'px';
        clock.append(circle);
        return circle;
    }

    function text() {
        let circleNumber = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        circleNumber.setAttribute('fill', 'black');
        circleNumber.setAttribute('font-size', 'clockDiameter / 15');
        return circleNumber;
    }

    for (let i = 1; i <= 12; i++) {
        let circle = createCircle();
        let circleNumber = text();
        let angle = i / 12 * Math.PI *2 // расположение цифр по окружности
        let circleCenterX = clockRad + childElemClockDiam * Math.sin(angle);
        let circleCenterY = clockRad - childElemClockDiam * Math.cos(angle);

        circle.setAttribute('cx', String(Math.round(circleCenterX)));
        circle.setAttribute('cy',  String(Math.round(circleCenterY)));

        // circle.style.left = Math.round(circleCenterX - (circle.offsetWidth / 2)) + 'px';
        // circle.style.top = Math.round(circleCenterY - (circle.offsetHeight / 2)) + 'px';
        // circle.innerHTML = i;
        circleNumber.setAttribute('x', (Math.round(circleCenterX - (circle.offsetWidth / 2))).toString());
        circleNumber.setAttribute('y', (Math.round(circleCenterY + (childElemClock / 3) - (circle.offsetHeight / 2))).toString());
        circleNumber.textContent = i.toString();

    }

    digitalClock = getDigitalClock();
    secondsArrow =  getSecondsArrow();
    minutesArrow =  getMinutesArrow();
    hoursArrow = getHoursArrow();
}

// Цифровые часы (положение и размер)
function getDigitalClock() {
    let digitalClock = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    digitalClock.setAttribute('x', 'clockDiameter / 2');
    digitalClock.setAttribute('y', 'clockDiameter / 3');
    digitalClock.setAttribute('font-size', 'clockDiameter / 12');
    digitalClock.setAttribute('text-anchor', 'middle');

    // digitalClock.style.top = clockDiameter * 0.3 + 'px';
    // digitalClock.style.width = clockDiameter + 'px';
    // digitalClock.style.fontSize = clockDiameter / 12 + 'px';

    clock.append(digitalClock);
    return digitalClock;
}


// Получение секундной стрелки
function getSecondsArrow() {
    let secondsArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    secondsArrow.setAttribute('class', 'seconds');
    secondsArrow.setAttribute('x1', 'clockRad');
    secondsArrow.setAttribute('x2', 'clockRad');
    secondsArrow.setAttribute('y2', 'clockRad + proportionArrows');
    secondArrow.setAttribute('stroke', 'black');
    secondArrow.setAttribute('stroke-linecap', 'round');
    secondArrow.style.transformOrigin = '50% 50%';


    // secondsArrow.style.width = secondsArrowHeight + 'px';
    // secondsArrow.style.height = secondsArrowWidth + proportionArrows + 'px';
    // secondsArrow.style.borderRadius = secondsArrowHeight + 'px';
    // secondsArrow.style.transformOrigin = secondsArrowHeight / 2 + 'px ' + secondsArrowWidth * 0.92 + 'px';
    clock.append(secondsArrow);
    // положение секундной стрелки
    secondsArrow.setAttribute('y1', 'secondsArrowWidth');
    secondsArrow.setAttribute('stroke-width', 'secondsArrowHeight');
    // secondsArrow.style.left = clockRad - secondsArrow.offsetWidth/ 2 + 'px';
    // secondsArrow.style.top = clockRad - secondsArrow.offsetHeight + (proportionArrows * 2) + 'px';
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



