const str = "abc";

const resolve = (str) => {
  const result = [];
  const path = [];
  backTracking(str, str.length, []);

  function backTracking(data, len, used) {
    if (path.length === len) {
      result.push(Array.from(path));
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(data[i]);
      backTracking(data, len, used);
      path.pop();
      used[i] = false;
    }
  }

  return result;
};

console.log(resolve(str));
