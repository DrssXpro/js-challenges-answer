const a = (() => {
  let count = 0;
  return function () {
    count++;
    return count % 2 === 0 ? 2 : 1;
  };
})();

console.log(a());
console.log(a());
console.log(a());
console.log(a());
