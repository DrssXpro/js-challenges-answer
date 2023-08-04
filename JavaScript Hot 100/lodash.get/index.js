var object = { a: [{ b: { c: 3 } }] };
var object2 = { a: [[{ demo: "demo" }]] };

// console.log(_get(object, "a[0].b.c"));
// => 3

// console.log(_get(object, ["a", "0", "b", "c"]));
// => 3

// console.log(_get(object, "a.b.c", "default"));
// => 'default'

console.log(_get(object2, "[a][0][0].demo"));
// => demo

function _get(obj, path, defaultValue) {
  if (!Array.isArray(path)) {
    path = path.replace(/\[(.*?)\]/g, (match) => `.${match.substring(1, match.length - 1)}`).split(".");
  }

  let result = obj;
  for (const key of path) {
    if (!key) continue;
    result = result[key];
    if (result === undefined) return defaultValue;
  }
  return result;
}
