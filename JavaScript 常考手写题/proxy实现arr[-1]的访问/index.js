const arr = [1, 2, 3, 4, 5, 6];

const arrProxy = new Proxy(arr, {
  get(target, value) {
    if (value < 0) return target[target.length + parseInt(value)];
    else {
      return target[value];
    }
  },
});

console.log(arrProxy[-2]);
