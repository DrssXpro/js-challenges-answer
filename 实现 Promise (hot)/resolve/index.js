Promise.myResolve = function (value) {
  // "[object Promise]"
  if (value && Object.prototype.toString.call(value).slice(8, -1) === "Promise") return value;

  return new Promise((resolve) => {
    resolve(value);
  });
};
