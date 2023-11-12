//Global Variables
let userWins = 0;
let computerWins = 0;

//Element selectors
const gSelection = document.querySelector('#selection');
const gStatus = document.querySelector('#who-wins');
const gInfo = document.querySelector('#info');
const gUserWins = document.querySelector('#user > .wins');
const gComputerWins = document.querySelector('#computer > .wins');

gSelection.addEventListener('click', (e) => {
  const select = e.target;
  console.log(playRound(select.id, getComputerChoice()));
});

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
    status = "It's a tie :/"
  } else computerWins++;

  let info = `${winner} beats ${looser}`;

  if (tie) info = 'cri cri cri...';

  refreshInfo(status, info);
}

function refreshInfo(status, info) {
  gStatus.textContent = status;
  gInfo.textContent = info;
  gUserWins.textContent = `Usuario: ${userWins}`;
  gComputerWins.textContent = `Computadora: ${computerWins}`;
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
  }
}

