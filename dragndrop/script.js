'use strict';

let images = document.querySelectorAll('img');
let diffMouseMinusImgX = 0;
let diffMouseMinusImgY = 0;
let currElem;
window.addEventListener('load', start);

function start() {
    for (let elem of images) {
        let position = getElementPos(elem);
        elem.style.left = position.left + 'px';
        // elem.style.left = position.offsetLeft + 'px';
        elem.style.top = position.top + 'px';
        // elem.style.top = position.offsetTop + 'px';
        elem.addEventListener('mousedown', mousedown);
        elem.addEventListener('mouseup', mouseup);
        // elem.style.margin = '0px';
    }
    for (let elem of images) {
        elem.style.position = 'absolute';
    }
}

function getElementPos(elem) {
    let bbox = elem.getBoundingClientRect();
    let marginleft = parseInt(getComputedStyle(elem).marginLeft);
    let margintop = parseInt(getComputedStyle(elem).marginTop);
    return {
      left: bbox.left - marginleft + window.pageXOffset,
      top: bbox.top - margintop + window.pageYOffset
    };
}

function mousedown (EO) {
    EO = EO || window.event;
    EO.preventDefault();
    currElem = EO.target;
    let position = getElementPos(currElem);
    diffMouseMinusImgX = EO.pageX - position.left;
    diffMouseMinusImgY = EO.pageY - position.top;
    document.body.appendChild(currElem);
    currElem.style.cursor = 'pointer';
    window.addEventListener('mousemove', mousemove);
    
    // Проверки:
    // console.log('нажатие:' + EO);
    // console.log('EO.target: ' + EO.target);
    // console.log('EO.pageY: ' + EO.pageY + '\n' + 'EO.pageX: ' + EO.pageX + '\n' + 'diffMouseMinusImgY: ' + diffMouseMinusImgY);
    // console.log('элемент: ' + currElem);
}

function mouseup (EO) {
    EO = EO || window.event;
    EO.preventDefault();
    window.removeEventListener('mousemove', mousemove);
    // currElem.style.cursor = 'auto';

    // Проверки:
    // console.log('снятие:' + EO);
    // console.log('курсор: ' + currElem.style.cursor);
}

function mousemove (EO) {
    EO = EO || window.event;
    EO.preventDefault();
    currElem.style.cursor = 'pointer';
    currElem.style.left = (EO.pageX - diffMouseMinusImgX) + 'px';
    // currElem.style.left = EO.pageX - offsetX + 'px';
    currElem.style.top = (EO.pageY - diffMouseMinusImgY) + 'px';

    
    // Проверки:
    // console.log('события движений:' + EO);
    // console.log('курсор: ' + currElem.style.cursor);
    // console.log(EO.pageY);
}