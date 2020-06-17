/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startButton = document.getElementById('btn__reset');
const keyboard = document.querySelectorAll('#qwerty div button');

startButton.addEventListener('click', function() {
  game = new Game();
  game.startGame();
});

for(let key of keyboard) {
  key.addEventListener('click', function(event) {
    game.handleInteraction(event);
  })
};


