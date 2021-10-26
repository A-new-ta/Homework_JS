"use strict";

const image = document.querySelector('.image');

document.addEventListener('load', main);




function main() {

    // добавить addEventListener

    let currAction = EO.target.className;

    let clickX = EO.pageX;
    let clickY = EO.pageY;

    // находим положение image при mousedown
    let pos = image.getBoundingClientRect();
    let imgLeft = pos.left;
    let imgTop = pos.top;
    let imgWidth = pos.width;
    let imgHeight = pos.height;

    // находим сдвиг для перемещния image



    function resize() {
        
        //прописываем условия для всех возможных кликов мыши

        if (currAction === 'image') {

        }

        if (currAction === 'top__left') {
            
        }

        if (currAction === 'top__middle') {
            
        }

        if (currAction === 'top__right') {
            
        }

        if (currAction === 'middle__right') {
            
        }

        if (currAction === 'middle__right') {
            
        }

        if (currAction === 'bottom__right') {
            
        }

        if (currAction === 'bottom__middle') {
            
        }

        if (currAction === 'bottom__left') {
            
        }

        if (currAction === 'middle__left') {
            
        }

    }


}