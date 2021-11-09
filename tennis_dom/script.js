"use strict";

const FIELD_WIDTH = 700;
const FIELD_HEIGHT = 400;
const BALL_WIDTH = 25;
const RACKET_WIDTH = 15;
const RACKET_HEIGHT = 80;


// поле
let field = document.querySelector('.field');
field = {
    width: FIELD_WIDTH,
    height: FIELD_HEIGHT,

    update: function () {
        let field = document.querySelector('.field');
        field.style.width = this.width + 'px';
        field.style.height = this.height + 'px';
    }
}

// мяч
let ball = document.querySelector('.ball');
ball = {
    posX: FIELD_WIDTH / 2 - BALL_WIDTH / 2,
    posY: FIELD_HEIGHT / 2 - BALL_WIDTH / 2,
    speedX: 0,
    speedY: 0,
    width: BALL_WIDTH,
    height: BALL_WIDTH,

    update: function () {
        let ball = document.querySelector('.ball');
        ball.style.left = this.posX + 'px';
        ball.style.top = this.posY + 'px';
        ball.style.width = this.width + 'px';
        ball.style.height = this.width + 'px';
    }
}

//левая ракетка
let leftracket = document.querySelector('.leftracket');
leftracket = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: 0,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,

    update: function () {
        let leftracket = document.querySelector('.leftracket');
        leftracket.style.width = this.width + 'px';
        leftracket.style.height = this.height + 'px';
        leftracket.style.left = this.posX + 'px';
        leftracket.style.top = this.posY + 'px';
    }
}


//правая ракетка
let rightracket = document.querySelector('.racket');
rightracket = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: FIELD_WIDTH - RACKET_WIDTH,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,

    update: function () {
        let rightracket = document.querySelector('.rightracket');
        rightracket.style.width = this.width + 'px';
        rightracket.style.height = this.height + 'px';
        rightracket.style.left = this.posX + 'px';
        rightracket.style.top = this.posY + 'px';
    }
}



// управление ракетками, keydown
document.addEventListener('keydown', racketMove);
function racketMove(eo) {
    if (eo.keyCode === 16) {
        leftracket.speed = -5;
    }
    if (eo.keyCode === 17) {
        leftracket.speed = 5;
    }
    if (eo.keyCode === 38) {
        rightracket.speed = -5;
    }
    if (eo.keyCode === 40) {
        rightracket.speed = 5;
    }
}

// управление ракетками, keydown
document.addEventListener('keydown', racketStop);
function racketStop() {
    leftracket.speed = 0;
    rightracket.speed = 0;
}

// функция запуска мяча по кнопке
let button = document.querySelector('.start');
button.addEventListener('click', startGame);
function startGame() {
    ball.posX = FIELD_WIDTH / 2 - BALL_WIDTH / 2;
    ball.posY = FIELD_HEIGHT / 2 - BALL_WIDTH / 2;
    ball.speedX = (Math.random() < 0.5 ? -2 : 2);
    ball.speedY = (Math.random() < 0.5 ? -2 : 2);
}



// счетчик 
function score() {
    let start = 0;
    return function () {
        return start++;
    }
}

// функция ускорения для мяча


//функция tick
function tick() {
    ball.posX += ball.speedX;
    ball.posY += ball.speedY;

    leftracket.posY += leftracket.speed;
    rightracket.posY += rightracket.speed;

    

    // вылетел ли мяч правее стены?

     // вылетел ли мяч левее стены?
    
    // вылетел ли мяч ниже пола?

     // вылетел ли мяч выше потолка?
}





field.update();
ball.update();
leftracket.update();
rightracket.update();