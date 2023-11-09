


function getUserChoice() {
  let choice = prompt("Ingresa tu eleccion (Rock / Paper / Scissors)").toLowerCase();
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let status = "You Lose!";
  let winner = computerSelection;
  let looser = playerSelection;
  let playerWin = (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper");

  if (playerWin) {
    [winner, looser] = [playerSelection, computerSelection]
    status = "You Win!";
  }

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

