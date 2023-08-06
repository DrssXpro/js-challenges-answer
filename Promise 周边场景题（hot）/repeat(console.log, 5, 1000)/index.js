/**
 *
 * @param {要执行的函数} fn
 * @param {执行的次数} times
 * @param {每次执行的时间间隔} time
 */
// function repeat(fn, times, time) {
//   const executor = (...args) => {
//     setTimeout(() => {
//       fn(...args);
//       --times && executor(...args);
//     }, time);
//   };

//   return executor;
// }

function repeat(fn, times, time) {
  const executor = (...args) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        fn(...args);
        times--;
        resolve(times === 0 ? "finish" : executor(...args));
      }, time);
    });
  };
  return executor;
}

const fn = repeat(
  () => {
    console.log(123);
  },
  5,
  1000
);

fn();
