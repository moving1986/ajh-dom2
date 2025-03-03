import GameField from "./GameField";
import Character from "./Character";
import Score from "./Score";
import Timer from "./Timer";

export default class Game {
  constructor(element) {
    this._element = element;
    this.gameField = new GameField(this._element);
    this.character = null;
    this.score = new Score();
    this.timer = new Timer(5);
    this.interval = null;
  }

  startGame() {
    this.gameField.render();
    this.character = new Character(this.gameField.getCells());
    this.addCellListeners();
    this.startCharacterLoop();
  }

  startCharacterLoop() {
    this.interval = setInterval(() => {
      this.character.show();
      setTimeout(() => {
        if (this.character.getCurrentCellIndex() !== null) {
          this.timer.incrementMisses();
          if (this.timer.isGameOver()) {
            this.endGame();
          }
        }
        this.character.hide();
      }, 1000);
    }, 2000);
  }

  addCellListeners() {
    this.gameField.getCells().forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (index === this.character.getCurrentCellIndex()) {
          this.score.increment();
          this.character.hide();
          console.log("Счет:", this.score.getScore());
        }
      });
    });
  }

  endGame() {
    clearInterval(this.interval);
    alert(`Игра закончена! Ваш счет: ${this.score.getScore()}`);
  }
}