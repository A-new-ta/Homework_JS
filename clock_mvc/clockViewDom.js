"use strict";

class ClockViewDOM {
  hoursArrow;
  minutesArrow;
  secondsArrow;

  constructor(diam, city, clock) {
    this.clock = clock;
    this.city = city;
    this.clockDiameter = diam;
    this.clockRad = this.clockDiameter / 2;
    this.childElemClock = this.clockDiameter / 9;
    this.childElemClockDiam = this.clockRad * 0.85;
    this.secondsArrowWidth = this.clockRad * 0.8;
    this.secondsArrowHeight = this.clockRad * 0.02;
    this.minutesArrowWidth = this.clockRad * 0.8;
    this.minutesArrowHeight = this.clockRad * 0.04;
    this.hoursArrowWidth = this.clockRad * 0.7;
    this.hoursArrowHeight = this.clockRad * 0.05;
    this.proportionArrows = this.clockDiameter / 4 / 10;
  }

  createClock() {
    let element;
    let clockContainer = document.createElement('div');
    clockContainer.classList.add('container');
    if (!document.querySelector(`.main-clock-${this.city}`)) {
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
      element.style.width = this.clockDiameter + 'px';
      element.style.height = this.clockDiameter + 'px';
      element.style.position = 'relative';
      clockContainer.append(element);
      document.querySelector('.wrapper').append(clockContainer);

      let clockBody = document.createElement('div');
      clockBody.classList.add('clock-' + this.city);
      clockBody.style.position = 'absolute';
      clockBody.style.width = this.clockDiameter + 'px';
      clockBody.style.height = this.clockDiameter + 'px';
      clockBody.style.borderRadius = '50%';
      clockBody.style.backgroundColor = '#fcca67';
      element.append(clockBody);
    }
  }

  getAnalogClock() {
    let clockContainer = document.querySelector(`.clock-${this.city}`);
    function createCircle(elemClock, diam) {
      let circle = document.createElement('div');
      circle.style.width = elemClock + 'px';
      circle.style.height = elemClock + 'px';
      circle.style.position = 'absolute';
      circle.style.backgroundColor = '#46b483';
      circle.style.borderRadius = '50%';
      circle.style.textAlign = 'center';
      circle.style.lineHeight = '165%';
      circle.style.fontSize = diam / 15 + 'px';
      clockContainer.append(circle);
      return circle;
    }

  
    for (let i = 1; i <= 12; i++) {
      let circle = createCircle(this.childElemClock, this.clockDiameter);
      let angle = i / 12 * Math.PI * 2 // расположение цифр по окружности
      let circleCenterX = this.clockRad + this.childElemClockDiam * Math.sin(angle);
      let circleCenterY = this.clockRad - this.childElemClockDiam * Math.cos(angle);

      circle.style.left = Math.round(circleCenterX - (circle.offsetWidth / 2)) + 'px';
      circle.style.top = Math.round(circleCenterY - (circle.offsetHeight / 2)) + 'px';
      circle.innerHTML = i;
    }
  }

  getSecondsArrow() {
    let clockContainer = document.querySelector(`.clock-${this.city}`);
    let secondsArrow = document.createElement('div');
    secondsArrow.classList.add('seconds');
    secondsArrow.style.width = this.secondsArrowHeight + 'px';
    secondsArrow.style.height = this.secondsArrowWidth + this.proportionArrows + 'px';
    secondsArrow.style.borderRadius = this.secondsArrowHeight + 'px';
    secondsArrow.style.backgroundColor = 'black';
    secondsArrow.style.opacity = '80%';
    secondsArrow.style.position = 'absolute';
    secondsArrow.style.transformOrigin = this.secondsArrowHeight / 2 + 'px ' + this.secondsArrowWidth * 0.92 + 'px';
    clockContainer.append(secondsArrow);
    
    secondsArrow.style.left = this.clockRad - secondsArrow.offsetWidth / 2 + 'px';
    secondsArrow.style.top = this.clockRad - secondsArrow.offsetHeight + (this.proportionArrows * 2) + 'px';
    this.secondsArrow = secondsArrow;
  }

  getMinutesArrow() {
    let clockContainer = document.querySelector(`.clock-${this.city}`);
    let minutesArrow = document.createElement('div');
    minutesArrow.classList.add('minutes');
    minutesArrow.style.width = this.minutesArrowHeight + 'px';
    minutesArrow.style.height = this.minutesArrowWidth + this.proportionArrows + 'px';
    minutesArrow.style.borderRadius = this.minutesArrowHeight + 'px';
    minutesArrow.style.backgroundColor = 'black';
    minutesArrow.style.opacity = '80%';
    minutesArrow.style.position = 'absolute';
    minutesArrow.style.transformOrigin = this.minutesArrowHeight / 2 + 'px ' + this.minutesArrowWidth * 0.92 + 'px';
    clockContainer.append(minutesArrow);
    
    minutesArrow.style.left = this.clockRad - minutesArrow.offsetWidth / 2 + 'px';
    minutesArrow.style.top = this.clockRad - minutesArrow.offsetHeight + (this.proportionArrows * 2) + 'px';
    this.minutesArrow = minutesArrow;
  }

  getHoursArrow() {
    let clockContainer = document.querySelector(`.clock-${this.city}`);
    let hoursArrow = document.createElement('div');
    hoursArrow.classList.add('minutes');
    hoursArrow.style.width = this.hoursArrowHeight + 'px';
    hoursArrow.style.height = this.hoursArrowWidth + this.proportionArrows + 'px';
    hoursArrow.style.borderRadius = this.hoursArrowHeight + 'px';
    hoursArrow.style.backgroundColor = 'black';
    hoursArrow.style.opacity = '80%';
    hoursArrow.style.position = 'absolute';
    hoursArrow.style.transformOrigin = this.hoursArrowHeight / 2 + 'px ' + this.hoursArrowWidth * 0.92 + 'px';
    clockContainer.append(hoursArrow);
    
    hoursArrow.style.left = this.clockRad - hoursArrow.offsetWidth / 2 + 'px';
    hoursArrow.style.top = this.clockRad - hoursArrow.offsetHeight + (this.proportionArrows * 2) + 'px';
    this.hoursArrow = hoursArrow;
  }

  clockInit() {
    this.createClock();
    this.getAnalogClock();
    this.getHoursArrow();
    this.getMinutesArrow();
    this.getSecondsArrow();
  }
  
  updateTime() {
    
    let secondsAngle = this.clock.seconds * (360 / 60);
    let minutesAngle = this.clock.minutes * (360 / 60) + this.clock.seconds * (360 / 60 / 60);
    let hoursAngle = this.clock.hours * (360 / 12) + this.clock.minutes * (360 / 12 / 60);
    
    this.hoursArrow.style.transform = `rotate(${hoursAngle}deg)`;
    this.minutesArrow.style.transform = `rotate(${minutesAngle}deg)`;
    this.secondsArrow.style.transform = `rotate(${secondsAngle}deg)`;
  }
}
