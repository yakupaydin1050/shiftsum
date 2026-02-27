// explosionEngine.js

export class ExplosionEngine {
  constructor(grid) {
    this.grid = grid;
    this.size = grid.length;
    this.visitedGlobal = new Set();
  }

  findExplosions() {
    const explosions = [];

    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (this.grid[row][col] !== null) {
          const result = this.search(row, col);
          if (result.length > 0) {
            explosions.push(...result);
          }
        }
      }
    }

    return explosions;
  }

  search(startRow, startCol) {
    const results = [];

    const dfs = (row, col, path, sum) => {
      const key = `${row}-${col}`;

      if (
        row < 0 ||
        col < 0 ||
        row >= this.size ||
        col >= this.size ||
        this.grid[row][col] === null ||
        path.has(key)
      ) {
        return;
      }

      const value = this.grid[row][col];
      const newSum = sum + value;

      if (newSum > 10) return;

      const newPath = new Set(path);
      newPath.add(key);

      if (newSum === 10 && newPath.size >= 2) {
        results.push([...newPath]);
        return;
      }

      dfs(row + 1, col, newPath, newSum);
      dfs(row - 1, col, newPath, newSum);
      dfs(row, col + 1, newPath, newSum);
      dfs(row, col - 1, newPath, newSum);
    };

    dfs(startRow, startCol, new Set(), 0);

    return results;
  }
}
