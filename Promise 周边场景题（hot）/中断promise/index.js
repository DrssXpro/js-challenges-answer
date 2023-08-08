const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

p.then((res) => {
  console.log(res);
  return new Promise(() => {});
})
  .then((res) => {
    console.log(res);
    return Promise.reject("err");
  })
  .catch((err) => {
    console.log(err);
  })
  .then((res) => {
    console.log(res);
  });
