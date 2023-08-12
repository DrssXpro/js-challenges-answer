function sum(num, total = num) {
  return num ? sum(--num, total + num) : total;
}

console.log(sum(100));
