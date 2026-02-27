export class InputController {
  constructor(onMove) {
    document.addEventListener("keydown", (e) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
      ) {
        onMove(e.key);
      }
    });
  }
}
