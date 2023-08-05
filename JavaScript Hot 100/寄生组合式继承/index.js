function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHi = function () {
  console.log(`${this.name} say hi`);
};

function Child(name, age) {
  this.age = age;
  Parent.call(this, name);
}

const tempFn = function () {};
tempFn.prototype = Parent.prototype;
Child.prototype = new tempFn();
Child.prototype.constructor = Child;
Child.prototype.superClass = Parent;

Child.prototype.sayMe = function () {
  console.log("age", this.age);
};

const c = new Child("abc", 20);
