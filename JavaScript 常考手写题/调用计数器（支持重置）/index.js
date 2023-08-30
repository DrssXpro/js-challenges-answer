class Count {
  constructor() {
    this.value = 0;
  }
  add() {
    this.value++;
    return this.value;
  }
  reset() {
    this.value = 0;
    return this.value;
  }
}

// function Count() {
//   this.value = 0;
// }

// Count.prototype.add = function () {
//   this.value++;
//   return this.value;
// };

// Count.prototype.reset = function () {
//   this.value = 0;
//   return this.value;
// };

const instance = new Count();
console.log(instance.add()); //1
console.log(instance.add()); //2
console.log(instance.add()); //3
console.log(instance.reset()); //0
console.log(instance.add()); //1
