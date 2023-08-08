function setTime(fn, time, ...args) {
  let timer = setInterval(() => {
    fn.apply(this, args);
    clearInterval(timer);
  }, time);
}

setTime(() => {
  console.log("test");
}, 1000);
