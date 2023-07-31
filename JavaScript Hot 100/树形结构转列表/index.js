const data = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
      {
        id: 3,
        text: "节点1_2",
        parentId: 1,
      },
    ],
  },
  {
    id: 4,
    text: "节点2",
    parentId: 0,
    children: [],
  },
];

const treeToArray1 = (tree) => {
  const result = [];
  dfs(tree);
  return result;

  function dfs(tree) {
    tree.forEach((node) => {
      result.push(node);
      if (node.children && node.children.length) dfs(node.children);
      delete node.children;
    });
  }
};

// const treeToArray2 = data.reduce(function deepTree(pre, current) {
//   pre.push(current);
//   if (current.children && current.children.length) current.children.forEach((node) => deepTree(pre, node));
//   delete current.children;
//   return pre;
// }, []);

const treeToArray3 = (tree) => {
  const result = [];
  tree.forEach((item) => {
    const queue = [item];
    while (queue.length) {
      const node = queue.shift();
      if (node.children && node.children.length) queue.push(...node.children);
      result.push(node);
      delete node.children;
    }
  });

  return result;
};

// console.log(treeToArray1(data));
// console.log(treeToArray2);
console.log(treeToArray3(data));
