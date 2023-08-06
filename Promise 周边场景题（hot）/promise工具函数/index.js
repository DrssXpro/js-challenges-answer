// 封装一个工具函数输入一个promiseA返回一个promiseB如果超过1s没返回则抛出异常如果正常则输出正确的值。
function PromiseUtil(p, time) {
  return new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
      reject(new Error("timeout"));
    }, time);

    p.then(
      (res) => {
        clearTimeout(timer);
        resolve(res);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
}

const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("data");
  }, 500);
});

PromiseUtil(p, 1000)
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
