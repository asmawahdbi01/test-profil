console.log("Hello, world!");
let name = prompt("What is your name?");
alert(`Hello, ${name}! Nice to meet you.`);
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("I'm thinking of a number between 1 and 10. Can you guess what it is?"));

if (guess === randomNumber) {
  alert("Congratulations! You guessed the number!");
} else {
  alert(`Sorry, the number was ${randomNumber}. Better luck next time!`);
}

