export default class Timer {
    constructor(maxMisses) {
      this.misses = 0;
      this.maxMisses = maxMisses;
    }
  
    incrementMisses() {
      this.misses += 1;
    }
  
    isGameOver() {
      return this.misses >= this.maxMisses;
    }
  
    getMisses() {
      return this.misses;
    }
  }