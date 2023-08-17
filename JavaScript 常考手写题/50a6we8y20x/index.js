// 输入 50a6we8y20x 输出 50 个 a，6 个 we，8 个 y，20 个 x

function spreadStr(str) {
  let result = "";
  let numCount = [];
  let sliceStr = "";
  str += "0";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      if (sliceStr.length) {
        result += sliceStr.repeat(Number(numCount.join("")));
        numCount = [];
        sliceStr = "";
      }
      numCount.push(str[i]);
    } else {
      sliceStr += str[i];
      // if (i === str.length - 1) result += sliceStr.repeat(Number(numCount.join("")));
    }
  }

  return result;
}

function spreadStr(str) {
  return str.replace(/(\d+)([a-z]+)/g, (_, a, b) => {
    console.log(_, a, b);
    return b.repeat(parseInt(a));
  });
}

console.log(spreadStr("10g7a5b9c"));
