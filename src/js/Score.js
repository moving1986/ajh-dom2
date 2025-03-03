export default class Score {
    constructor() {
      this.score = 0;
    }
  
    increment() {
      this.score += 1;
    }
  
    getScore() {
      return this.score;
    }
  }