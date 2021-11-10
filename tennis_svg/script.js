"use strict";

const FIELD_WIDTH = 700;
const FIELD_HEIGHT = 400;
const BALL_WIDTH = 25;
const BALL_RAD = BALL_WIDTH / 2;
const BALL_X = FIELD_WIDTH / 2;
const BALL_Y = FIELD_HEIGHT / 2;
const RACKET_WIDTH = 15;
const RACKET_HEIGHT = 80;



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


let wrapper = document.querySelector('.wrapper')
// поле

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

// мяч

let ball = {
    posX: BALL_X,
    posY: BALL_Y,
    speedX: 0,
    speedY: 0,
    accel: 1.2,
    radius: BALL_RAD,
    color: 'red',

    update: function () {
        let ball = document.createElementNS('http://www.w3.org/2000/svg','circle');
        ball.setAttribute('fill', this.color);
        ball.setAttribute('cx', this.posX);
        ball.setAttribute('cy', this.posY);
        ball.setAttribute('r', this.radius);
        ball.id = 'ball';
        wrapper.appendChild(ball);
    }
}
ball.update();

//левая ракетка
let leftracket = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: 0,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,
    color: 'blue',

    update: function () {
        let leftracket = document.createElementNS('http://www.w3.org/2000/svg','rect');
        leftracket.setAttribute('stroke', 'black');
        leftracket.setAttribute('stroke-width', 1);
        leftracket.setAttribute('fill', this.color);
        leftracket.setAttribute('width', this.width);
        leftracket.setAttribute('height', this.height);
        leftracket.setAttribute('x', this.posX);
        leftracket.setAttribute('y', this.posY);
        wrapper.appendChild(leftracket);
    },
}
leftracket.update();

//правая ракетка
let rightracket = document.querySelector('.racket');
rightracket = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: FIELD_WIDTH - RACKET_WIDTH,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,
    color: 'green',

    update: function () {
        let rightracket = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rightracket.setAttribute('stroke', 'black');
        rightracket.setAttribute('stroke-width', 1);
        rightracket.setAttribute('fill', this.color);
        rightracket.setAttribute('width', this.width);
        rightracket.setAttribute('height', this.height);
        rightracket.setAttribute('x', this.posX);
        rightracket.setAttribute('y', this.posY);
        wrapper.appendChild(rightracket);
    },
}
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

// управление ракетками, keyup
window.addEventListener('keyup', racketStop);
function racketStop() {
    leftracket.speed = 0;
    rightracket.speed = 0;
}

// функция запуска мяча по кнопке
// let button = document.querySelector('.start');
start.addEventListener('click', startGame);

function startGame() {
    setResult();
    rightracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
    leftracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
    ball.posX = BALL_X;
    ball.posY = BALL_Y;
    ball.speedX = (Math.random() < 0.5 ? -2 : 2);
    ball.speedY = (Math.random() < 0.5 ? -2 : 2);
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
        rightracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        leftracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        ball.posX = BALL_X;
        ball.posY = BALL_Y;
    }
    if (blueRes === 5) {
        alert('зеленая ракетка выиграла');
        greenRes = 0;
        blueRes = 0;
        rightracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        leftracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        ball.posX = BALL_X;
        ball.posY = BALL_Y;
    }
}

requestAnimationFrame(tick);

// игровой процесс
function tick() {
        
    ball.posX += ball.speedX;
    // вылетел ли мяч правее стены?
    if (ball.posX + ball.radius > field.width) {
        // ball.speedX = - ball.speedX;
        ball.speedX = 0;
        ball.speedY = 0;
        ball.posX = field.width - ball.radius;
        greenRes++;
        setResult();
    }
    // вылетел ли мяч левее стены?
    if (ball.posX - ball.radius < 0) {
        // ball.speedX = - ball.speedX;
        ball.posX = ball.radius;
        ball.speedX = 0;
        ball.speedY = 0;
        blueRes++;
        setResult();
    }

    ball.posY += ball.speedY;
    // вылетел ли мяч ниже пола?
    if (ball.posY + ball.radius > field.height) {
        ball.speedY = - ball.speedY;
        ball.posY = field.height - ball.radius;
    }
    // вылетел ли мяч выше потолка?
    if (ball.posY - ball.radius < 0) {
        ball.speedY = - ball.speedY;
        ball.posY = ball.radius;
    }

    //отскок от правой ракетки
    if ((ball.posX + ball.radius) >= rightracket.posX && ball.posX <= (rightracket.posX + rightracket.width)) {
        if (ball.posY >= rightracket.posY && ball.posY <= rightracket.posY + rightracket.height) {
            ball.speedX = - (ball.speedX * ball.accel);
            // ball.speedY = ball.speedY * ball.accel;
        }
    }
            
    //отскок от левой ракетки
    if (ball.posX - ball.radius <= (leftracket.posX + leftracket.width)) {
        if (ball.posY + ball.radius >= leftracket.posY && ball.posY - ball.radius <= leftracket.posY + leftracket.height) {
            ball.speedX = - (ball.speedX * ball.accel);
            // ball.speedY = ball.speedY * ball.accel;
        }
    }
        
    // ball.update();
    
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

    // leftracket.update();
    // rightracket.update();
    
    stopWhenWin();
    requestAnimationFrame(tick);
}







