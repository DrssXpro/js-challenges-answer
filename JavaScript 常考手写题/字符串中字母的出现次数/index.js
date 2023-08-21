// ab123asvcade4566

function strCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) count++;
  }
  return count;
}

function strCount(str) {
  return str.replace(/[^a-zA-Z]/g, () => "").length;
}

console.log(strCount("ab123asvcade4566"));
