'use strict';
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;
// document.querySelector('.number').textContent = secretNumber;
const gameDefultOps = function () {
  document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent =
        '⚠ No Guess Entered / guess is 0!';
    } else if (guess < 0) {
      document.querySelector('.message').textContent =
        "⚠ Guess Can't Be Negative / 0!";
      document.querySelector('.guess').value = '';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent =
        '✔ Huzzah! Correct Guess!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'Green';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          '📉 Number is too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '😭 Boo! You lost!';
        document.querySelector('.score').textContent = 0;
      }
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          '📈 Number is too High!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '😭 Boo! You lost!';
        document.querySelector('.score').textContent = 0;
      }
    }
  });
};
gameDefultOps();
document.querySelector('.again').addEventListener('click', () => {
  returnDefault();
});

const returnDefault = function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#333';
};
