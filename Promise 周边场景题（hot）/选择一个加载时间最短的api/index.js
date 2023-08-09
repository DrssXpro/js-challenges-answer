function request(content, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(content);
    }, time);
  });
}

async function computedReuqestTime(promise) {
  const start = Date.now();
  const res = await promise;
  const duration = Date.now() - start;
  return {
    result: res,
    duration,
  };
}

computedReuqestTime(request(1, 1000)).then((res) => {
  console.log(res);
});
computedReuqestTime(request(2, 500)).then((res) => {
  console.log(res);
});
computedReuqestTime(request(3, 800)).then((res) => {
  console.log(res);
});
