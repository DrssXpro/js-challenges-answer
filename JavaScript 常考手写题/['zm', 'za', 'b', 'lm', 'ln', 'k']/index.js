/**
 * 实现一个函数，
 * 把一个字符串数组（[‘zm’, ‘za’, ‘b’, ‘lm’, ‘ln’, ‘k’]） 格式化成一个对象
 * { ‘b’: [‘b’], ‘k’: [‘k’], ‘l’: [‘lm’, ‘ln’], ‘z’: [‘za’, ‘zm’] }
 */

const arr = ["zm", "za", "b", "lm", "ln", "k"];

function formatStringArr(arr) {
  const map = {};

  arr.forEach((i) => {
    map[i[0]] = [];
  });

  arr.forEach((i) => {
    map[i[0]].push(i);
  });

  return map;
}

console.log(formatStringArr(arr));
