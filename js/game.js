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

