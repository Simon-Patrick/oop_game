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
 }