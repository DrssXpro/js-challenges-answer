// 一个数组，找出每个数组元素右侧第一个比当前数大的数的下标，时间复杂度O(N)
const num = [1, 3, 4, 2, 5, 6, 7];

function findBigIndex(num) {
  const result = new Array(num.length).fill(-1);
  const stack = [0];
  for (let i = 1; i < num.length; i++) {
    let before = num[stack[stack.length - 1]];
    if (num[i] <= before) stack.push(i);
    else {
      while (stack.length && num[i] > before) {
        const val = stack.pop();
        result[val] = i;
        before = num[stack[stack.length - 1]];
      }
      stack.push(i);
    }
  }
  console.log(result);
  return result;
}

findBigIndex(num);
