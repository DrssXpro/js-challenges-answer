const obj = {
  a: null,
  b: undefined,
  c: 1,
  d: {
    a: null,
    b: undefined,
    c: 10,
  },
};

function removeNullProperty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) removeNullProperty(obj[key]);
      if (obj[key] == undefined) delete obj[key];
    }
  }
}

removeNullProperty(obj);
console.log(obj);
