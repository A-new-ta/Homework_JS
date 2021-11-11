"use strict";

const FIELD_WIDTH = 700;
const FIELD_HEIGHT = 400;
const BALL_WIDTH = 25;
const BALL_RAD = BALL_WIDTH / 2;
const BALL_X = FIELD_WIDTH / 2;
const BALL_Y = FIELD_HEIGHT / 2;
const RACKET_WIDTH = 15;
const RACKET_HEIGHT = 80;


let canvas = document.querySelector('.wrapper');
canvas.width = FIELD_WIDTH;
canvas.height = FIELD_HEIGHT;
let context = canvas.getContext('2d');

function rect (x, y, w, h, color) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
    context.strokeRect(x,y,w,h);
}

function circle (x, y, r, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, r, 0, Math.PI*2, false);
    context.fill();
    context.closePath();
}

//создаем поле
let field = {
    width: FIELD_WIDTH,
    height: FIELD_HEIGHT,
    color: '#e7cc36',

    update: function () {
        rect(0, 0, this.width, this.height, this.color);
    }
}


// создаем мяч
let ballH = {
    posX: BALL_X,
    posY: BALL_Y,
    radius: BALL_RAD,
    speedX: 0,
    speedY: 0,
    accel: 1.2,
    color: 'red',
    
    update: function () {
        circle(this.posX, this.posY, this.radius, this.color);
    }
}


//создаем левую ракетку
let leftracketH = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: 0,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,
    color: 'blue',
    
    update: function () {
        rect(this.posX, this.posY, this.width, this.height, this.color);
    }
}


//создаем правую ракетку
let rightracketH = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: FIELD_WIDTH - RACKET_WIDTH,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,
    color: 'green',
    
    update: function () {
        rect(this.posX, this.posY, this.width, this.height, this.color);
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
let button = document.querySelector('.start');
button.addEventListener('click', startGame);



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

    field.update();
    ballH.update();
    leftracketH.update();
    rightracketH.update();
    
    stopWhenWin();
    requestAnimationFrame(tick);
}









