function sleep(res, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, time);
  });
}

sleep("hello", 2000).then((res) => {
  console.log(res);
});
