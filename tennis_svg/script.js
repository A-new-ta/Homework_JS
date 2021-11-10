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
let leftracketS = document.createElementNS('http://www.w3.org/2000/svg','rect');
leftracketS.setAttribute('class', 'leftracket');
leftracketS.setAttribute('stroke', 'black');
leftracketS.setAttribute('stroke-width', 1);
leftracketS.setAttribute('fill', 'blue');
leftracketS.setAttribute('width', RACKET_WIDTH);
leftracketS.setAttribute('height', RACKET_HEIGHT);
leftracketS.setAttribute('x', 0);
leftracketS.setAttribute('y', FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2);
wrapper.appendChild(leftracketS);

let leftracket = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: 0,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,
    
    update: function () {
        leftracketS.setAttribute('x', this.posX);
        leftracketS.setAttribute('y', this.posY);
    }
}


//создаем правую ракетку
let rightracketS = document.createElementNS('http://www.w3.org/2000/svg','rect');
rightracketS.setAttribute('class', 'rightracket');
rightracketS.setAttribute('stroke', 'black');
rightracketS.setAttribute('stroke-width', 1);
rightracketS.setAttribute('fill', 'green');
rightracketS.setAttribute('width', RACKET_WIDTH);
rightracketS.setAttribute('height', RACKET_HEIGHT);
rightracketS.setAttribute('x', FIELD_WIDTH - RACKET_WIDTH);
rightracketS.setAttribute('y', FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2);
wrapper.appendChild(rightracketS);


let rightracket = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,
    posX: FIELD_WIDTH - RACKET_WIDTH,
    posY: FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2,
    
    update: function () {
        rightracketS.setAttribute('x', this.posX);
        rightracketS.setAttribute('y', this.posY);
    }
}



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
        rightracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        leftracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        ballH.posX = BALL_X;
        ballH.posY = BALL_Y;
    }
    if (blueRes === 5) {
        alert('зеленая ракетка выиграла');
        greenRes = 0;
        blueRes = 0;
        rightracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
        leftracket.posY = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2;
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
    if ((ballH.posX + ballH.radius) >= rightracket.posX && ballH.posX <= (rightracket.posX + rightracket.width)) {
        if (ballH.posY >= rightracket.posY && ballH.posY <= rightracket.posY + rightracket.height) {
            ballH.speedX = - (ballH.speedX * ballH.accel);
            ballH.speedY = ballH.speedY * ballH.accel;
        }
    }
            
    //отскок от левой ракетки
    if (ballH.posX - ballH.radius <= (leftracket.posX + leftracket.width)) {
        if (ballH.posY + ballH.radius >= leftracket.posY && ballH.posY - ballH.radius <= leftracket.posY + leftracket.height) {
            ballH.speedX = - (ballH.speedX * ballH.accel);
            ballH.speedY = ballH.speedY * ballH.accel;
        }
    }
        
    ballH.update();
    
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







