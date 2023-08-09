function setMyTimeout(fn, time) {
  let start = Date.now();
  let count = 1;

  const task = () => {
    const fackTime = count * time;
    const realTime = Date.now() - start;
    const diff = realTime - fackTime;
    console.log("diff:", diff);
    fn();
    count++;
    setTimeout(() => {
      task();
    }, time - diff);
  };

  setTimeout(() => {
    task();
  }, time);
}

setMyTimeout(() => {
  console.log("test");
}, 1000);
