Promise.myAllSettled = function (arr) {
  if (typeof arr[Symbol.iterator] !== "function") throw new TypeError(`${arr} is not iterable`);
  const result = [];
  let finishCount = 0;
  return new Promise((resolve) => {
    for (const [index, p] of Object.entries(arr)) {
      Promise.resolve(p).then(
        (res) => {
          result[index] = {
            status: "Fulfilled",
            value: res,
          };
          if (++finishCount === arr.length) resolve(result);
        },
        (err) => {
          result[index] = {
            status: "Rejected",
            reason: err,
          };
          if (++finishCount === arr.length) resolve(result);
        }
      );
    }
  });
};

//--------------test----------------//
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

Promise.myAllSettled([request1, request2, request3, request4, request5]).then((res) => {
  console.log("myAllSettled:", res);
});
