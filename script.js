// console.log("WTF"); 

function getComputerChoice() { 
    const choices = ['rock', 'paper', 'scissors']; 
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber]; 
}

function getHumanChoice() { 
    let choice = prompt("Enter your choice (rock, paper, scissors): ");
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors: ");
    }
    return choice;
}

function determineWinner(computerChoice, humanChoice) {
    console.log(`Computer choose ${computerChoice}`);
    console.log(`Human choose ${humanChoice}`);
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    }
    if (computerChoice === 'rock') {
        if (humanChoice === 'paper') {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
    if (computerChoice === 'paper') {
        if (humanChoice === 'scissors') {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
    if (computerChoice === 'scissors') {
        if (humanChoice === 'rock') {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
}

let humanScore = 0;
let computerScore = 0;

console.log("Rock, Paper, Scissors, Shoot!");
for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let result = determineWinner(computerChoice, humanChoice);
    console.log(result);
    if (result === "You win!") {
        humanScore++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}
if(humanScore > computerScore) {
    console.log("You win the game!");
    console.log("Final score: Human " + humanScore + " - Computer " + computerScore);
}
else if(humanScore < computerScore) {
    console.log("Computer wins the game!");
    console.log("Final score: Human " + humanScore + " - Computer " + computerScore);
}
