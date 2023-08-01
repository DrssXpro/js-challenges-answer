const arr = [];

console.log(arr instanceof Number);
console.log(arr instanceof Object);
console.log(arr instanceof Array);
console.log(arr instanceof Map);

function myInstanceof(target, constructor) {
  let proto = target.__proto__;
  const prototype = constructor.prototype;
  while (proto) {
    if (proto === prototype) return true;
    proto = proto.__proto__;
  }
  return false;
}
console.log("---------");
console.log(myInstanceof(arr, Number));
console.log(myInstanceof(arr, Object));
console.log(myInstanceof(arr, Array));
console.log(myInstanceof(arr, Map));
