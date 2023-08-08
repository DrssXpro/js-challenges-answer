// function runTimer(fn, time) {
//   let timer = setTimeout(() => {
//     fn();
//     clearTimeout(timer);
//     runTimer(fn, time);
//   }, time);
// }

// runTimer(() => {
//   console.log(1);
// }, 1000);

class Timer {
  constructor() {
    this.task = new Map();
  }

  addTimer(name, fn, time) {
    const record = {
      callback: fn,
      time,
      timer: null,
    };
    this.task.set(name, record);
    this.runTimer(name);
  }

  runTimer(name) {
    if (this.task.has(name)) {
      const record = this.task.get(name);
      run(record);
    }

    function run(record) {
      record.timer = setTimeout(() => {
        record.callback();
        clearTimeout(record.timer);
        run(record);
      }, record.time);
    }
  }

  clearTimer(name) {
    if (this.task.has(name)) {
      const record = this.task.get(name);
      record.timer && clearTimeout(record.timer);
      this.task.delete(name);
    }
  }
}

const timer = new Timer();
timer.clearTimer("aaa");
timer.addTimer(
  "aaa",
  () => {
    console.log(123);
  },
  1000
);
