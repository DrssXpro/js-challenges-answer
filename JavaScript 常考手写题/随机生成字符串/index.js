function randomStr(len) {
  //32 - 126
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push(randomNum(32, 126));
  }
  return String.fromCharCode(...res);
  function randomNum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
}

console.log(randomStr(10));
