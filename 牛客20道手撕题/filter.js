Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    cb(item, i, this) && result.push(item);
  }
  return result;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.filter((i) => i % 2));
console.log(arr.myFilter((i) => i % 2));
