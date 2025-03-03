(()=>{"use strict";var e={p:""};class t{constructor(e){this._element=e,this.cells=[]}render(){const e=document.createElement("div");e.classList.add("game-field"),this._element.appendChild(e);for(let t=0;t<16;t++){const t=document.createElement("div");t.classList.add("cell"),e.appendChild(t),this.cells.push(t)}}getCells(){return this.cells}}const s=e.p+"2dbd01ce16c0fa83cb67.png";class r{constructor(e){this.cells=e,this.currentCellIndex=null,this.character=null}createCharacter(){this.character=document.createElement("img"),this.character.src=s,this.character.alt="Goblin"}show(){this.createCharacter(),this.currentCellIndex=Math.floor(16*Math.random()),this.cells[this.currentCellIndex].appendChild(this.character)}hide(){this.character&&this.character.remove()}getCurrentCellIndex(){return this.currentCellIndex}}class i{constructor(){this.score=0}increment(){this.score+=1}getScore(){return this.score}}class c{constructor(e){this.misses=0,this.maxMisses=e}incrementMisses(){this.misses+=1}isGameOver(){return this.misses>=this.maxMisses}getMisses(){return this.misses}}class a{constructor(e){this._element=e,this.gameField=new t(this._element),this.character=null,this.score=new i,this.timer=new c(5),this.interval=null}startGame(){this.gameField.render(),this.character=new r(this.gameField.getCells()),this.addCellListeners(),this.startCharacterLoop()}startCharacterLoop(){this.interval=setInterval((()=>{this.character.show(),setTimeout((()=>{null!==this.character.getCurrentCellIndex()&&(this.timer.incrementMisses(),this.timer.isGameOver()&&this.endGame()),this.character.hide()}),1e3)}),2e3)}addCellListeners(){this.gameField.getCells().forEach(((e,t)=>{e.addEventListener("click",(()=>{t===this.character.getCurrentCellIndex()&&(this.score.increment(),this.character.hide(),console.log("Счет:",this.score.getScore()))}))}))}endGame(){clearInterval(this.interval),alert(`Игра закончена! Ваш счет: ${this.score.getScore()}`)}}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".game-field");new a(e).startGame()}))})();