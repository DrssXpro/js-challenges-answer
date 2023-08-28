const obj1 = { a: 1, b: { a: 1, b: 2, c: 2, d: 4 }, c: [1, 2, 3], d: {} };
const obj2 = { a: 1, b: { a: 1, b: 2, c: 2, d: 4 }, c: [1, 2, 3], d: [] };

const toString = Object.prototype.toString;

function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (toString.call(obj1[key]) !== toString.call(obj2[key])) {
        return false;
      } else if (
        toString.call(obj1[key]) === "[object Object]" ||
        (toString.call(obj1[key]) === "[object Array]" && toString.call(obj2[key]) === "[object Object]") ||
        toString.call(obj2[key]) === "[object Array]"
      ) {
        if (!isEqual(obj1[key], obj2[key])) return false;
      } else {
        if (obj1[key] !== obj2[key]) return false;
      }
    }
  }
  return true;
}

console.log(isEqual(obj1, obj2));
