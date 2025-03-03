// TODO: write code here
/**
 * @jest-environment jsdom
 */
import Game from "./Game";

document.addEventListener("DOMContentLoaded", () => {
  const gameElement = document.querySelector('.game-field');
  const game = new Game(gameElement);
  game.startGame();
});
