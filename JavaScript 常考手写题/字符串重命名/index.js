/**
 * 算法题：字符串重命名。
 * 举例 ，输入["ab","c","ab","c","a","d"]，
 * 输出["ab1","c1","ab2","c2","a","d"]，
 * 输出不可以改变原有顺序，不重复的字符串不动。
 */

const arr = ["ab", "c", "ab", "c", "a", "d"];

function resetStringArr(arr) {
  const map = {};
  arr.forEach((i) => {
    if (map[i]) {
      map[i].count++;
    } else {
      map[i] = {
        count: 1,
        current: 1,
      };
    }
  });

  return arr.map((i) => {
    if (map[i].count !== 1) {
      return i + map[i].current++;
    } else {
      return i;
    }
  });
}

console.log(resetStringArr(arr));
