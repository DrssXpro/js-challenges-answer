function randomNum(len, min, max) {
  if (len > max - min + 1) return [];
  const s = new Set();
  while (s.size !== len) {
    // Math.random: 0 <= x < 1
    const num = Math.round(Math.random() * (max - min)) + min;
    s.add(num);
  }
  return Array.from(s);
}

console.log(randomNum(10, 1, 5));
