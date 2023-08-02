const data = {
  name: "小明",
  age: 15,
  school: "第三中学",
  classroom: "教室2",
};

String.prototype.renderStr = function (data) {
  return this.replace(/\{\{[.\s\S]*?\}\}/g, (str) => {
    const value = str.substring(2, str.length - 2).trim();
    if (value === "") return "";
    else if (value.startsWith("#")) {
      return eval(value.substr(1, value.length - 1));
    } else {
      return data[value];
    }
  });
};

console.log(
  `{{name}}说了句{{#
  if (data.age >= 18) {
      "我已经成年了！"
  } else {
      "我还没有成年！"
  }
}}`.renderStr(data)
);
