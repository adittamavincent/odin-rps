// ============================================
// ROCK PAPER SCISSORS - UI VERSION
// Follow these TODOs in order!
// ============================================

// =====================================================
// TODO 1: GIT SETUP (Do this FIRST before any code changes)
// =====================================================
// Run these commands in your terminal BEFORE modifying code:
//   git checkout -b rps-ui
//   git push origin rps-ui
// 
// After completing all features below:
//   git add .
//   git commit -m "Add UI buttons and DOM output"
//   git checkout main
//   git merge rps-ui
//   git push origin main
//   git branch -d rps-ui
//   git push origin --delete rps-ui
//
// Then publish to GitHub Pages!


// =====================================================
// DONE: COMPUTER CHOICE FUNCTION (No changes needed)
// =====================================================
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}


// =====================================================
// DONE: REMOVE PROMPT() REPLACEMENT
// =====================================================
// Function removed - buttons now handle input directly
// No need for getHumanChoice() since click handlers provide the choice


// =====================================================
// DONE: GLOBAL GAME STATE
// =====================================================
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let gameActive = false;

function playGame() {
  // Initialize game state
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  gameActive = true;
  
  // Clear previous game state
  document.getElementById("results").innerHTML = "";
  document.getElementById("game-status").innerHTML = "";
  updateScoreDisplay();
  
  // Enable buttons
  enableButtons();
  
  // Announce game start
  displayResult("<p><strong>New Game Started! First to 5 points wins!</strong></p>");
}


// =====================================================
// DONE: PLAYROUND FUNCTION - DOM UPDATES INSTEAD OF CONSOLE.LOG
// =====================================================
function playRound(humanChoice, computerChoice) {
  if (!gameActive) {
    return; // Don't allow plays after game ends
  }
  
  const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  
  let resultMessage = "";
  let roundWinner = "";
  
  if (humanChoice.toLowerCase() === computerChoice) {
    resultMessage = `Tie! Both chose ${computerChoice}`;
    roundWinner = "tie";
  } else if (beats[humanChoice.toLowerCase()] === computerChoice) {
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
    roundWinner = "human";
  } else {
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
    roundWinner = "computer";
  }
  
  roundsPlayed++;
  
  // Update results display with this round's outcome
  const resultEntry = document.createElement("p");
  resultEntry.textContent = resultMessage;
  
  if (roundWinner === "human") {
    resultEntry.style.color = "green";
  } else if (roundWinner === "computer") {
    resultEntry.style.color = "red";
  } else {
    resultEntry.style.color = "gray";
  }
  
  document.getElementById("results").appendChild(resultEntry);
  
  // Scroll to the latest result
  resultEntry.scrollIntoView({ behavior: "smooth", block: "end" });
  
  // Update score display
  updateScoreDisplay();
  
  // Check if game should end
  if (humanScore >= 5 || computerScore >= 5) {
    gameActive = false;
    announceWinner();
    disableButtons();
  }
}


// =====================================================
// DONE: DISPLAY RESULT HELPER FUNCTION
// =====================================================
function displayResult(htmlMessage) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.insertAdjacentHTML("beforeend", htmlMessage);
}


// =====================================================
// DONE: UPDATE SCORE DISPLAY HELPER FUNCTION
// =====================================================
function updateScoreDisplay() {
  const scoreDiv = document.getElementById("score");
  scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore} | Rounds: ${roundsPlayed}`;
}


// =====================================================
// DONE: ANNOUNCE WINNER HELPER FUNCTION
// =====================================================
function announceWinner() {
  const gameStatusDiv = document.getElementById("game-status");
  let winnerMessage = "";
  
  if (humanScore >= 5) {
    winnerMessage = `<h2>YOU WIN the game ${humanScore} to ${computerScore}!</h2>`;
    gameStatusDiv.style.color = "green";
  } else if (computerScore >= 5) {
    winnerMessage = `<h2>Computer wins the game ${computerScore} to ${humanScore}!</h2>`;
    gameStatusDiv.style.color = "red";
  } else {
    winnerMessage = `<h2>It's a tie at ${humanScore} to ${computerScore}!</h2>`;
  }
  
  gameStatusDiv.innerHTML = winnerMessage;
  displayResult(`<p><strong>${winnerMessage}</strong></p>`);
}


// =====================================================
// DONE: BUTTON STATE HELPERS
// =====================================================
function disableButtons() {
  document.querySelectorAll('.game-btn').forEach(btn => btn.disabled = true);
}

function enableButtons() {
  document.querySelectorAll('.game-btn').forEach(btn => btn.disabled = false);
}


// =====================================================
// DONE: SET UP EVENT LISTENERS
// =====================================================
document.addEventListener("DOMContentLoaded", function() {
  // Initialize the game
  playGame();
  
  // Get references to the buttons
  const rockBtn = document.querySelector(".rock-btn");
  const paperBtn = document.querySelector(".paper-btn");
  const scissorsBtn = document.querySelector(".scissors-btn");
  const resetBtn = document.querySelector(".reset-btn");
  
  // Add click listeners
  rockBtn.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
  });
  
  paperBtn.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
  });
  
  scissorsBtn.addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
  });
  
  // Reset button to start a new game
  resetBtn.addEventListener("click", function() {
    playGame();
  });
});
