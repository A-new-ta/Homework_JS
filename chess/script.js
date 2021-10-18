"use strict";

//рисуем шахматную доску

//   let chessWrap = document.querySelector('.ch-wrap');
//   let i = 0, count = 0;
//   while (count < 8 * 8) {
//     let item = document.createElement('div');
//     chessWrap.appendChild(item);
//     item.classList.add('ch-item');
//     if (i && i % 2)
//       item.classList.add('ch-black')
//     i += ((i + 2) % 9) ? 1 : 2;
//     count++;
//   }

 








function searchSolutions(boardSide) {
  let figures = new Array(boardSide);
  let possibleSolutions = [];

  //Функция проверки на стоящего рядом
  function check(figureNumber, row) {
      for (let i = 0; i < figureNumber; i++) {
          let Nearby = figures[i];
          if (Nearby === row // если в одном ряду
              || Nearby === row - (figureNumber - i) // если по диагонали
              || Nearby === row + (figureNumber - i)) {
              return false;
          }
      }
      return true;
  }

  //Функция поиска
  function search(figureNumber) {
      if (figureNumber === boardSide) {
          let solutionNumber = possibleSolutions.length;
          possibleSolutions[solutionNumber] = [];
          for (let i = 0; i < boardSide; i++) {
              possibleSolutions[solutionNumber].push(figures[i]);
          }
      } else {
          for (let row = 0; row < boardSide; row++) {
              //Если проверка вернула false проверяем на следующий ряд
              //Если проверка вернула true запускаем следующее число
              if (check(figureNumber, row)) {
                  figures[figureNumber] = row;
                  //Если ничего не вернулось, то из стэка удаляется вызов и продолжается предыдущий вызов
                  search(figureNumber + 1);
              }
          }
      }
  }

  search(0);
  return possibleSolutions;
}
console.log(searchSolutions(8));




// const countNQueens = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   let count = 0;
 
//   const solver = (current, increment = 1) => {
//     if (current.length === n) {
//       count += increment;
//     } else {
//       for (let col = 0; col < n; col += 1) {
//         let row = 0;
//         let l = 0;
//         for (l = current.length; row < l; row += 1) {
//           const prev = current[row];
//           if (prev === col) {
//             break;
//           }
//           if (prev - (l - row) === col) {
//             break;
//           }
//           if (prev + (l - row) === col) {
//             break;
//           }
//         }
//         if (row === l) {
//           solver(current.concat([col]), increment);
//         }
//       }
//     }
//     return current;
//   };

//   const items = (n / 2) << 0;
//   for (let i = 0; i < items; i += 1) {
//     solver([i], 2);
//   }
//   if (items + items !== n) {
//     solver([items], 1);
//   }

//   // return count;
// };
// console.log(countNQueens(8));




// let solutionCount = 0;
// function countPrint() {
// 	return ++solutionCount;
// }

// function buildArrs() {
// 	let arrs = [];
// 	for (let i=8; i>0; i--) {
// 		let arr = [];
// 		for (let j=8; j>0; j--) {
// 			arr.push(0);	
// 		}
// 		arrs.push(arr);
// 	}
// 	return arrs;
// }

// function printArrs(arrs) {
// 	console.log("------------------------------ count=", countPrint());
// 	for (let i=0; i<arrs.length; i++) {
// 		let arr = arrs[i];
// 		let row = arr.map(item => {
// 			return !!item ? ' ● ' : ' ○ ';
// 		}).join("");
// 		console.log(row);
// 	}
// }

// function isConflict(arrs, rowIndex, colIndex) {
// 	const target = arrs[rowIndex][colIndex];
// 	for (let i=rowIndex-1; i>=0; i--) {
// 		let row = arrs[i];
// 		let j = row.indexOf(1);
// 		if (j==colIndex || (rowIndex-i == Math.abs(colIndex-j)))
// 			return true;
// 	}
// 	return false;
// }

// function clearDirtyRow(row) {
// 	row.fill(0);
// }

// function findQueens(arrs, rowIndex) {
// 	if (rowIndex>=8) {
// 		printArrs(arrs);
// 		return;
// 	}
// 	for (let i=0; i<arrs[rowIndex].length; i++) {
// 		if (!isConflict(arrs, rowIndex, i)) { 
// 			clearDirtyRow(arrs[rowIndex]);
// 			arrs[rowIndex][i] = 1;
// 			findQueens(arrs, rowIndex+1);
// 		}
// 	}
// }

// function start() {
// 	let plate = buildArrs();
// 	solutionCount = 0;
// 	findQueens(plate, 0);
// }

// console.log(start(8));





//  const countNQeensUsingSimpleBacktracking = (n) => {
  
//    let count = 0;
//    let current = [];
  
//   const solver = (current) => {
//     if (current.length === n) {
//       count += 1;
//     } else {
//       for (let i = 0; i < n; i += 1) {
//         let j = 0;
//         let l = 0;
//         for (l = current.length; j < l; j += 1) {
//           const prev = current[j];
//           if (prev === i) {
//             break;
//           }
//           if (prev - (l - j) === i) {
//             break;
//           }
//           if (prev + (l - j) === i) {
//             break;
//           }
//         }
//         if (j === l) {
//           solver(current.concat([i]));
//         }
//       }
//     }
//   };

//   solver([]);

//   return current;
// };
// console.log(countNQeensUsingSimpleBacktracking(8));


// function queenPuzzle(rows, columns) {
//     if (rows <= 0) {
//         return [[]];
//     } else {
//         return addQueen(rows - 1, columns);
//     }
// }
 
// function addQueen(newRow, columns, prevSolution) {
//     var newSolutions = [];
//     var prev = queenPuzzle(newRow, columns);
//     for (var i = 0; i < prev.length; i++) {
//         var solution = prev[i];
//         for (var newColumn = 0; newColumn < columns; newColumn++) {
//             if (!hasConflict(newRow, newColumn, solution))
//                 newSolutions.push(solution.concat([newColumn]))
//         }
//     }
//     return newSolutions;
// }
 
// function hasConflict(newRow, newColumn, solution) {
//     for (var i = 0; i < newRow; i++) {
//         if (solution[i]     == newColumn          ||
//             solution[i] + i == newColumn + newRow || 
//             solution[i] - i == newColumn - newRow) {
//                 return true;
//         }
//     }
//     return false;
// }
 
// console.log(queenPuzzle(8, 8));

