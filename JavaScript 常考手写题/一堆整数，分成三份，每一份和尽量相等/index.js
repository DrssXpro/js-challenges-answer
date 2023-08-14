var arr = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90];

function arrToEqual(arr, count) {
  const result = [];
  let minIndex = 0;
  for (let i = 0; i < count; i++)
    result.push({
      sum: 0,
      arr: [],
    });

  arr.sort((a, b) => b - a);

  arr.forEach((item) => {
    result[minIndex].arr.push(item);
    result[minIndex].sum += item;
    findMinIndex();
  });

  function findMinIndex() {
    let min = Infinity;
    result.forEach((item, index) => {
      if (item.sum < min) {
        min = item.sum;
        minIndex = index;
      }
    });
  }

  return result;
}

console.log(arrToEqual(arr, 5));
