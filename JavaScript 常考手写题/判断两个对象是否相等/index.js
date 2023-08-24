const obj1 = { a: 1, b: { a: 1, b: 2, c: 2 }, c: [1, 2, 3] };
const obj2 = { a: 1, b: { a: 1, b: 2, c: 2, d: 3 }, c: [1, 2, 3] };

function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (typeof obj1[key] === "object" && obj1[key] !== null && typeof obj2[key] === "object" && obj2[key] !== null) {
        return isEqual(obj1[key], obj2[key]);
      } else {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(isEqual(obj1, obj2));
