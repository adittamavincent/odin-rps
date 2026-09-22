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
// TODO 2: COMPUTER CHOICE FUNCTION (No changes needed)
// =====================================================
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}


// =====================================================
// TODO 3: REMOVE PROMPT() REPLACEMENT
// =====================================================
// We're removing the prompt() function entirely
// Button clicks will replace this functionality
// Leave this empty or delete it later
function getHumanChoice() {
  // This is being REMOVED - buttons will handle input now
  // Don't use prompt() anymore!
}


// =====================================================
// TODO 4: PLAYGAME FUNCTION - CONVERT TO UI MODE
// =====================================================
function playGame() {
  
  // --- TRACKING SCORES ---
  let humanScore = 0;
  let computerScore = 0;
  
  // Track how many rounds have been played (for game state)
  let roundsPlayed = 0;
  
  // NOTE: We removed the "exactly 5 rounds" limit
  // Instead, game continues until someone reaches 5 points
  
  // --- PLAYROUND FUNCTION ---
  function playRound(humanChoice, computerChoice) {
    
    const human = humanChoice.toLowerCase();
    const beats = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };
    
    let resultMessage = "";
    let roundWinner = ""; // "human", "computer", or "tie"
    
    if (human === computerChoice) {
      resultMessage = `Tie! Both chose ${computerChoice}`;
      roundWinner = "tie";
    } else if (beats[human] === computerChoice) {
      resultMessage = `You win! ${human} beats ${computerChoice}`;
      humanScore++;
      roundWinner = "human";
    } else {
      resultMessage = `You lose! ${computerChoice} beats ${human}`;
      computerScore++;
      roundWinner = "computer";
    }
    
    roundsPlayed++;
    
    // TODO: UPDATE THE DOM WITH ROUND RESULT
    // Delete this console.log line and use displayResult() instead:
    console.log(resultMessage);
    
    // Call displayResult to show the outcome on screen
    displayResult(resultMessage);
    
    // Update score display
    updateScoreDisplay();
    
    // Check if game should continue
    if (humanScore >= 5 || computerScore >= 5) {
      announceWinner();
    }
  }
  
  // =====================================================
  // TODO 5: REMOVE FIXED LOOP LOGIC
  // =====================================================
  // DELETE this entire for loop below - we don't want exactly 5 rounds:
  /*
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  */
  
  // INSTEAD of the loop above:
  // The game starts automatically when page loads
  // Each button click triggers one round
  // Game stops automatically when someone reaches 5 points
  
  // If you want to start the game manually, remove the call to playGame()
  // from the bottom and trigger it via a "Start Game" button instead
  
  
  // =====================================================
  // TODO 6: CREATE DISPLAYRESULT FUNCTION
  // =====================================================
  // This function updates the HTML with round results
  function displayResult(message) {
    // Find the results div (you'll create this in index.html)
    // Example structure: <div id="results"></div>
    
    // Create or find the element
    const resultsDiv = document.getElementById("results");
    
    // Add the message to the results area
    // You can append new messages or clear and show latest
    
    // TODO: Replace this comment with actual DOM manipulation
    // Use: resultsDiv.textContent = message;
    // OR: resultsDiv.innerHTML += "<p>" + message + "</p>";
    
    console.log(message); // TEMPORARY - DELETE THIS LINE
  }
  
  
  // =====================================================
  // TODO 7: CREATE UPDATESCOREDISPLAY FUNCTION
  // =====================================================
  function updateScoreDisplay() {
    // Find the score display elements (create these in index.html)
    // Example: <div id="score">Human: 0 | Computer: 0</div>
    
    const scoreDiv = document.getElementById("score");
    
    // TODO: Update the score display with current scores
    // Use: scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    
    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`); // TEMPORARY
  }
  
  
  // =====================================================
  // TODO 8: CREATE ANNOUNCEWINNER FUNCTION
  // =====================================================
  function announceWinner() {
    let winnerMessage = "";
    
    if (humanScore >= 5) {
      winnerMessage = `🎉 YOU WIN the game ${humanScore} to ${computerScore}! 🎉`;
    } else if (computerScore >= 5) {
      winnerMessage = `💻 Computer wins the game ${computerScore} to ${humanScore}! 💻`;
    } else {
      winnerMessage = `It's a tie at ${humanScore} to ${computerScore}!`;
    }
    
    // Display winner message
    const resultsDiv = document.getElementById("results");
    
    // TODO: Show winner message
    // Use: resultsDiv.textContent = winnerMessage;
    
    console.log(winnerMessage); // TEMPORARY - DELETE AFTER
    
    // Optional: Disable buttons after game ends
    // hint: document.querySelectorAll('button').forEach(btn => btn.disabled = true);
  }
}


// =====================================================
// TODO 9: START THE GAME
// =====================================================
// When the page loads, set up the game
// Remove the playGame() call below and use event listeners instead

// Current behavior: Game starts immediately
playGame();

// BETTER APPROACH: Wait for page load, then show UI buttons
document.addEventListener("DOMContentLoaded", function() {
  // This runs when the HTML is ready
  
  // Call playGame() here to initialize scoring variables
  
  // Set up button click listeners (see below)
  
  // But DON'T auto-start playing rounds - wait for user to click buttons
});


// =====================================================
// TODO 10: SET UP BUTTON EVENT LISTENERS (Final Step!)
// =====================================================
// These will go outside playGame() and connect buttons to rounds

// After the HTML has 3 buttons (rock, paper, scissors):
/*
document.addEventListener("DOMContentLoaded", function() {
  
  // Get references to the buttons
  const rockBtn = document.querySelector(".rock-btn");
  const paperBtn = document.querySelector(".paper-btn");
  const scissorsBtn = document.querySelector(".scissors-btn");
  
  // Add click listeners
  rockBtn.addEventListener("click", function() {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
  
  paperBtn.addEventListener("click", function() {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
  
  scissorsBtn.addEventListener("click", function() {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
  
  // Note: You'll need to modify playGame() slightly so it doesn't run automatically
  // Instead, it should just initialize the score variables
});
*/
