// 判断A、B数组的包含关系（值和数量），A属于B返回1，B属于A返回2，两者相等返回0，其他返回-1
const arrA = [1, 3];
const arrB = [1, 3];

// function judgeInclude(arrA, arrB) {
//   arrA.sort((a, b) => a - b);
//   arrB.sort((a, b) => a - b);

//   const strA = arrA.join("");
//   const strB = arrB.join("");
//   // 123  13
//   if (strA === strB) return 0;
//   if (strA.includes(strB)) return 2;
//   if (strB.includes(strA)) return 1;
//   return -1;
// }

function judgeInclude(arrA, arrB) {
  const mapA = {};
  const mapB = {};
  arrA.forEach((i) => (mapA[i] = true));
  arrB.forEach((i) => (mapB[i] = true));

  const keysA = Object.keys(mapA).length;
  const keysB = Object.keys(mapB).length;

  if (keysA > keysB) {
    if (judegeMapInclude(mapB, mapA)) return 2;
  } else if (keysA < keysB) {
    if (judegeMapInclude(mapA, mapB)) return 1;
  } else {
    if (judegeMapInclude(mapA, mapB)) return 0;
  }

  return -1;

  function judegeMapInclude(map1, map2) {
    let count = 0;
    for (const key in map2) {
      if (map2.hasOwnProperty(key)) {
        if (map1[key]) count++;
      }
    }
    return count === Object.keys(map1).length;
  }
}

console.log(judgeInclude(arrA, arrB));
