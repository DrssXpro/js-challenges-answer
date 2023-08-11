// 写一个 mySetInterVal(fn, a, b)，每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal

function mySetInterVal(fn, a, b) {
  let isClear = false;
  function loopTime() {
    setTimeout(() => {
      if (!isClear) {
        fn();
        loopTime();
      }
    }, b);
  }

  setTimeout(() => {
    fn();
    loopTime();
  }, a);

  return function stop() {
    isClear = true;
    console.log("stop timer");
  };
}

const stop = mySetInterVal(
  () => {
    console.log(Math.floor(Date.now() / 1000));
  },
  1000,
  2000
);

setTimeout(() => {
  stop();
}, 6000);
