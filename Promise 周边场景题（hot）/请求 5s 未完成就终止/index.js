const timeout = new Promise((_, reject) => {
  setTimeout(() => {
    reject("timeout");
  }, 1000);
});

const request = new Promise((resolve) => {
  setTimeout(() => {
    resolve("data");
  }, 2000);
});

Promise.race([request, timeout]).then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err:", err);
  }
);
