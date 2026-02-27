import { GridManager } from "./core/gridManager.js";
import { Renderer } from "./ui/renderer.js";
import { InputController } from "./ui/inputController.js";

const gridManager = new GridManager(5);
const renderer = new Renderer("game");

renderer.render(gridManager.grid);

new InputController((direction) => {
  const moved = gridManager.moveEmpty(direction);

  if (moved) {
    console.table(gridManager.grid); 
    renderer.render(gridManager.grid);
  }
});
