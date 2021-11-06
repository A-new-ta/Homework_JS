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
            // getClockContainer();
            // getAnalogClock();
            updateTime();
        }
}

const container = document.querySelector('.container');
let clockContainer = document.querySelector('.clock');
let context = clockContainer.getContext('2d');
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
    childElemClock = clockDiameter / 18; // радиус элемента циферблата
    childElemClockDiam = clockRad * 0.85; // общий диаметр всех элементов циферблата
    secondsArrowWidth = clockRad * 0.8 ; // длина секундной стрелки
    secondsArrowHeight = clockRad * 0.02; // ширина секундной стрелки
    minutesArrowWidth = clockRad * 0.7; // длина минутной стрелки
    minutesArrowHeight = clockRad * 0.04; // ширина минутной стрелки
    hoursArrowWidth = clockRad * 0.6; // длина часовой стрелки
    hoursArrowHeight = clockRad * 0.05; // ширина часовой стрелки
    proportionArrows = clockDiameter / 4 / 10;
    context.font = `${clockDiameter / 15}px TimesNewRoman`
}

// строим циферлат часов
function getClockContainer() {
    context.beginPath();
    context.arc(clockRad, clockRad, clockRad, 0, Math.PI * 2, false);
    context.fillStyle = '#fcca67';
    context.fill();
}

// Аналоговые часы
function getAnalogClock() {
        
    for (let i = 1; i <= 12; i++) {

        let angle = i / 12 * Math.PI *2 // расположение цифр по окружности
        let circleCenterX = clockRad + childElemClockDiam * Math.sin(angle);
        let circleCenterY = clockRad - childElemClockDiam * Math.cos(angle);

        context.beginPath();
        context.arc(circleCenterX, circleCenterY, childElemClock, 0, Math.PI * 2, false);
        context.fillStyle = '#4eb083';
        context.fill();
        context.fillStyle = 'black';
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        context.fillText(i, circleCenterX, circleCenterY);
    }

}

// Цифровые часы (положение и размер)
function getDigitalClock(seconds, minutes, hours) {
    context.beginPath();
    context.fillStyle = 'black';
    context.fillText(`${hours}:${minutes}:${seconds}`, clockRad, clockDiameter / 3.5);
    
}

function getArrow(width, height, arrowAngle) {
    let angle = arrowAngle / 180 * Math.PI;
    let x1 = clockRad - proportionArrows * Math.sin(angle);
    let y1 = clockRad + proportionArrows * Math.cos(angle);
    let x2 = clockRad + height * Math.sin(angle);
    let y2 = clockRad - height * Math.cos(angle);
    context.beginPath();
    context.lineWidth = width;
    context.lineCap = 'round';
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();

}


// функция текущего времени
function updateTime() {
    let time = new Date();
    let seconds = checkTime(time.getSeconds());
    let minutes = checkTime(time.getMinutes());
    let hours = checkTime(time.getHours());
    
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
    
    getClockContainer();
    getAnalogClock();

    getArrow(secondsArrowHeight, secondsArrowWidth, secondsAngle);
    getArrow(minutesArrowHeight, minutesArrowWidth, minutesAngle);
    getArrow(hoursArrowHeight, hoursArrowWidth, hoursAngle);
    getDigitalClock(seconds, minutes, hours);

    setTimeout(updateTime, 1020 - time.getMilliseconds());
    
    console.log(time);
}




