const arr = [3, 56, 56, 23, 7, 76, -2, 345, 45, 76, 3];
const num = 37;

function getNear(arr, target) {
  let minDis = Infinity;
  let minIndex = 0;
  arr.forEach((i, index) => {
    const currentDis = Math.abs(i - target);
    if (minDis > currentDis) {
      minDis = currentDis;
      minIndex = index;
    }
  });

  return arr[minIndex];
}

console.log(getNear(arr, num));
