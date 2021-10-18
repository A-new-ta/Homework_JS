"use strict";

// доска с вариантами расстановки ферзей

function chessDesk(solution) {

    let solutionArr = solution.split(',');
        
        let div = document.getElementsByClassName('chess-board')[0];
        let table = document.createElement('table');
        table.classList.add('chess-desk');

        for (let i = 0; i < 8; i++) {
            let tr = document.createElement('tr');
            tr.classList.add('row');
            for (let j = 0; j < 8; j++) {
                let td = document.createElement('td');
                if (i % 2 !== j % 2) {
                    td.classList.add('black');
                }
                if (+(solutionArr[i]) === j) {
                    td.innerHTML = '&#9813;';
                    td.setAttribute('row-position', `${i}`);
                    td.setAttribute('col-position', `${j}`);
                    td.classList.add('queen');
                    td.setAttribute('title',
                    `нажмите кнопку мыши, чтобы посмотреть ходы
нажмите кпонку мыши еще раз, чтобы скрыть ходы`);
                    td.addEventListener('mousedown', mousedownChangeColor);
                    // td.addEventListener('mouseup', mouseupChangeColor);
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        div.appendChild(table);


}


// выбор варианта расстановки 
function selectOption() {
    let select = document.getElementById('select-solution');
    let arr = searchPosition(8);
    let disabledOption = document.createElement('option');
    disabledOption.selected = true;
    disabledOption.innerText = 'выберите вариант расстановки ферзей';
    select.appendChild(disabledOption);

    for (let k = 0; k < arr.length; k++) {
        let item = document.createElement('option');
        item.innerHTML = arr[k];
        select.appendChild(item);
    }
}
selectOption();


// построение доски по выбранному варианту
let select = document.getElementById('select-solution');
select.addEventListener('change', changeSolution);

function changeSolution(EO) {
    // Удаляем старую доску
    let table = document.getElementsByClassName('chess-board')[0];
    table.innerHTML = '';

    let index = EO.target.options.selectedIndex;
    let solution = EO.target.options[index].innerText;
    chessDesk(solution);
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


// подсвечивание клеток 
function mousedownChangeColor(EO) {
    let row = +(EO.target.getAttribute('row-position'));
    let col = +(EO.target.getAttribute('col-position'));
    let tr = document.getElementsByClassName('row');
    let left = col - row; 
    let right = col + row; 

    for (let i = 0; i < 8; i++) {
        let td = tr[i].childNodes;
    
        for (let k = 0; k < 8; k++) {
            if (row === i && k === col) {
                continue;
            }
            if ((k === left + i) || (k === right - i) || (i === row) || (k === col)) {
                td[k].classList.toggle('moves');
            }
        }
    }
}

