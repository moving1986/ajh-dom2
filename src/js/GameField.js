export default class GameField {
    constructor(element) {
      this._element = element;
      this.cells = [];
    }
  
    render() {
      const gameField = document.createElement("div");
      gameField.classList.add("game-field");
      this._element.appendChild(gameField);
  
      for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gameField.appendChild(cell);
        this.cells.push(cell);
      }
    }
  
    getCells() {
      return this.cells;
    }
  }