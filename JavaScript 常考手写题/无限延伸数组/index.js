// 实现一个 无限延伸数组
function* genArray() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const arr = genArray();

console.log(arr.next().value);
console.log(arr.next().value);
console.log(arr.next().value);
console.log(arr.next().value);
console.log(arr.next().value);
