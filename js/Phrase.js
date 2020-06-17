/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /**
  * Display phrase on game board
  */
  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');
    for(let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      if(this.phrase.charAt(i) === ' ') {
        li.classList.add('hide', 'space');
        li.innerText = (` `)
      } else {
        li.classList.add('hide', 'letter', this.phrase.charAt(i));
        li.innerText = (`${this.phrase.charAt(i)}`)
      }
    }
  };

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    const phrase = this.phrase.phrase.split('');
    return phrase.reduce((charCount, char) => {
      if(char === letter) {
        this.showMatchedLetter(char);
        return charCount += 1;
      }
      return charCount > 0;
    },0)
  };

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    const phraseTiles = document.querySelectorAll('#phrase ul li');
    for(const li of phraseTiles) {
      if(letter === li.innerText) {
        li.classList.remove('hide');
        li.classList.add('show');
      }
    }
  };
 }