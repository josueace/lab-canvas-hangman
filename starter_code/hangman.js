let hangman;

 class Hangman {
 constructor() {
  this.words=["w","a","t","e","r"];
  this.secretWord='water';
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft =10;
  }

   getWord() {
    var ranWord= _.sample(this.words);
    return ranWord;
   }

   checkIfLetter(keyCode) {

   if (keyCode >= 65 && keyCode <= 90){
     return true;
   } else{
     return false;
   }


   }

  checkClickedLetters(key) {
    if(this.letters.includes(key)){
    return false;
    } else{
      return true;
    }
   }

   addCorrectLetter(i) {

    switch(i){
      case 87:
         this.guessedLetter += "w"; 
         break;
      case 65:
        this.guessedLetter += "a";
        break;
      case 68:
        this.guessedLetter += "t";
        break;
      case 69:
        this.guessedLetter += "e";
        break;
      case 82:
        this.guessedLetter += "r";
        break;
      
    }
   
   // checkWinner();

   }


   addWrongLetter(letter) {

    if(!(this.checkIfLetter(letter))){
      this.errorsLeft += -1;
    }
   }

   checkGameOver() {
    if(this.errorsLeft >0){
      return false;
    } else{
      return true;
    }

   }

   checkWinner() {
     if(this.secretWord.length === this.guessedLetter.length){
      return true
     }else{
       return false
     }
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

if(hangman.checkClickedLetters(e.keyCode)){
  var value = String.fromCharCode(e.keyCode);

  if(this.secretWord.includes(value)){
    addCorrectLetter(e.keyCode);
    this.letters.push(value);

  } else{
    this.letters.push(value);
  }

}


};


