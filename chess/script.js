"use strict";


//рисуем шахматную доску
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

