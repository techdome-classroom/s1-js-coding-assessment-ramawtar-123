function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  let numIslands = 0;

  // Function to perform depth-first search (DFS)
  function dfs(grid, i, j) {
      // Check if the current position is out of bounds or water ('W')
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
          return;
      }

      // Mark the current land cell as 'W' (visited)
      grid[i][j] = 'W';

      // Visit all connected land cells (up, down, left, right)
      dfs(grid, i - 1, j); // Up
      dfs(grid, i + 1, j); // Down
      dfs(grid, i, j - 1); // Left
      dfs(grid, i, j + 1); // Right
  }

  // Traverse the entire grid
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          // If we find an unvisited land cell, it's a new island
          if (grid[i][j] === 'L') {
              numIslands++;
              dfs(grid, i, j); // Start DFS to mark the entire island
          }
      }
  }

  return numIslands;
}

// Example test cases

const grid1 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"]
];
console.log(numIslands(grid1)); // Output: 1

const grid2 = [
  ["L", "L", "W", "W", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "L", "W", "W"],
  ["W", "W", "W", "L", "L"]
];
console.log(numIslands(grid2)); // Output: 3

