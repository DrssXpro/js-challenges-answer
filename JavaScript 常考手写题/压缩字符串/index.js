// abbccccaaa -> a1b2c4a3

function compressStr(str) {
  const result = [];
  str += " ";
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      } else {
        result.push({
          char: str[i],
          count,
        });
        i = j - 1;
        break;
      }
    }
  }

  return result.map((i) => `${i.char}${i.count}`).join("");
}

function compressStr(str) {
  let result = "";
  let current = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (current === str[i]) {
      count++;
      if (i === str.length - 1) result += `${current}${count}`;
    } else {
      result += `${current}${count}`;
      count = 1;
      current = str[i];
    }
  }
  return result;
}

console.log(compressStr("abbccccaaa"));
