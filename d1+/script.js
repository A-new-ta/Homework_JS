"use strict";

const image = document.querySelector('.image');
let inputData = {};

function getImageData(EO) {
    let pos = image.getBoundingClientRect();
    inputData = {
        action: EO.target.className,
        width: pos.width,
        height: pos.height,
        top: pos.top,
        left: pos.left,
        shiftX: EO.pageX - pos.left,
        shiftY: EO.pageY - pos.top,
        propWidth: pos.width / pos.height,
        propHeight: (pos.width / pos.height) / 2
    }
}

document.addEventListener('mousedown', EO => {
    EO.preventDefault();
    getImageData(EO);
    // let currAction = EO.target.className;
    // let clickX = EO.pageX;
    // let clickY = EO.pageY;

    // // находим положение image при mousedown
    // let pos = image.getBoundingClientRect();
    // let imgLeft = pos.left;
    // let imgTop = pos.top;
    // let imgWidth = pos.width;
    // let imgHeight = pos.height;

    // //разница между кликом и расстоянием между image и окном браузера
    // let shiftX = clickX - imgLeft;
    // let shiftY = clickY - imgTop;

    // //пропорции по ширине и высоте
    // let propWidth = imgWidth / imgHeight;
    // let propHeight = (imgWidth / imgHeight) / 2;

    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', () => {
        EO.preventDefault();
        document.removeEventListener('mousemove', mousemove);
    });

});

function mousemove(EO) {
    // общие условия для клика
    if (inputData.action) {

        //прописываем условия для всех возможных кликов мыши
        if (inputData.action === 'image') {

        }

        if (inputData.action === 'resizer top__left') {
            
        }

        if (inputData.action === 'resizer top__middle') {
            
        }

        if (inputData.action === 'resizer top__right') {
            
        }

        if (inputData.action === 'resizer middle__right') {
            
        }

        if (inputData.action === 'resizer middle__right') {
            
        }

        if (inputData.action === 'resizer bottom__right') {
            
        }

        if (inputData.action === 'resizer bottom__middle') {
            
        }

        if (inputData.action === 'resizer bottom__left') {
            
        }

        if (inputData.action === 'resizer middle__left') {
            
        }
    } 
    

}







