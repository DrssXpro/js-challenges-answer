const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArr(arr) {
  let sum = 0;
  computedSum(arr);
  return sum;

  function computedSum(arr) {
    if (arr.length) {
      sum += arr.pop();
    } else return;

    computedSum(arr);
  }
}

console.log(sumArr(arr));
