function request(content, time) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(content);
      }, time);
    });
}

const tasks = [request("1", 1000), request("2", 1000), request("3", 2000), request("4", 500), request("5", 1500)];

// 方案一
// class Scheduler {
//   constructor(options) {
//     const { tasks, limit } = options;
//     this.tasks = tasks;
//     this.maxCount = limit;
//     this.responses = [];
//     this.total = this.tasks.length;
//   }

//   doRequest() {
//     if (!this.tasks.length) return;
//     const minCount = Math.min(this.tasks.length, this.maxCount);
//     for (let i = 0; i < minCount; i++) {
//       this.maxCount--;
//       const task = this.tasks.shift();
//       const currentIndex = this.total - this.tasks.length - 1;
//       this.run(task, currentIndex);
//     }
//   }

//   run(task, currentIndex) {
//     task()
//       .then(
//         (res) => {
//           console.log("result:", res);
//           this.responses[currentIndex] = {
//             status: "Fulfilled",
//             result: res,
//           };
//         },
//         (err) => {
//           console.log("error:", err);
//           this.responses[currentIndex] = {
//             status: "Rejected",
//             reason: err,
//           };
//         }
//       )
//       .finally(() => {
//         this.maxCount++;
//         this.doRequest();
//         if (this.responses.length === this.total) {
//           console.log("finish:", this.responses);
//         }
//       });
//   }
// }

// const scheduler = new Scheduler({
//   limit: 2,
//   tasks,
// });

// scheduler.doRequest();

// 方案二
// async function requestPool({ limit, tasks }) {
//   const promises = [];
//   const current = [];

//   for (const task of tasks) {
//     const p = task();
//     promises.push(p);
//     current.push(p);
//     p.then((res) => {
//       console.log("result:", res);
//       current.splice(current.indexOf(p), 1);
//     });

//     if (current.length === limit) {
//       await Promise.race(current);
//     }
//   }

//   return Promise.allSettled(promises);
// }

// requestPool({ limit: 2, tasks }).then((res) => {
//   console.log(res);
// });

// 延迟函数

//方案三
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.current = 0;
    this.tasks = [];
  }

  add(fn) {
    this.tasks.push(fn);
    this.run();
  }

  run() {
    if (!this.tasks.length) return;
    if (this.current < this.limit) {
      this.current++;
      const task = this.tasks.shift();
      task().finally(() => {
        this.current--;
        this.run();
      });
    }
  }
}
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

// 同时进行的任务最多2个
const scheduler = new Scheduler(2);

// 添加异步任务
// time: 任务执行的时间
// val: 参数
const addTask = (time, val) => {
  scheduler.add(() => {
    return sleep(time).then(() => console.log(val));
  });
};

addTask(1000, "1");
addTask(1000, "2");
addTask(2000, "3");
addTask(500, "4");
addTask(1500, "5");
