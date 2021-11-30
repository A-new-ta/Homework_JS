"use strict";

class ClockViewCanvas {
    constructor(diam, city, clock) {
        this.clock = clock;
        this.city = city;
        this.context = this.getContainer(this.city, 'canvas', diam);
        this.clockDiameter = diam;
        this.clockRad = this.clockDiameter / 2;
        this.childElemClock = this.clockDiameter / 18;
        this.childElemClockDiam = this.clockRad * 0.85;
        this.secondsArrowWidth = this.clockRad * 0.8;
        this.secondsArrowHeight = this.clockRad * 0.02;
        this.minutesArrowWidth = this.clockRad * 0.75;
        this.minutesArrowHeight = this.clockRad * 0.04;
        this.hoursArrowWidth = this.clockRad * 0.6;
        this.hoursArrowHeight = this.clockRad * 0.05;
        this.proportionArrows = this.clockDiameter / 4 / 10;
    }

    getContainer(city, style, diam) {
        let element;
        let clockContainer = document.createElement('div');
        clockContainer.classList.add('container');
        if (!document.querySelector(`.main-clock-${city}`)) {
            let buttonStart = document.createElement('button');
            buttonStart.classList.add('button-start-' + this.city);
            buttonStart.style.marginBottom = '20px';
            buttonStart.textContent = 'Старт'
        
            let buttonStop = document.createElement('button');
            buttonStop.classList.add('button-stop-' + this.city);
            buttonStop.style.margin = '20px 5px';
            buttonStop.textContent = 'Стоп';
            let city = document.createElement('span');
            city.textContent = this.city;
            clockContainer.append(buttonStart);
            clockContainer.append(buttonStop);
            clockContainer.append(city);

            element = document.createElement('div');
            element.classList.add('main-clock-' + this.city);
            let canvas = document.createElement('canvas');
            canvas.setAttribute('id', 'main-clock-' + this.city);
            canvas.width = diam;
            canvas.height = diam;
            element.append(canvas);
            clockContainer.append(element);
            document.querySelector('.wrapper').append(clockContainer);
            return canvas.getContext('2d');
        }
    }
    
    createClock(){
        this.context.beginPath();
        this.context.arc(this.clockRad, this.clockRad, this.clockRad, 0, Math.PI * 2, false);
        this.context.fillStyle = '#fcca67';
        this.context.fill();
    }
    
    
    getAnalogClock() {
        
        for (let i = 1; i <= 12; i++) {

            let angle = i / 12 * Math.PI *2 // расположение цифр по окружности
            let circleCenterX = this.clockRad + this.childElemClockDiam * Math.sin(angle);
            let circleCenterY = this.clockRad - this.childElemClockDiam * Math.cos(angle);
    
            this.context.beginPath();
            this.context.arc(circleCenterX, circleCenterY, this.childElemClock, 0, Math.PI * 2, false);
            this.context.fillStyle = '#4eb083';
            this.context.fill();
            this.context.fillStyle = 'black';
            this.context.textBaseline = 'middle';
            this.context.textAlign = 'center';
            this.context.fillText(i, circleCenterX, circleCenterY);
            this.context.font = `${this.clockDiameter / 15}px TimesNewRoman`;
        }
    }

    getArrow(width, height, arrowAngle) {
        
        let angle = arrowAngle / 180 * Math.PI;
        let x1 = this.clockRad - this.proportionArrows * Math.sin(angle);
        let y1 = this.clockRad + this.proportionArrows * Math.cos(angle);
        let x2 = this.clockRad + height * Math.sin(angle);
        let y2 = this.clockRad - height * Math.cos(angle);
        this.context.beginPath();
        this.context.lineWidth = width;
        this.context.lineCap = 'round';
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.strokeStyle = 'rgba(0, 0, 0, 0.8)';
        this.context.stroke();
    }

    clockInit() {
        this.createClock();
        this.getAnalogClock();
        this.getArrow(this.hoursArrowHeight, this.hoursArrowWidth, 0);
        this.getArrow(this.minutesArrowHeight, this.minutesArrowWidth, 0);
        this.getArrow(this.secondsArrowHeight, this.secondsArrowWidth, 0);
    }

    updateTime() {
       
        let secondsAngle = this.clock.seconds * (360 / 60);
        let minutesAngle = this.clock.minutes * (360 / 60) + this.clock.seconds * (360 / 60 / 60);
        let hoursAngle = this.clock.hours * (360 / 12) + this.clock.minutes * (360 / 12 / 60);
        
        this.createClock();
        this.getAnalogClock();
        this.getArrow(this.hoursArrowHeight, this.hoursArrowWidth, hoursAngle);
        this.getArrow(this.minutesArrowHeight, this.minutesArrowWidth, minutesAngle);
        this.getArrow(this.secondsArrowHeight, this.secondsArrowWidth, secondsAngle);
    }
}
