"use strict";

let image = document.querySelector('.image');
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
        propHeight: pos.height / pos.width,
    }
}

document.addEventListener('mousedown', EO => {
    EO.preventDefault();
    getImageData(EO);
    
    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', () => {
        EO.preventDefault();
        document.removeEventListener('mousemove', mousemove);
    });

});

function mousemove(EO) {

    // смещение мыши по x и y при движении
    if (inputData.action !== '') {
        let mouseLeft = EO.pageX - inputData.left;
        let mouseTop = EO.pageY - inputData.top;
        let mouseRight = EO.pageX - (inputData.left + inputData.width);
        let mouseBottom = EO.pageY - (inputData.top + inputData.height);
        
        //прописываем условия для всех возможных кликов мыши
        if (inputData.action === 'image') {
            image.style.top = EO.pageY - inputData.shiftY + 'px';
            image.style.left = EO.pageX - inputData.shiftX + 'px';
        }

        if (inputData.action === 'top__left') {
           
            image.style.height = inputData.height - mouseTop + 'px';
            image.style.width = image.offsetHeight * inputData.propWidth + 'px';
            image.style.top = (inputData.top + inputData.height) - image.offsetHeight + 'px';
            image.style.left = (inputData.left + inputData.width) - image.offsetWidth + 'px';
            
            if (EO.pageY >= inputData.top + inputData.height && EO.pageX >= inputData.left + inputData.width) {
                image.style.height = mouseBottom + 'px';
                image.style.width = image.offsetHeight * inputData.propWidth + 'px';
                image.style.top = inputData.top + inputData.height + 'px';
                image.style.left = inputData.left + inputData.width + 'px';
            }
        }

        if (inputData.action === 'top__middle') {
            // image.style.top = EO.pageY + 'px';
            image.style.top = inputData.top + mouseTop + 'px';
            image.style.height = inputData.height - mouseTop + 'px';
            
            if (EO.pageY >= inputData.top + inputData.height) {
                image.style.top = inputData.top + inputData.height + 'px';
                image.style.height = mouseTop - inputData.height + 'px';
            }
        }

        if (inputData.action === 'top__right') {
            image.style.height = inputData.height - mouseTop + 'px';
            image.style.width = image.offsetHeight / inputData.propHeight + 'px';
            image.style.top = inputData.top + mouseTop + 'px';

            if (EO.pageY >= inputData.top + inputData.height && EO.pageX <= inputData.left) {
                image.style.width = - mouseRight - inputData.width + 'px';
                image.style.height = image.offsetWidth / inputData.propWidth + 'px';
                image.style.left = mouseRight + inputData.width + inputData.left + 'px';
                image.style.top = inputData.top + inputData.height + 'px';
            }
        }

        if (inputData.action === 'middle__right') {
            image.style.width = mouseRight + inputData.width + 'px';

            if (EO.pageX <= inputData.left) {
                image.style.width = - mouseRight - inputData.width + 'px';
                image.style.left = mouseRight + inputData.width + inputData.left + 'px';
            }
        }

        
        if (inputData.action === 'bottom__right') {
            image.style.width = mouseLeft - inputData.propWidth + 'px';
            image.style.height = image.offsetWidth / inputData.propWidth + 'px';
            
            if (EO.pageY <= inputData.top && EO.pageX <= inputData.left) {
                image.style.width = - mouseRight - inputData.width + 'px';
                image.style.height = image.offsetWidth / inputData.propWidth + 'px';
                image.style.left = inputData.left - image.offsetWidth + 'px';
                image.style.top = inputData.top - image.offsetHeight + 'px';
            }
        }

        if (inputData.action === 'bottom__middle') {
            image.style.height = mouseBottom + inputData.height + 'px';

            if (EO.pageY <= inputData.top) {
                image.style.top = mouseBottom + inputData.height + inputData.top + 'px';
                image.style.height = - mouseBottom - inputData.height + 'px';
            }
        }

        if (inputData.action === 'bottom__left') {
            image.style.width = inputData.width - mouseLeft + 'px';
            image.style.left = inputData.left + mouseLeft + 'px';
            image.style.height = image.offsetWidth / inputData.propWidth + 'px';

            if (EO.pageX >= inputData.left + inputData.width && EO.pageY <= inputData.top) {
                image.style.height = -mouseBottom - inputData.height + 'px';
                image.style.top = mouseBottom + inputData.height + inputData.top + 'px';
                image.style.width = image.offsetHeight * inputData.propWidth + 'px';
                image.style.left = inputData.left + inputData.width + 'px';
            }
        }

        if (inputData.action === 'middle__left') {
            image.style.width = inputData.width - mouseLeft + 'px';
            image.style.left = inputData.left + mouseLeft + 'px';

            if (EO.pageX >= inputData.left + inputData.width) {
                image.style.width = mouseLeft - inputData.width + 'px';
                image.style.left = inputData.left + inputData.width + 'px';
            }
        }
    } 
}







