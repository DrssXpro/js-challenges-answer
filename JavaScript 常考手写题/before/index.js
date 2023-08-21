// 接受两个参数，第一个参数是数字，第二个参数是函数，调用before函数num次数以内，返回与fn执行相同的结果，超过num次数返回最后一次fn的执行结果。

function before(num, fn) {
  let count = 0;
  let result = null;
  return function (a) {
    count++;
    if (count <= num) {
      result = fn(a);
      return result;
    } else return result;
  };
}

const task = before(3, (a) => a);

console.log(task(1));
console.log(task(2));
console.log(task(3));
console.log(task(4));
console.log(task(5));
