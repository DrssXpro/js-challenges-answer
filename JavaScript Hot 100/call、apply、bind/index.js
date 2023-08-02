Function.prototype.myCall = function (context, ...args) {
  context = typeof context !== "object" ? Object(context) : context !== null ? context : window;
  const fnKey = Symbol();
  context[fnKey] = this;
  const res = context[fnKey](...args);
  delete context[fnKey];
  return res;
};

Function.prototype.myApply = function (context, args) {
  context = typeof context !== "object" ? Object(context) : context !== null ? context : window;
  const fnKey = Symbol();
  context[fnKey] = this;
  const res = context[fnKey](...args);
  delete context[fnKey];
  return res;
};

Function.prototype.myBind = function (context, ...args1) {
  context = typeof context !== "object" ? Object(context) : context !== null ? context : window;
  const self = this;
  function tempFn() {}
  function newFn(...args2) {
    return self.apply(this instanceof self ? this : context, [...args1, ...args2]);
  }
  tempFn.prototype = self.prototype;
  newFn.prototype = new tempFn();

  return newFn;
};
