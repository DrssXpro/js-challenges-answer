function request(content, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(content);
    }, time);
  });
}

async function getData() {
  const res1 = await request("hi", 1500);
  const res2 = await request("hello", 500);
  const res3 = await request("你好", 1000);
  console.log(res1, res2, res3);
}

async function getData() {
  const p1 = request("hi", 1500);
  const p2 = request("hello", 500);
  const p3 = request("你好", 1000);
  const res = await Promise.all([p1, p2, p3]);
  console.log(res);
}

getData();
