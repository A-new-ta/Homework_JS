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
field.update();

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

ball.update();
leftracket.update();
rightracket.update();


// управление ракетками, keydown
window.addEventListener('keydown', racketMove);
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
window.addEventListener('keyup', racketStop);
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


// функция ускорения для мяча


//функция tick
function tick() {

    ball.posX += ball.speedX;
    ball.posY += ball.speedY;

    if(ball.speedX !==0 && ball.speedY !==0) {

       //отскок от правой ракетки
       if( (ball.posX + ball.width) >= rightracket.offsetLeft && (ball.posY + ball.width / 2) >= rightracket.offsetTop && (ball.posY + ball.width / 2) <= (rightracket.offsetTop + rightracket.height)) {
        ball.speedX = - ball.speedX;
        }
    
        if (ball.posX + ball.width > (field.offsetLeft + field.width)) {
        ball.speedX = 0;
        ball.speedY = 0;
        a++; 
        }
    
        //отскок от левой ракетки
        if(ball.posX <= (leftracket.offsetLeft + leftracket.width) && (ball.posY + ball.width / 2) >= leftracket.offsetTop && (ball.posY + ball.width / 2) <= (leftracket.offsetTop + leftracket.height)) {
        ball.speedX = - ball.speedX;
        }
    
        if ( ball.posX < field.offsetLeft) {
        ball.posX = 0;
        ball.speedX = 0;
        ball.speedY = 0;
        b++;
        }
    
      
        if (ball.posY + ball.width > field.offsetTop) {
          ball.speedY = - ball.speedY;
        }
      
        if (ball.posY < field.offsetTop) {
          ball.speedY = - ball.speedY;
        }
    }

    ball.update();
    
    leftracket.posY += leftracket.speed;

    if (leftracket.posY <= field.offsetTop) {
        leftracket.posY = field.offsetTop;
    }

    if ((leftracket.posY + leftracket.height) >= (field.offsetTop + field.height)) {
        leftracket.posY = field.offsetTop + field.height - leftracket.height;
    }

    rightracket.posY += rightracket.speed;
    
    if (rightracket.posY <= field.offsetTop) {
        rightracket.posY = field.offsetTop;
    } 
    if ((rightracket.posY + rightracket.height) >= (field.offsetTop + field.height)) {
        rightracket.posY = field.offsetTop + field.height - rightracket.height;
    }

    leftracket.update();
    rightracket.update();
    
    //где-то еще написать функцию для остановки игры когда ктото набрал 10 очков

    requestAnimationFrame(tick);
}


let timer = 0;
window.addEventListener('load', function () {
    button.addEventListener('click', startGame);
    addEventListener('keydown', racketMove);
    addEventListener('keyup', racketStop);
    timer = requestAnimationFrame(tick);
})




