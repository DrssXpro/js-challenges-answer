var numIslands = function (grid) {
  const rlen = grid.length;
  if (!rlen) return 0;
  const clen = grid[0].length;
  let count = 0;
  for (let r = 0; r < rlen; r++) {
    for (let c = 0; c < clen; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(grid, r, c);
      }
    }
  }

  return count;

  function dfs(grid, r, c) {
    const rlen = grid.length;
    const clen = grid[0].length;
    grid[r][c] = "-1";
    if (r - 1 >= 0 && grid[r - 1][c] === "1") dfs(grid, r - 1, c);
    if (r + 1 < rlen && grid[r + 1][c] === "1") dfs(grid, r + 1, c);
    if (c - 1 >= 0 && grid[r][c - 1] === "1") dfs(grid, r, c - 1);
    if (c + 1 < clen && grid[r][c + 1] === "1") dfs(grid, r, c + 1);
  }
};
