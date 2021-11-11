"use strict";

const FIELD_WIDTH = 700;
const FIELD_HEIGHT = 400;
const BALL_WIDTH = 25;
const BALL_RAD = BALL_WIDTH / 2;
const BALL_X = FIELD_WIDTH / 2;
const BALL_Y = FIELD_HEIGHT / 2;
const RACKET_WIDTH = 15;
const RACKET_HEIGHT = 80;


let wrapper = document.querySelector('.wrapper');

// создаем кнопку с текстом
let start = document.querySelector('.start');
let button = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
button.setAttribute('class', 'button');
button.setAttribute('onclick', 'startGame()');
start.appendChild(button);
let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('class', 'text');
text.setAttribute('x', '35');
text.setAttribute('y', '32');
text.textContent = 'СТАРТ!';
start.appendChild(text);


//создаем поле
let field = {
    width: FIELD_WIDTH,
    height: FIELD_HEIGHT,
    color: '#e7cc36',

    update: function () {
        let field = document.createElementNS('http://www.w3.org/2000/svg','rect');
        field.setAttribute('stroke','black');
        field.setAttribute('stroke-width',1);
        field.setAttribute('fill', this.color);
        field.setAttribute('width', this.width);
        field.setAttribute('height', this.height);
        wrapper.appendChild(field);
    }
}
field.update();


// создаем мяч
let ball = document.createElementNS('http://www.w3.org/2000/svg','circle');
ball.setAttribute('class', 'ball');
ball.setAttribute('fill', 'red');
ball.setAttribute('cx', BALL_X);
ball.setAttribute('cy', BALL_Y);
ball.setAttribute('r', BALL_RAD);
wrapper.appendChild(ball);

let ballH = {
    posX: BALL_X,
    posY: BALL_Y,
    speedX: 0,
    speedY: 0,
    accel: 1.2,
    radius: BALL_RAD,
    
    update: function () {
        ball.setAttribute('cx', this.posX);
        ball.setAttribute('cy', this.posY);
    }
}
ballH.update();

//создаем левую ракетку
let leftracket = document.createElementNS('http://www.w3.org/2000/svg','rect');
leftracket.setAttribute('class', 'leftracket');
leftracket.setAttribute('stroke', 'black');
leftracket.setAttribute('stroke-width', 1);
leftracket.setAttribute('fill', 'blue');
leftracket.setAttribute('width', RACKET_WIDTH);
leftracket.setAttribute('height', RACKET_HEIGHT);
leftracket.setAttribute('x', 0);
leftracket.setAttribute('y', FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2);
wrapper.appendChild(leftracket);

let leftracketH = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: 0,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,
    
    update: function () {
        leftracket.setAttribute('x', this.posX);
        leftracket.setAttribute('y', this.posY);
    }
}

//создаем правую ракетку
let rightracket = document.createElementNS('http://www.w3.org/2000/svg','rect');
rightracket.setAttribute('class', 'rightracket');
rightracket.setAttribute('stroke', 'black');
rightracket.setAttribute('stroke-width', 1);
rightracket.setAttribute('fill', 'green');
rightracket.setAttribute('width', RACKET_WIDTH);
rightracket.setAttribute('height', RACKET_HEIGHT);
rightracket.setAttribute('x', FIELD_WIDTH - RACKET_WIDTH);
rightracket.setAttribute('y', FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2);
wrapper.appendChild(rightracket);


let rightracketH = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: FIELD_WIDTH - RACKET_WIDTH,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,
    
    update: function () {
        rightracket.setAttribute('x', this.posX);
        rightracket.setAttribute('y', this.posY);
    }
}


// управление ракетками, keydown
window.addEventListener('keydown', racketMove);
function racketMove(eo) {
    if (eo.keyCode === 16) {
        leftracketH.speed = -5;
    }
    if (eo.keyCode === 17) {
        leftracketH.speed = 5;
    }
    if (eo.keyCode === 38) {
        rightracketH.speed = -5;
    }
    if (eo.keyCode === 40) {
        rightracketH.speed = 5;
    }
}

// управление ракетками, keyup
window.addEventListener('keyup', racketStop);
function racketStop() {
    leftracketH.speed = 0;
    rightracketH.speed = 0;
}

// функция запуска мяча по кнопке
// let button = document.querySelector('.start');
start.addEventListener('click', startGame);



function startGame() {
    setResult();
    rightracketH.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
    leftracketH.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
    ballH.posX = BALL_X;
    ballH.posY = BALL_Y;
    ballH.speedX = (Math.random() < 0.5 ? -2 : 2);
    ballH.speedY = (Math.random() < 0.5 ? -2 : 2);
}

// счетчик 
let greenRes = 0;
let blueRes = 0;

function setResult() {
    let resultLeft = document.querySelector('.blue');
    resultLeft.innerHTML = `${greenRes}`
    let resultRight = document.querySelector('.green');
    resultRight.innerHTML = `${blueRes}`
}

// остановка игры, когда один из игроков победил
function stopWhenWin() {
    if (greenRes === 5) {
        alert('синяя ракетка выиграла');
        greenRes = 0;
        blueRes = 0;
        rightracketH.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        leftracketH.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        ballH.posX = BALL_X;
        ballH.posY = BALL_Y;
    }
    if (blueRes === 5) {
        alert('зеленая ракетка выиграла');
        greenRes = 0;
        blueRes = 0;
        rightracketH.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        leftracketH.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        ballH.posX = BALL_X;
        ballH.posY = BALL_Y;
    }
}

requestAnimationFrame(tick);

// игровой процесс
function tick() {
        
    ballH.posX += ballH.speedX;
    // вылетел ли мяч правее стены?
    if (ballH.posX + ballH.radius > field.width) {
        ballH.speedX = - ballH.speedX;
        ballH.speedX = 0;
        ballH.speedY = 0;
        ballH.posX = field.width - ballH.radius;
        greenRes++;
        setResult();
    }
    // вылетел ли мяч левее стены?
    if (ballH.posX - ballH.radius < 0) {
        ballH.speedX = - ballH.speedX;
        ballH.posX = ballH.radius;
        ballH.speedX = 0;
        ballH.speedY = 0;
        blueRes++;
        setResult();
    }

    ballH.posY += ballH.speedY;
    // вылетел ли мяч ниже пола?
    if (ballH.posY + ballH.radius > field.height) {
        ballH.speedY = - ballH.speedY;
        ballH.posY = field.height - ballH.radius;
    }
    // вылетел ли мяч выше потолка?
    if (ballH.posY - ballH.radius < 0) {
        ballH.speedY = - ballH.speedY;
        ballH.posY = ballH.radius;
    }

    //отскок от правой ракетки
    if ((ballH.posX + ballH.radius) >= rightracketH.posX && ballH.posX <= (rightracketH.posX + rightracketH.width)) {
        if (ballH.posY >= rightracketH.posY && ballH.posY <= rightracketH.posY + rightracketH.height) {
            ballH.speedX = - (ballH.speedX * ballH.accel);
            ballH.speedY = ballH.speedY * ballH.accel;
        }
    }
            
    //отскок от левой ракетки
    if (ballH.posX - ballH.radius <= (leftracketH.posX + leftracketH.width)) {
        if (ballH.posY + ballH.radius >= leftracketH.posY && ballH.posY - ballH.radius <= leftracketH.posY + leftracketH.height) {
            ballH.speedX = - (ballH.speedX * ballH.accel);
            ballH.speedY = ballH.speedY * ballH.accel;
        }
    }
        
    ballH.update();
    
    leftracketH.posY += leftracketH.speed;
    rightracketH.posY += rightracketH.speed;
    // ракетка выше потолка?
    if (leftracketH.posY <= 0) {
        leftracketH.posY = 0;
    }
    if (rightracketH.posY <= 0) {
        rightracketH.posY = 0;
    }
    // ракетка ниже пола?
    if ((leftracketH.posY + leftracketH.height) >= field.height) {
        leftracketH.posY = field.height - leftracketH.height;
    }
    if ((rightracketH.posY + rightracketH.height) >= field.height) {
        rightracketH.posY = field.height - rightracketH.height;
    }

    
    leftracketH.update();
    rightracketH.update();
    
    stopWhenWin();
    requestAnimationFrame(tick);
}








