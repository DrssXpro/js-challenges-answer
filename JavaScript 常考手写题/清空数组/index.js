let arr = [1, 2, 3];

// 1
arr = [];

// 2
arr.length = 0;

// 3
arr.splice(0, arr.length);

// 4
while (arr.length) {
  arr.pop();
}

// 5
while (arr.length) {
  arr.shift();
}
