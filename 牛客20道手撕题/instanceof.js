function myinstanceOf(target, constructor) {
  let proto = target.__proto__;
  const prototype = constructor.prototype;
  while (proto) {
    if (proto === prototype) return true;
    proto = proto.__proto__;
  }
  return false;
}

const arr = [];

console.log(arr instanceof Object);
console.log(arr instanceof Array);
console.log(arr instanceof Map);
console.log("-----------------");
console.log(myinstanceOf(arr, Object));
console.log(myinstanceOf(arr, Array));
console.log(myinstanceOf(arr, Map));
