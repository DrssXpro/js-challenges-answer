const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function permutate(arr) {
  // res为第一个数组
  let res = arr[0].slice();

  // 从第二个数组开始遍历
  for (let i = 1; i < arr.length; i++) {
    const pre = res.slice();
    res = [];
    pre.forEach((item) => {
      arr[i].forEach((item2) => {
        res.push("" + item + item2);
      });
    });
  }
  return res;
}

function permutate(arr) {
  let current = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const pre = current;
    current = [];
    pre.forEach((item) => {
      arr[i].forEach((j) => {
        current.push("" + item + j);
        console.log(current);
      });
    });
  }

  return current;
}

console.log(permutate(arr));
