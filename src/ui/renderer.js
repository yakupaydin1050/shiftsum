export class Renderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(grid) {
    this.container.innerHTML = "";

    grid.forEach((row) => {
      row.forEach((cell) => {
        const div = document.createElement("div");
        div.classList.add("cell");

        if (cell === null) {
          div.classList.add("empty");
        } else {
          div.textContent = cell;
        }

        this.container.appendChild(div);
      });
    });
  }
}
