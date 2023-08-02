Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    result.push(cb(item, i, this));
  }
  return result;
};

const arr = [1, 2, 3];
console.log(arr.map((i) => i % 2));
console.log(arr.myMap((i) => i % 2));
