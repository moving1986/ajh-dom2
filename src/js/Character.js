import imageGoblin from "../img/goblin.png";

export default class Character {
  constructor(cells) {
    this.cells = cells;
    this.currentCellIndex = null;
    this.character = null;
  }

  createCharacter() {
    this.character = document.createElement("img");
    this.character.src = imageGoblin;
    this.character.alt = "Goblin";
  }

  show() {
    this.createCharacter();
    this.currentCellIndex = Math.floor(Math.random() * 16);
    this.cells[this.currentCellIndex].appendChild(this.character);
  }

  hide() {
    if (this.character) {
      this.character.remove();
    }
  }

  getCurrentCellIndex() {
    return this.currentCellIndex;
  }
}