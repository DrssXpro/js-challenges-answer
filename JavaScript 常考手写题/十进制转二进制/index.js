function ten2two(num) {
  let result = "";
  while (num) {
    result += num % 2;
    num = Math.floor(num / 2);
  }
  return result.split("").reverse().join("");
}

console.log(ten2two(100));
console.log((100).toString(2));
