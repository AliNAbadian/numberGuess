const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let input = document.getElementById("numberToGuess").value;

let attempts = 0;
// let guess = input;
let running = true;

function startGame() {
  console.log(input);
}

// while (running) {
//   guess = input;
//   guess = Number(guess);

//   //   if (isNaN(guess)) {
//   //     window.alert("Please enter a valid number!");
//   //   } else if (guess < min || guess > max) {
//   //     window.alert("Please enter a valid number!");
//   //   } else {
//   //     attempts++;
//   //     if (guess < answer) {
//   //       window.alert("Too Low");
//   //     } else if (guess > answer) {
//   //       window.alert("Too High");
//   //     } else {
//   //       window.alert(`CORRECT! Attempts ${attempts}.`);
//   //       running = false;
//   //     }
// }
