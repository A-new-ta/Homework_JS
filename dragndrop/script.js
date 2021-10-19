'use strict';

let images = document.querySelectorAll('img');
let mouseImgX = 0;
let mouseImgY = 0;
let currentImg;

window.addEventListener('load', start);

function start() {
    for (let elem of images) {
        let imgPos = getElementPos(elem);
        elem.style.left = imgPos.left + 'px';
        elem.style.top = imgPos.top + 'px';
        
        elem.addEventListener('mousedown', mousedown);
        elem.addEventListener('mouseup', mouseup);
        // elem.style.margin = '0px';
    };
    for (let elem of images) {
        elem.style.position = 'absolute';
    };
}

function getElementPos(elem) {
    let pos = elem.getBoundingClientRect();
    let marginLeft = parseInt(getComputedStyle(elem).marginLeft);
    let marginTop = parseInt(getComputedStyle(elem).marginTop);
    return {
      left: pos.left - marginLeft + window.pageXOffset,
      top: pos.top - marginTop + window.pageYOffset
    };
}

function mousedown (EO) {
    EO.preventDefault();
    currentImg = EO.target;
    let currPosition = getElementPos(currentImg);
    mouseImgX = EO.pageX - currPosition.left;
    mouseImgY = EO.pageY - currPosition.top;
    document.body.appendChild(currentImg);
    currentImg.style.cursor = 'pointer';
    window.addEventListener('mousemove', mousemove);
    
}

function mousemove (EO) {
    EO.preventDefault();
    currentImg.style.left = (EO.pageX - mouseImgX) + 'px';
    currentImg.style.top = (EO.pageY - mouseImgY) + 'px';
}

function mouseup (EO) {
    EO.preventDefault();
    window.removeEventListener('mousemove', mousemove);
}

