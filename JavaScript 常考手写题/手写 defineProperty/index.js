function observe(target) {
  if (typeof target !== "object" || target == null) return target;
}

function defineProperty(target, key, value) {
  Object.defineProperty(target, key, {
    get() {
      return target[key];
    },
    set(val) {
      effect(val, value);
      target[key] = val;
    },
  });
}

function effect(newValue, oldValue) {
  console.log("数据劫持：", newValue, oldValue);
}

Object.defineProperties();
