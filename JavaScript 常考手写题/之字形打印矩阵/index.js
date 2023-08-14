const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// function printMatrix(arr) {
//   const result = [],
//     rlen = arr.length,
//     clen = arr[0].length;
//   let currentLine = 0;
//   for (let i = 0; i < rlen; i++) {
//     if (!(currentLine % 2)) {
//       for (let j = 0; j < clen; j++) {
//         result.push(arr[i][j]);
//       }
//     } else {
//       for (let j = clen - 1; j >= 0; j--) {
//         result.push(arr[i][j]);
//       }
//     }
//     currentLine++;
//   }

//   return result;
// }

function printMatrix(arr) {
  const result = [],
    rlen = arr.length,
    clen = arr[0].length;
  let topRow = 0,
    topColumn = 0,
    bottomRow = 0,
    bottomColumn = 0,
    direction = true;

  while (topRow < rlen) {
    printLine(arr, topRow, topColumn, bottomRow, bottomColumn, direction);
    topColumn === clen - 1 ? topRow++ : topRow;
    topColumn === clen - 1 ? topColumn : topColumn++;
    bottomRow === rlen - 1 ? bottomColumn++ : bottomColumn;
    bottomRow === rlen - 1 ? bottomRow : bottomRow++;
    // 方向反过来
    direction = !direction;
  }

  return result;

  function printLine(arr, topRow, topColumn, bottomRow, bottomColumn, direction) {
    if (direction) {
      let r = topRow,
        c = topColumn;
      while (r <= bottomRow && c >= bottomColumn) {
        result.push(arr[r++][c--]);
      }
    } else {
      let r = bottomRow,
        c = bottomColumn;
      while (r >= topRow && c <= topColumn) {
        result.push(arr[r--][c++]);
      }
    }
  }
}

console.log(printMatrix(arr));
