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
          phrase: "We need a bigger boat"
        },
        {
          phrase: "A piece of cake"
        },
        {
          phrase: "A sight for sore eyes"
        },
        {
          phrase: "Cool as a cucumber"
        },
        {
          phrase: "Busy as a bee"
        }
      ]
      return phrases
    }

    getRandomPhrase() {
      let randomNumber = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomNumber];
    }
 }