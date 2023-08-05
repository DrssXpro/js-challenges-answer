Promise.myRace = function (arr) {
  if (typeof arr[Symbol.iterator] !== "function") throw new TypeError(`${arr} is not iterable`);
  return new Promise((resolve, reject) => {
    for (const p of arr) {
      Promise.resolve(p).then(resolve, reject);
    }
  });
};

//----------------test----------------------//
function sleep(timer, content, isReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isReject && reject(content);
      !isReject && resolve(content);
    }, timer);
  });
}

const request1 = sleep(1000, "请求1");
const request2 = sleep(3000, "请求2");
const request3 = sleep(2000, "请求3");
const request4 = sleep(500, "请求4");
const request5 = sleep(1000, "error", true);

Promise.myRace([request1, request2, request3, request4, request5]).then(
  (res) => {
    console.log("myRace:", res);
  },
  (err) => {
    console.log("myRace:", err);
  }
);
