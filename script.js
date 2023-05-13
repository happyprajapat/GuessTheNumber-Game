'use strict';

/*
// This Will select the class
console.log(document.querySelector('.message'));

// This will select the text in that particular class
console.log(document.querySelector('.message').textContent);

// This will change the  text of the selected class
document.querySelector('.message').textContent = '🎉Correct Answer!!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// For input we use .value otherwise .textContent is used.
document.querySelector('.guess').value = 21;
console.log(document.querySelector('.guess').value);
*/

/*

// ***HANDLING CLICKS***
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When their is No guess
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  //  When the number is found
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Answer!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    // (All about highscore wala part)
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When the number is Too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥹You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When the number is Too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥹You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//***Handling the reset button of the game***

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = 20;

  document.querySelector('.guess').value = '';
});

*/

// ***REFACTORING OUR CODE***

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When their is No guess
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }
  //  When the number is found
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Answer!';
    displayMessage('🎉 Correct Answer!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    // (All about highscore wala part)
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When the number is not r!=equal
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '👆Too High!' : '👇Too low!';
      displayMessage(guess > secretNumber ? '👆Too High!' : '👇Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ;
      displayMessage('🥹You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//***Handling the reset button of the game***

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = 20;

  document.querySelector('.guess').value = '';
});
