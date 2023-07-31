const arr = [1, 1, 1, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7];

// Set大法好
function unRepeat1(arr) {
  return [...new Set(arr)];
}

// 对象map：键名只能是字符串或symbol
function unRepeat2(arr) {
  const map = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!map[item]) {
      map[item] = true;
      result.push(item);
    }
  }
  return result;
}

// Map结构：键名类型不受限制
function unRepeat3(arr) {
  const map = new Map();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!map.get(item)) {
      map.set(item, true);
      result.push(item);
    }
  }
  return result;
}

function unRepeat4(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) arr.splice(j--, 1);
    }
  }
  return arr;
}

function unRepeat5(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) result.push(arr[i]);
  }
  return result;
}

function unRepeat6(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) result.push(arr[i]);
  }
  return result;
}

function unRepeat7(arr) {
  return arr.filter((i, index) => arr.indexOf(i) === index);
}

console.log(unRepeat1(arr));
console.log(unRepeat2(arr));
console.log(unRepeat3(arr));
console.log(unRepeat4(arr));
console.log(unRepeat5(arr));
console.log(unRepeat6(arr));
console.log(unRepeat7(arr));
