arr = [
  {
    name: "可乐",
    categories: ["热门", "饮料"],
  },
  {
    name: "苹果",
    categories: ["热门", "食物"],
  },
  {
    name: "洗衣液",
    categories: ["生活用品"],
  },
];

// [
//     { name: "热门", categories: ["可乐", "苹果"] },
//     { name: "饮料", categories: ["可乐"] },
//     { name: "食物", categories: ["苹果"] },
//     { name: "生活用品", categories: ["洗衣液"] },
// ];

function useMap(arr) {
  const map = new Map();
  const result = [];
  arr.forEach((item) => {
    item.categories.forEach((category) => {
      if (!map.has(category)) map.set(category, [item.name]);
      else map.get(category).push(item.name);
    });
  });

  map.forEach((value, key) => {
    result.push({
      name: key,
      categories: value,
    });
  });
  return result;
}

console.log(useMap(arr));
