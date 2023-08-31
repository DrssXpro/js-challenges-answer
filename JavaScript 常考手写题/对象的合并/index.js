var obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: 4,
  h: {
    i: 5,
  },
};
var obj2 = {
  a: 111,
  b: {
    c: 222,
    f: 333,
  },
  g: 444,
  h: 666,
};
// 实现一个mergeObject(obj1, obj2)方法，得到下面的对象，并转化成JSON输出到#app
var obj = {
  a: 111,
  b: {
    c: 222,
    d: 3,
    f: 333,
  },
  e: 4,
  g: 444,
  h: 666,
};

const toString = Object.prototype.toString;

function mergeObject(obj1, obj2) {
  const newObj = {};

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (toString.call(obj1[key]) === "[object Object]" && toString.call(obj2[key]) === "[object Object]") {
        newObj[key] = mergeObject(obj1[key], obj2[key]);
      } else {
        newObj[key] = obj1[key];
      }
    }
  }
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (toString.call(obj1[key]) === "[object Object]" && toString.call(obj2[key]) === "[object Object]") {
        newObj[key] = mergeObject(obj1[key], obj2[key]);
      } else {
        newObj[key] = obj2[key];
      }
    }
  }

  return newObj;
}

console.log(mergeObject(obj1, obj2));
