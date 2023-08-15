const arr = [1, 23, 4, 67, 19, 192, 29];

function getMax1(arr) {
  let max = arr[0];
  arr.forEach((item) => {
    if (item > max) max = item;
  });
  return max;
}

function getMax2(arr) {
  return Math.max(...arr);
}

function getMax3(arr) {
  const newArr = [...arr];
  newArr.sort((a, b) => b - a);
  return newArr[0];
}

console.log(getMax1(arr));
console.log(getMax2(arr));
console.log(getMax3(arr));
