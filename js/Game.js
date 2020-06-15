/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

   /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
      const phrases = [
        {
          phrase: "we need a bigger boat"
        },
        {
          phrase: "a piece of cake"
        },
        {
          phrase: "a sight for sore eyes"
        },
        {
          phrase: "cool as a cucumber"
        },
        {
          phrase: "busy me"
        }
      ]
      return phrases
    }

    getRandomPhrase() {
      const randomNumber = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomNumber];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
      const hideGame = document.getElementById('overlay');
      hideGame.style.display = 'none';
      let randomPhrase = this.getRandomPhrase();
      const phrase = new Phrase(randomPhrase.phrase);
      phrase.addPhraseToDisplay();
      this.activePhrase = phrase;
    };

    /**
    * Handles the logic for a player guessing a letter
    */
    handleInteraction() {

    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
      let hiddenClassCount = 0;
      const phraseTiles = document.querySelectorAll('#phrase ul li');
      for(let li of phraseTiles) {
        if(li.classList.contains('hide') && (!li.classList.contains('space'))) {
          hiddenClassCount ++
        }
      }
      return hiddenClassCount === 0;
    };
 }