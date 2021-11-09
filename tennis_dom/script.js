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
    accel: 1.2,
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
    },

    // scoreCount: function () {
    //     let resultLeft = document.querySelector('.blue');
    //     resultLeft.innerHTML = this.count;
    // }
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
    },

    
}

// ball.update();
// leftracket.update();
// rightracket.update();


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
    rightracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
    leftracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
    ball.posX = FIELD_WIDTH / 2 - BALL_WIDTH / 2;
    ball.posY = FIELD_HEIGHT / 2 - BALL_WIDTH / 2;
    ball.speedX = (Math.random() < 0.5 ? -2 : 2);
    ball.speedY = (Math.random() < 0.5 ? -2 : 2);
}



// счетчик 
let greenRes = 0;
let blueRes = 0;

function setResult() {
    let resultLeft = document.querySelector('.blue');
    resultLeft.innerHTML = `${blueRes}`
    let resultRight = document.querySelector('.green');
    resultRight.innerHTML = `${greenRes}`
}

// для остановки игры когда набрано 10 очков - исправить чтобы 
function stopWhenWin() {
    if (greenRes === 2) {
        alert('зеленая ракетка выйграла');
        greenRes = 0;
        blueRes = 0;
        rightracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        leftracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        ball.posX = FIELD_WIDTH / 2 - BALL_WIDTH / 2;
        ball.posY = FIELD_HEIGHT / 2 - BALL_WIDTH / 2;
    }
    if (blueRes === 2) {
        alert('синяя ракетка выйграла');
        greenRes = 0;
        blueRes = 0;
        rightracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        leftracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        ball.posX = FIELD_WIDTH / 2 - BALL_WIDTH / 2;
        ball.posY = FIELD_HEIGHT / 2 - BALL_WIDTH / 2;
    }
    setResult();
}

// игровой процесс
function tick() {
        
    ball.posX += ball.speedX;
    // вылетел ли мяч правее стены?
    if (ball.posX + ball.width > field.width) {
        ball.speedX = -ball.speedX;
        ball.posX = field.width - ball.width;
        ball.speedX = 0;
        ball.speedY = 0;
        greenRes++;
        setResult();
    }
    // вылетел ли мяч левее стены?
    if (ball.posX < 0) {
        ball.speedX = - ball.speedX;
        ball.posX = 0;
        ball.speedX = 0;
        ball.speedY = 0;
        blueRes++;
        setResult();
    }

    ball.posY += ball.speedY;
    // вылетел ли мяч ниже пола?
    if (ball.posY + ball.height > field.height) {
        ball.speedY = - ball.speedY;
        ball.posY = field.height - ball.height;
    }
    // вылетел ли мяч выше потолка?
    if (ball.posY < 0) {
        ball.speedY = - ball.speedY;
        ball.posY = 0;
    }

    //отскок от правой ракетки
    if ((ball.posX + ball.width) >= rightracket.posX && ball.posX <= (rightracket.posX + rightracket.width)) {
        if (ball.posY >= rightracket.posY && ball.posY <= rightracket.posY + rightracket.height) {
            ball.speedX = - (ball.speedX * ball.accel);
            ball.speedY = ball.speedY * ball.accel;
        }
    }
            
    //отскок от левой ракетки
    if (ball.posX <= (leftracket.posX + leftracket.width)) {
        if (ball.posY + ball.height >= leftracket.posY && ball.posY <= leftracket.posY + leftracket.height) {
            ball.speedX = - (ball.speedX * ball.accel);
            ball.speedY = ball.speedY * ball.accel;
        }
    }
    
    ball.update();
    
    leftracket.posY += leftracket.speed;
    rightracket.posY += rightracket.speed;
    // ракетка выше потолка?
    if (leftracket.posY <= 0) {
        leftracket.posY = 0;
    }
    if (rightracket.posY <= 0) {
        rightracket.posY = 0;
    }
    // ракетка ниже пола?
    if ((leftracket.posY + leftracket.height) >= field.height) {
        leftracket.posY = field.height - leftracket.height;
    }
    if ((rightracket.posY + rightracket.height) >= field.height) {
        rightracket.posY = field.height - rightracket.height;
    }

    leftracket.update();
    rightracket.update();
    
    stopWhenWin();
    requestAnimationFrame(tick);
}


let timer = 0;
window.addEventListener('load', function () {
    button.addEventListener('click', startGame, false);
    addEventListener('keydown', racketMove);
    addEventListener('keyup', racketStop);
    timer = requestAnimationFrame(tick);
})




