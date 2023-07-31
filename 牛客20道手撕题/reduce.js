Array.prototype.myReduce = function (cb, initValue) {
  let value = initValue === undefined ? this[0] : initValue;
  let start = initValue === undefined ? 1 : 0;
  for (let i = start; i < this.length; i++) {
    const item = this[i];
    value = cb(value, item, i, this);
  }
  return value;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.reduce((old, current) => old + current));
console.log(arr.myReduce((old, current) => old + current));
