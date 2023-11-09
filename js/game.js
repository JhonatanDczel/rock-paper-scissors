let userWins = 0;
let computerWins = 0;

for (let i = 0; i < 5; i++) {
  game();
  console.log(`\nUser wins: ${userWins}\nComputer wins: ${computerWins}\n\n`);
}

function game() {
  let user = getUserChoice();
  let computer = getComputerChoice();
  let round = playRound(user, computer);
  console.log(round);
}

function getUserChoice() {
  let choice = prompt("Ingresa tu eleccion (Rock / Paper / Scissors)").toLowerCase();
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let status = "You Lose!";
  let winner = computerSelection;
  let looser = playerSelection;
  let playerWin = (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper");
  let tie = (playerSelection == computerSelection);

  if (playerWin) {
    [winner, looser] = [playerSelection, computerSelection]
    status = "You Win!";
    userWins++;
  } else if (tie) {
    return "It's a tie :/";
  } else computerWins++;

  return `${status} ${winner} beats ${looser}`;
}

function getComputerChoice() {
  let numAzar = Math.floor(Math.random() * 3);
  switch (numAzar) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      "something is not run";
  }
}

