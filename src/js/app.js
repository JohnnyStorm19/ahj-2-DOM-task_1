import GamePlay from "./GamePlay";

document.addEventListener("DOMContentLoaded", () => {
  const gamePlay = new GamePlay();
  gamePlay.bindToDOM(document.querySelector(".game-container"));
  gamePlay.drawUi("arctic");
  gamePlay.start();
});
