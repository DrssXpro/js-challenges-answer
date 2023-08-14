function math() {
  let value = 0;
  const computed = {
    add: function (...args) {
      value = args.reduce((pre, current) => pre + current, value);
      return this;
    },
    minus: function (...args) {
      value = args.reduce((pre, current) => pre - current, value);
      return this;
    },
    times: function (...args) {
      value = args.reduce((pre, current) => pre * current, value);
      return this;
    },
    getValue: function () {
      return value;
    },
  };
  return computed;
}

console.log(math().add(1, 1).minus(2, 2).times(2, 2).getValue());
