// gridManager.js

export class GridManager {
  constructor(size = 5) {
    this.size = size;
    this.grid = [];
    this.empty = { row: 0, col: 0 };
    this.initialize();
  }

  initialize() {
    this.grid = [];

    for (let row = 0; row < this.size; row++) {
      const currentRow = [];
      for (let col = 0; col < this.size; col++) {
        currentRow.push(this.randomNumber());
      }
      this.grid.push(currentRow);
    }

    // Make one cell empty
    const randomRow = Math.floor(Math.random() * this.size);
    const randomCol = Math.floor(Math.random() * this.size);

    this.grid[randomRow][randomCol] = null;
    this.empty = { row: randomRow, col: randomCol };
  }

  randomNumber() {
    return Math.floor(Math.random() * 9) + 1; // 1–9
  }

  moveEmpty(direction) {
    const { row, col } = this.empty;

    let newRow = row;
    let newCol = col;

    if (direction === "ArrowUp") newRow++;
    if (direction === "ArrowDown") newRow--;
    if (direction === "ArrowLeft") newCol++;
    if (direction === "ArrowRight") newCol--;

    if (
      newRow < 0 ||
      newRow >= this.size ||
      newCol < 0 ||
      newCol >= this.size
    ) {
      return false;
    }

    this.swap(row, col, newRow, newCol);
    this.empty = { row: newRow, col: newCol };
    return true;
  }

  swap(r1, c1, r2, c2) {
    const temp = this.grid[r1][c1];
    this.grid[r1][c1] = this.grid[r2][c2];
    this.grid[r2][c2] = temp;
  }
}
