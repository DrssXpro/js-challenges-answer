//  judge('ByteDance','BD') -> true
//  judge('Bytedance','BD') -> false

// 65 A 90 Z
function judge(str1, str2) {
  const res = [];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].charCodeAt() >= 65 && str1[i].charCodeAt() <= 90) res.push(str1[i]);
  }
  return res.join("") === str2;
}

function judge(str1, str2) {
  return str1.match(/[A-Z]/g).join("") === str2;
}

console.log(judge("ByteDanceZ", "BDZ"));
console.log(judge("Bytedance", "BD"));
