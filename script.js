const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
let running = true;

function startGame() {
  const input = parseInt(document.getElementById("numberToGuess").value);
  const message = document.getElementById("message");
  if (isNaN(input)) {
    message.innerHTML = "Please enter a valid number!";
    return;
  } else if (input < min || input > max) {
    message.innerHTML = "Please enter a valid number!";
  } else {
    attempts++;
    if (input < answer) {
      message.innerHTML = "Your guess is too low! Try again";
    } else if (input > answer) {
      message.innerHTML = "Your guess is too High! Try again";
    } else {
      message.innerHTML = `CORRECT! Attempts ${attempts}.`;
    }
  }
}
