Promise.myFinally = function (cb) {
  return this.then(
    (res) => {
      cb();
      return res;
    },
    (err) => {
      cb();
      throw err;
    }
  );
};
