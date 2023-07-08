import { calcTileType } from "./calcTileType";

export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
    this.container = container;
  }

  start() {
    let count = 0;
    let intervalId = setInterval(() => {
        this.addCharacter();
        count++;
        if (count > 10) clearInterval(intervalId);
    }, 2000);
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error("GamePlay not bind to DOM");
    }
  }

  drawUi(theme) {
    this.checkBinding();

    const board = `
    <div class="board-container">
        <div data-id="board" class="board"></div>
    </div>
    `;
    this.container.innerHTML = board;
    this.boardEl = this.container.querySelector("[data-id=board]");

    this.boardEl.classList.add(theme);
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add(
        "cell",
        "map-tile",
        `map-tile-${calcTileType(i, this.boardSize)}`
      );
      this.boardEl.appendChild(cellEl);
    }

    this.cells = Array.from(this.boardEl.children);
  }

  addCharacter() {
    const oldCharEl = document.querySelector('.character');

    if (oldCharEl) {
        oldCharEl.remove();
    }

    const randomNumber = Math.floor(Math.random() * this.cells.length);
    const cellEl = this.boardEl.children[randomNumber];    
    const charEl = document.createElement('div');

    charEl.classList.add('character');
    cellEl.append(charEl);
  }
}
