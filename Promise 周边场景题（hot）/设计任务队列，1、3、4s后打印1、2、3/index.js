function Queue() {
  this.tasks = [];
}
Queue.prototype.task = function (time, fn) {
  const task = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(fn());
      }, time);
    });
  this.tasks.push(task);

  return this;
};

Queue.prototype.start = async function () {
  for (let i = 0; i < this.tasks.length; i++) {
    await this.tasks[i]();
  }
};

new Queue()
  .task(1000, () => {
    console.log(1);
  })
  .task(2000, () => {
    console.log(2);
  })
  .task(1000, () => {
    console.log(3);
  })
  .start();
