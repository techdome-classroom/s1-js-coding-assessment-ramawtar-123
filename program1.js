const getTotalIsles = function (grid) {


  // write your code here

};

module.exports = getTotalIsles;function countIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  let numIslands = 0;

  function dfs(grid, i, j) {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
          return;
      }
      // Mark the land as water to avoid revisiting
      grid[i][j] = 'W';

      // Visit all adjacent land (up, down, left, right)
      dfs(grid, i - 1, j);
      dfs(grid, i + 1, j);
      dfs(grid, i, j - 1);
      dfs(grid, i, j + 1);
  }

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 'L') {
              numIslands++;
              dfs(grid, i, j);
          }
      }
  }

  return numIslands;
}
