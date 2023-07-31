function myCreate(o) {
  const obj = {};
  obj.__proto__ = o;
  return obj;
}
