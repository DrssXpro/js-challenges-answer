// asdvsavsa123dvfg
const str = "asdvsavsa123dvfg";
function countStr(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      if (map[str[i]]) map[str[i]]++;
      else map[str[i]] = 1;
    }
  }
  return map;
}

console.log(countStr(str));
