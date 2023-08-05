Promise.myReject = function (err) {
  return new Promise((_, reject) => {
    reject(err);
  });
};

const p = new Promise((_, reject) => {
  setTimeout(() => {
    reject("err");
  }, 1000);
});

Promise.myReject(p).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log("ERR:", err);
  }
);
