Promise.retry = function (task, limit, time, cache) {
  return new Promise((resolve, reject) => {
    task().then(resolve, (err) => {
      if (!limit) {
        if (cache) resolve(cache);
        else reject(err);
      } else {
        setTimeout(() => {
          console.log(`还需重传${limit}次`);
          Promise.retry(task, limit - 1, time, cache).then(resolve, reject);
        }, time);
      }
    });
  });
};

function request(content, time) {
  return () =>
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(content);
      }, time);
    });
}

const task = request("error", 1500);

Promise.retry(task, 5, 1000)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
