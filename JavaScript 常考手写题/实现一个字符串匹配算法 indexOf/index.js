String.prototype.myIndexOf = function (searchString, start = 0) {
  const str1 = this,
    str2 = searchString;
  for (let i = start; i < str1.length; i++) {
    if (str1[i] === str2[0]) {
      let newStart = i + 1;
      let flag = true;
      for (let j = 1; j < str2.length; j++) {
        if (str1[newStart++] !== str2[j]) {
          flag = false;
          break;
        }
      }
      if (flag) return i;
    }
  }

  return -1;
};

console.log("abc".myIndexOf("degf"));
