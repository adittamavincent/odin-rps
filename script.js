function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  return prompt("Rock, Paper, or Scissors?");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const beats = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (human === computerChoice) {
      console.log(`Tie! Both chose ${computerChoice}`);
    } else if (beats[human] === computerChoice) {
      console.log(`You win! ${human} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${human}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`You win the game ${humanScore} to ${computerScore}!`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins the game ${computerScore} to ${humanScore}!`);
  } else {
    console.log(`It's a tie, ${humanScore} to ${computerScore}!`);
  }
}

playGame();
