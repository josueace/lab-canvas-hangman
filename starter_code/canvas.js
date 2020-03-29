
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord=secretWord;
    
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800);
    this.ctx.lineWidth = 5;
  }

  drawLines() {
    for(i=0;i<this.secretWord.length;i++){
      this.ctx.beginPath();
      this.ctx.moveTo(10+i*50,50);
      this.ctx.lineTo(i*50+50,50);
      this.ctx.stroke();
      this.ctx.closePath();
      
      }
  }

  writeCorrectLetter(index) {
    
  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}