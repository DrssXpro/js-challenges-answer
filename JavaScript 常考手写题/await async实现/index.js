function request(content, time) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(content);
      }, time);
    });
}

const p1 = request("hello", 1500);
const p2 = request("hi", 1000);

function* genFn() {
  const res1 = yield p1();
  const res2 = yield p2();
  return `${res1} + ${res2}`;
}

function co(iterator) {
  return new Promise((resolve, reject) => {
    function walk(data) {
      const { done, value } = iterator.next(data);
      Promise.resolve(value).then((res) => {
        done ? resolve(res) : walk(res);
      }, reject);
    }

    walk();
  });
}


// async await === generator + co
async function getData() {
  const res1 = await p1();
  const res2 = await p2();
  return `${res1} + ${res2}`;
}

co(genFn()).then((res) => {
  console.log(res);
});

getData().then((res) => {
  console.log(res);
});
