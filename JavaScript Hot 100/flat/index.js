const arr = [1, [2, 3, 4], [[5, 6], [7, 8], [9]], [10, [[11]]]];

const strFlat = (arr) => {
  return arr
    .toString()
    .split(",")
    .map((i) => +i);
};

Array.prototype.myFlat1 = function (depth = 1) {
  const result = [];
  flat(this, depth);
  return result;

  function flat(arr, depth) {
    arr.forEach((i) => {
      if (Array.isArray(i) && depth > 0) {
        flat(i, depth - 1);
      } else {
        result.push(i);
      }
    });
  }
};

Array.prototype.myFlat2 = function (depth = 1) {
  const queue = [...this];
  while (depth--) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const head = queue.shift();
      if (Array.isArray(head)) {
        queue.push(...head);
      } else {
        queue.push(head);
      }
    }
  }
  return queue;
};

// console.log(strFlat(arr));
// console.log(arr.myFlat1(3));
console.log(arr.myFlat2(1));
