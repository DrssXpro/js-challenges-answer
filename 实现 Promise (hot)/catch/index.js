Promise.prototype.myCatch = function (errCb) {
  return this.then(null, errCb);
};
