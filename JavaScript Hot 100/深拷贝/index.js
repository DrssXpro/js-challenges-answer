const getType = (obj) => Object.prototype.toString.call(obj);

const isObject = (obj) => (typeof obj === "object" && obj !== null) || typeof obj === "function";

const canTraverse = {
  "[object Object]": true,
  "[object Array]": true,
  "[object Map]": true,
  "[object Set]": true,
  "[object Arguments]": true,
};

function deepClone(origin, map = new WeakMap()) {
  if (!isObject(origin)) return origin;
  const type = getType(origin);
  const constructor = origin.constructor;
  if (!canTraverse[type]) return new constructor(origin);

  const target = new constructor();
  if (map.has(origin)) return map.get(origin);

  map.set(origin, target);

  if (type === "[object Map]") {
    origin.forEach((value, key) => {
      target.set(deepClone(key, map), deepClone(value, map));
    });
  }

  if (type === "[object Set]") {
    origin.forEach((value) => {
      target.add(deepClone(value, map));
    });
  }

  for (const key in origin) {
    if (origin.hasOwnProperty(key)) {
      target[key] = deepClone(origin[key], map);
    }
  }

  return target;
}

function test() {
  const o1 = { name: "g", age: 18, o: { name: "o" }, a: [1, 2], r: new RegExp(), d: new Date() };
  o1.self = o1;
  const o2 = deepClone(o1);
  o1.name = "z";
  o1.age = 1;
  console.log(o1.name !== o2.name);
  console.log(o1.age !== o2.age);
  console.log(o1.o !== o2.o);
  console.log(o1.a !== o2.a);
  console.log(o1.r !== o2.r);
  console.log(o1.d !== o2.d);
  console.log(o1.self.self.self.self.self.self.self.self.self === o1.self);
  console.log(o1.self !== o2.self);
  const judge =
    o1.name !== o2.name &&
    o1.age !== o2.age &&
    o1.o !== o2.o &&
    o1.a !== o2.a &&
    o1.r !== o2.r &&
    o1.d !== o2.d &&
    o1.self.self.self.self.self.self.self.self.self === o1.self &&
    o1.self !== o2.self;
  return judge;
}

test();
