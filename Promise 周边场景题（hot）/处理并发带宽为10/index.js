function request(content, time) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(content);
      }, time);
    });
}

class TaskRunner {
  constructor(tasks, count) {
    this.tasks = tasks;
    this.count = count;
  }

  taskHandler() {
    const minCount = Math.min(this.tasks.length, this.count);
    for (let i = 0; i < minCount; i++) {
      const task = this.tasks.shift();
      this.count--;
      this.run(task);
    }
  }

  run(task) {
    task()
      .then(
        (res) => {
          console.log("checkResult:", res);
        },
        (err) => {
          console.log("checkError:", err);
        }
      )
      .finally(() => {
        this.count++;
        this.taskHandler();
      });
  }
}

const runner = new TaskRunner(
  [request(1, 3000), request(2, 2000), request(3, 800), request(4, 1200), request(5, 1500)],
  2
);
runner.taskHandler();
