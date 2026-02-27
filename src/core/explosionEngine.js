// explosionEngine.js

export class ExplosionEngine {
  constructor(grid) {
    this.grid = grid;
    this.size = grid.length;
  }

  findExplodingCells() {
    const explodingCells = new Set();

    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (this.grid[row][col] !== null) {
          this.search(row, col, explodingCells);
        }
      }
    }

    return explodingCells;
  }

  search(startRow, startCol, explodingCells) {
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
        // 🎯 sadece hücreleri ekliyoruz
        newPath.forEach(cell => explodingCells.add(cell));
        return;
      }

      dfs(row + 1, col, newPath, newSum);
      dfs(row - 1, col, newPath, newSum);
      dfs(row, col + 1, newPath, newSum);
      dfs(row, col - 1, newPath, newSum);
    };

    dfs(startRow, startCol, new Set(), 0);
  }
}
