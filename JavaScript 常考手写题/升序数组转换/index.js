/**
 * 给定一个升序整数数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间如下：
 * ["0->2","4->5","7","13","15->16"]
 */

const arr = [0, 1, 2, 4, 5, 7, 13, 15, 16];

function formatArr(arr) {
  const result = [];
  let start = null;
  let end = null;
  arr.push("end");
  for (let i = 0; i < arr.length - 1; i++) {
    const before = arr[i];
    if (before + 1 === arr[i + 1]) {
      start === null && (start = before);
      end = arr[i + 1];
    } else {
      result.push(start !== null ? `${start}->${end}` : before + "");
      start = null;
      end = null;
    }
  }
  return result;
}

console.log(formatArr(arr));
