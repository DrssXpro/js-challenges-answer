// 一个数组，找出每个数组元素右侧第一个比当前数大的数的下标，时间复杂度O(N)
const num = [1, 3, 4, 2, 5, 6, 7, 2, 2, 2, 2];
function findBigIdxs(arr) {
  const res = new Array(num.length).fill(-1);
  const stk = [0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[stk[stk.length - 1]]) stk.push(i);
    else {
      let val = stk.pop();
      res[val] = i;

      stk.push(i);
    }
  }
  console.log(res);
}

findBigIdxs(num);
