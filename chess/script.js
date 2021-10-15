"use strict";

// рисуем шахматную доску

  let chessWrap = document.querySelector('.ch-wrap');
  let i = 0, count = 0;
  while (count < 8 * 8) {
    let item = document.createElement('div');
    chessWrap.appendChild(item);
    item.classList.add('ch-item');
    if (i && i % 2)
      item.classList.add('ch-black')
    i += ((i + 2) % 9) ? 1 : 2;
    count++;
  }


// поиск возможных вариантов расстановки

function searchPosition(boardNumber) {

    let currentSolution = [];
    let finalSolution = [];
    
    function search(currentSolution) {
        if (currentSolution.length === boardNumber) {
            finalSolution.push(currentSolution);
        } else {
            for (let col = 0; col < boardNumber; col++) {
                let row = 0;
                let length = 0;
                for (length = currentSolution.length; row < length; row++) {
                    let prev = currentSolution[row];
                    if ((prev === col) ||
                        (prev - (length - row) === col) ||
                        (prev + (length - row) === col)) {
                    break;
                    }
                // if (prev - (length - row) === col) {
                // break;
                // }
                // if (prev + (length - row) === col) {
                // break;
                // }
                }
            if (row === length) {
                search(currentSolution.concat([col]));
            }
            }
        }
      
    };

  search([]);

  return finalSolution;
};
// console.log(searchPosition(8));


// выбор варианта расстановки 
function selectOption() {
    let select = document.getElementById('select-solution');
    let arr = searchPosition(8);
    let disabledItem = document.createElement('option');
    disabledItem.disabled = true;
    disabledItem.selected = true;
    disabledItem.innerText = 'выберите вариант расстановки';
    select.appendChild(disabledItem);

    for (let k = 0; k < arr.length; k++) {
        let item = document.createElement('option');
        item.text = arr[k];
        item.value = arr[k];
        select.appendChild(item.cloneNode(true));
    }
}
selectOption();






