const arr = [
  { id: 4, name: "部门4", pid: 3 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 1, name: "部门1", pid: 0 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 6, name: "部门6", pid: 0 },
];

const arrayToTree1 = (data, pid, result) => {
  data.forEach((item) => {
    if (item.pid === pid) result.push(item);
  });

  result.forEach((item) => {
    item.children = [];
    arrayToTree1(data, item.id, item.children);
  });

  return result;
};

const arrayToTree2 = (data) => {
  const map = {};
  const result = [];
  data.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  data.forEach((item) => {
    const treeItem = map[item.id];
    if (treeItem.pid !== 0) map[item.pid].children.push(treeItem);
    else result.push(treeItem);
  });

  return result;
};

const arrayToTree3 = (data) => {
  const map = {};
  const result = [];
  data.sort((a, b) => a.pid - b.pid);
  data.forEach((item) => {
    if (!map[item.id]) map[item.id] = { ...item, children: [] };
    if (item.pid !== 0) map[item.pid].children.push(map[item.id]);
    else result.push(map[item.id]);
  });

  return result;
};

const arrayToTree4 = (data) => {
  const map = {};
  const result = [];
  data.forEach((item) => {
    if (!map[item.id]) map[item.id] = { children: [] };
    map[item.id] = { ...item, children: map[item.id].children };
    if (item.pid !== 0) {
      if (!map[item.pid]) map[item.pid] = { children: [] };
      map[item.pid].children.push(map[item.id]);
    } else {
      result.push(map[item.id]);
    }
  });

  return result;
};

// console.log(arrayToTree1(arr, 0, []));
// console.log(arrayToTree2(arr));
// console.log(arrayToTree3(arr));
console.log(arrayToTree4(arr));
