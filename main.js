const NUM_ROUNDS = 5;
//randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  //get random index value
  const randomIndex = Math.floor(Math.random() * options.length);

  const item = options[randomIndex];
  return item;
}

let countUserScore = 0;
let countCompScore = 0;

function playRound(userInput, computerSelection = getComputerChoice()) {
  switch (userInput) {
    case "Rock":
      if (computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock");
        countCompScore += 1;
      } else if (computerSelection === "Scissors") {
        console.log("You Win! Rock beats Scissors");
        countUserScore += 1;
      } else {
        console.log("Play again!");
      }
      break;
    case "Paper":
      if (computerSelection === "Paper") {
        console.log("Play again!");
      } else if (computerSelection === "Scissors") {
        console.log("You Lose! Scissors beats Paper");
        countCompScore += 1;
      } else {
        console.log("You Win! Paper beats Rock");
        countUserScore += 1;
      }
      break;
    case "Scissors":
      if (computerSelection === "Paper") {
        console.log("You Win! Scissors beats Paper");
        countUserScore += 1;
      } else if (computerSelection === "Scissors") {
        console.log("Play again!");
      } else {
        console.log("You Lose! Rock beats Scissors");
        countCompScore += 1;
      }
      break;
    default:
      throw new Error("Wrong option! Choose between rock, paper or scissors.");
  }
  console.log(userInput, computerSelection);
}

function game(userInput) {
  let i = 0;
  while (i < NUM_ROUNDS) {
    playRound(userInput);
  }
  i++;
}
