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
          phrase: "a dime a dozen"
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
      const existingPhrase = document.querySelector('#phrase ul');
      existingPhrase.innerHTML = '';
      this.resetKeyboard();
      this.resetLives();
      setTimeout(function() {
        const hideGame = document.getElementById('overlay');
        hideGame.style.display = 'none';
      }, 300);

      let randomPhrase = this.getRandomPhrase();
      const phrase = new Phrase(randomPhrase.phrase);
      phrase.addPhraseToDisplay();
      this.activePhrase = phrase;
    };

    resetLives() {
      const lives = document.querySelectorAll('#scoreboard ol li');
      for (let li of lives) {
        li.firstChild.attributes[0].textContent = "images/liveHeart.png";
      }
    };

    resetKeyboard() {
      const keyboard = document.querySelectorAll('#qwerty div button');
      for(let key of keyboard) {
        key.classList.remove('chosen', 'wrong');
        key.disabled = false;
      }
    };

    /**
    * Handles the logic for a player guessing a letter
    */
    handleInteraction(button) {
      const phrase = new Phrase(this.activePhrase);
      let letterFound = phrase.checkLetter(button.target.innerText);
      if(letterFound) {
        button.target.disabled = true;
        button.target.classList.add('chosen');
        if(this.checkForWin()) {
            this.gameOver(true);         
        }
      } else if (letterFound === false) {
        button.target.disabled = true;
        button.target.classList.add('wrong');
        this.removeLife();
      }
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

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
      const lives = document.querySelectorAll('#scoreboard ol li');
      for (let li of lives) {
        if(li.firstChild.attributes[0].textContent === "images/liveHeart.png") {
          li.firstChild.attributes[0].textContent = "images/lostHeart.png";
          this.missed += 1;
          if(this.missed === 5) {
            this.gameOver(false);
          }
          break;
        }
      }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
      const winLoseScreen = document.getElementById('overlay');
      let winLoseHeading = document.querySelector('#overlay h1');
      //Used the setTimeout here so that the screen doesn't change as soon you win or lose
      setTimeout(function() {
        winLoseScreen.style.display = '';
        winLoseScreen.classList.remove('start');
      }, 750);
      if(gameWon === true) {
        winLoseScreen.classList.add('win');
        winLoseHeading.innerText = "Congratulations on a great game, you won!"
      } else if(gameWon === false) {
        winLoseScreen.classList.add('lose');
        winLoseHeading.innerText = "Bad luck, you didn't win this time, try again!"
      }
    };
  }