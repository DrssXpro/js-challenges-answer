function printNum(num) {
  const result = [];
  for (let i = 1; i <= num; i++) {
    const s = i + "";
    if (s.length > 1 && judge(s)) result.push(i);
  }

  return result;
  // 121
  function judge(str) {
    return str === str.split("").reverse().join("");
  }

  function judge2(str) {
    let len = str.length,
      i = 0,
      j = len - 1;
    while (i < j) {
      if (str[i++] !== str[j--]) return false;
    }
    return true;
  }
}

console.log(printNum(100));
