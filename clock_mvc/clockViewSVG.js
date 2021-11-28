"use strict";

class ClockViewSVG {
  hoursArrow;
  minutesArrow;
  secondsArrow;

  constructor(diam, selector, clock) {
    this.clock = clock;
    this.selector = selector;
    this.clockDiameter = diam;
    this.clockRad = this.clockDiameter / 2;
    this.childElemClock = this.clockDiameter / 9 ;
    this.childElemClockDiam = this.clockRad * 0.85;
    this.secondsArrowWidth = this.clockRad * 0.2;
    this.secondsArrowHeight = this.clockRad * 0.02;
    this.minutesArrowWidth = this.clockRad * 0.3;
    this.minutesArrowHeight = this.clockRad * 0.04;
    this.hoursArrowWidth = this.clockRad * 0.4;
    this.hoursArrowHeight = this.clockRad * 0.05;
    this.proportionArrows = this.clockDiameter / 4 / 10;
  }

  createClock() {
    let element;
    let clockContainer = document.createElement('div');
    clockContainer.classList.add('container');
    if (!document.querySelector(`.main-clock-${this.selector}`)) {
      let buttonStart = document.createElement('button');
      buttonStart.classList.add('button-start-' + this.selector);
      buttonStart.style.marginBottom = '20px';
      buttonStart.textContent = 'Старт'
        
      let buttonStop = document.createElement('button');
      buttonStop.classList.add('button-stop-' + this.selector);
      buttonStop.style.margin = '20px 5px';
      buttonStop.textContent = 'Стоп';
    
      let city = document.createElement('b');
      city.textContent = this.selector;
      clockContainer.append(buttonStart);
      clockContainer.append(buttonStop);
      clockContainer.append(city);

      element = document.createElement('div');
      element.classList.add('main-clock-' + this.selector);
      let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('id', 'main-clock-' + this.selector);
      svg.setAttribute('width', String(this.clockDiameter));
      svg.setAttribute('height', String(this.clockDiameter));
      element.append(svg);
      clockContainer.append(element);
      document.querySelector('.wrapper').append(clockContainer);
      let clockBody = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      clockBody.setAttribute('id', 'clock-' + this.selector);
      clockBody.setAttribute('cx', String(this.clockRad));
      clockBody.setAttribute('cy', String(this.clockRad));
      clockBody.setAttribute('r', String(this.clockDiameter / 2));
      clockBody.setAttribute('fill', '#fcca67');
      svg.append(clockBody);
    }
  }

  getAnalogClock() {

    let svg = document.getElementById(`main-clock-${this.selector}`);
    function createCircle(elemClock) {
      let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', elemClock + '');
      circle.setAttribute('fill', '#4eb083');
      svg.append(circle);
      return circle;
  }

    function text(diam) {
      let circleNumber = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      circleNumber.setAttribute('fill', 'black');
      circleNumber.setAttribute('font-size', (diam / 15) + '');
      circleNumber.setAttribute('text-anchor', 'middle');
      svg.append(circleNumber);
      return circleNumber;
  }

    for (let i = 1; i <= 12; i++) {
      let circle = createCircle(this.childElemClock / 2);
      let circleNumber = text(this.clockDiameter);
      let angle = i / 12 * Math.PI *2 // расположение цифр по окружности
      let circleCenterX = this.clockRad + this.childElemClockDiam * Math.sin(angle);
      let circleCenterY = this.clockRad - this.childElemClockDiam * Math.cos(angle);

      circle.setAttribute('cx', Math.round(circleCenterX) + '');
      circle.setAttribute('cy', Math.round(circleCenterY) + '');

      circleNumber.setAttribute('x', Math.round(circleCenterX - (circle.clientWidth / 2)) + '');
      circleNumber.setAttribute('y', Math.round(circleCenterY + (this.childElemClock / 4) - (circle.clientHeight / 2)) + '');
      circleNumber.textContent = i + '';
  }
  }

  getSecondsArrow() {
    let svg = document.getElementById(`main-clock-${this.selector}`);
    let secondsArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    secondsArrow.setAttribute('x1', this.clockRad + '');
    secondsArrow.setAttribute('x2', this.clockRad + '');
    secondsArrow.setAttribute('y2', (this.clockRad + this.proportionArrows) + '');
    secondsArrow.setAttribute('stroke', 'black');
    secondsArrow.setAttribute('stroke-linecap', 'round');
    secondsArrow.setAttribute('opacity', '80%');
    secondsArrow.style.transformOrigin = '50% 50%';
    svg.append(secondsArrow);
    // положение секундной стрелки
    secondsArrow.setAttribute('y1', this.secondsArrowWidth + '');
    secondsArrow.setAttribute('stroke-width', this.secondsArrowHeight + '');
    this.secondsArrow = secondsArrow;
  }

// Получение минутной стрелки
  getMinutesArrow() {
    let svg = document.getElementById(`main-clock-${this.selector}`);
    let minutesArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    minutesArrow.setAttribute('x1', this.clockRad + '');
    minutesArrow.setAttribute('x2', this.clockRad + '');
    minutesArrow.setAttribute('y2', (this.clockRad + this.proportionArrows) + '');
    minutesArrow.setAttribute('stroke', 'black');
    minutesArrow.setAttribute('stroke-linecap', 'round');
    minutesArrow.setAttribute('opacity', '80%');
    minutesArrow.style.transformOrigin = '50% 50%';
    svg.append(minutesArrow);
    // положение минутной стрелки
    minutesArrow.setAttribute('y1', this.minutesArrowWidth + '');
    minutesArrow.setAttribute('stroke-width', this.minutesArrowHeight + '');
    this.minutesArrow = minutesArrow;
  }

// Получение часовой стрелки
  getHoursArrow() {
    let svg = document.getElementById(`main-clock-${this.selector}`);
    let hoursArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    hoursArrow.setAttribute('x1', this.clockRad + '');
    hoursArrow.setAttribute('x2', this.clockRad + '');
    hoursArrow.setAttribute('y2', (this.clockRad + this.proportionArrows) + '');
    hoursArrow.setAttribute('stroke', 'black');
    hoursArrow.setAttribute('stroke-linecap', 'round');
    hoursArrow.setAttribute('opacity', '80%');
    hoursArrow.style.transformOrigin = '50% 50%';
    svg.append(hoursArrow);
    // положение часовой стрелки
    hoursArrow.setAttribute('y1', this.hoursArrowWidth + '');
    hoursArrow.setAttribute('stroke-width', this.hoursArrowHeight + '');
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