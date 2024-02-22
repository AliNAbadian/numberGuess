const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
let running = true;

function startGame() {
  const input = parseInt(document.getElementById("numberToGuess").value);
  if (isNaN(input)) {
    window.alert("Please enter a valid number!");
    return;
  } else if (input < min || input > max) {
    window.alert("Please enter a valid number!");
  } else {
    attempts++;
    if (input < answer) {
      window.alert("Too Low");
    } else if (input > answer) {
      window.alert("Too High");
    } else {
      window.alert(`CORRECT! Attempts ${attempts}.`);
    }
  }
}
