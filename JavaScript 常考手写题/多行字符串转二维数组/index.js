const str = ` 1 21    3
4 5  6
7   8 9 `; /* 多行字符串要用反引号 */
// var arr = str.split("\n"); /* 根据换行符分割 */

function tranformArr(str) {
  const newArr = [];
  const arr = str.split("\n");
  // console.log(arr);
  arr.forEach((line) => {
    newArr.push(
      line
        .split(" ")
        .filter((i) => i !== "")
        .map((i) => Number(i))
    );
  });

  return newArr;
}

console.log(tranformArr(str));
