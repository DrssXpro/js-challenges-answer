function request(content, time) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(content);
      }, time);
    });
}

const p1 = request("hello", 2000);
const p2 = request("hi", 1000);
const p3 = request("nihao", 500);

function requestUtils() {
  let isPending = false;

  return function myRequest(task) {
    return new Promise(async (resolve, reject) => {
      if (isPending) return reject("before is not finish");
      isPending = true;
      try {
        const res = await task();
        resolve(res);
        isPending = false;
      } catch (error) {
        reject(error);
        isPending = false;
      }
    });
  };
}

const myRequest = requestUtils();

myRequest(p1).then((res) => {
  console.log("result:", res);
});
myRequest(p2).then(
  () => {},
  (err) => {
    console.log("error:", err);
  }
);
myRequest(p3).then(
  () => {},
  (err) => {
    console.log("error:", err);
  }
);

setTimeout(() => {
  myRequest(p3).then((res) => {
    console.log("result:", res);
  });
}, 3000);
