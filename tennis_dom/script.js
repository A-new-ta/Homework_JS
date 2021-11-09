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

//ракетки
let racket = document.querySelector('.racket');
racket = {
    width: RACKET_WIDTH,
    height: RACKET_HEIGHT,
    speed: 0,

    update: function () {
        let racket = document.querySelector('.racket');
        racket.style.width = this.width + 'px';
        racket.style.height = this.height + 'px';
        let leftracket = document.querySelector('.leftracket');
        let rightracket = document.querySelector('.rightracket');
        leftracket.style.left = 0 + 'px';
        leftracket.style.top = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2 + 'px';
        rightracket.style.left = FIELD_WIDTH - RACKET_WIDTH + 'px';
        rightracket.style.top = FIELD_HEIGHT / 2 - RACKET_HEIGHT / 2 + 'px';
    }
}



field.update();
ball.update();
racket.update();