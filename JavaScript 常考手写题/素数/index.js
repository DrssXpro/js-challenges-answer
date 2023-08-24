function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(Math.sqrt(4));
