"use strict";

const image = document.querySelector('.image');
let inputData = {};


function getImageData(EO) {
    let pos = image.getBoundingClientRect();
    inputData = {
        action: EO.target.id,
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
        // let mouseLeft = EO.pageX - inputData.left;
        // let mouseTop = EO.pageY - inputData.top;
        // let mouseRight = EO.pageX - (inputData.left + inputData.width);
        // let mouseBottom = EO.pageY - (inputData.top + inputData.height);
        //прописываем условия для всех возможных кликов мыши
        if (inputData.action === 'image') {
            image.style.top = EO.pageY - inputData.shiftY + 'px';
            image.style.left = EO.pageX - inputData.shiftX + 'px';
        }

        if (inputData.action === 'top__left') {
           
            image.style.width = image.offsetHeight * inputData.propWidth + 'px';
            image.style.height = inputData.height - (EO.pageY - inputData.top) + 'px';
            
            image.style.left = (inputData.left + inputData.width) - image.offsetWidth + 'px';
            image.style.top = (inputData.top + inputData.height) - image.offsetHeight + 'px';
        
            if (EO.pageY >= inputData.top + inputData.height && EO.pageX >= inputData.left + inputData.width) {
                image.style.height = EO.pageY - (inputData.top + inputData.height) + 'px';
                image.style.top = inputData.top + inputData.height + 'px';
                image.style.width = image.offsetHeight * inputData.propWidth + 'px';
                image.style.left = inputData.left + inputData.width + 'px';
            }
        }

        if (inputData.action === 'top__middle') {
            image.style.top = EO.pageY  + 'px';
            image.style.height = inputData.height - (EO.pageY - inputData.top) + 'px';
            if (EO.pageY >= inputData.top + inputData.height) {
                image.style.top = inputData.top + inputData.height + 'px';
                image.style.height = (EO.pageY - inputData.top) - inputData.height + 'px';
            }
        }

        if (inputData.action === 'top__right') {
            
        }

        if (inputData.action === 'middle__right') {
            
        }

        if (inputData.action === 'middle__right') {
            
        }

        if (inputData.action === 'bottom__right') {
            
        }

        if (inputData.action === 'bottom__middle') {
            
        }

        if (inputData.action === 'bottom__left') {
            
        }

        if (inputData.action === 'middle__left') {
            
        }
    } 
    

}







