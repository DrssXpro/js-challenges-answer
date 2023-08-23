function createArr() {
  const arr = [];
  for (let i = 0; i < 10; i++) arr[i] = 1;
  return arr;
}

function createArr() {
  const arr = [];
  for (let i = 0; i < 10; i++) arr.splice(0, 0, 1);
  return arr;
}

function createArr() {
  let arr = [];
  for (let i = 0; i < 10; i++) arr = arr.concat([1]);
  return arr;
}

function createArr() {
  return new Array(10).fill(1);
}

function createArr() {
  const arr1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return Array.of(...arr1);
}

function createArr() {
  return Array.from("1111111111", (i) => parseInt(i));
}

function createArr() {
  return "1"
    .repeat(10)
    .split("")
    .map((i) => parseInt(i));
}

console.log(createArr());
