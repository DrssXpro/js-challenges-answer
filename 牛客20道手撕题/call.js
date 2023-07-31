Function.prototype.myCall = function (context, ...args) {
  const ctx = typeof Object(context) === "object" ? Object(context) : window;
  const fn = this;
  const fnKey = Symbol();
  ctx[fnKey] = fn;
  const result = ctx[fnKey](...args);
  delete ctx[fnKey];
  return result;
};
