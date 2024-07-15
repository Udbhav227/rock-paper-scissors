function getComputerChoice() {
    let rand = Math.floor(3 * Math.random());
    switch(rand) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
} 

function getHumanChoice() {
    return prompt("Choose one: Rock, Paper or Scissors".toLowerCase()); 
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw! Both chose " + humanChoice + ".");;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        }
    else {
        computerScore++;
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice + ".")
    }
}

const btn = document.querySelector(button);

btn.addEventListener('click', () => {
    switch(btn.className) {
        case 'rock' : playRound("rock", getComputerChoice());
        case 'paper' : playRound("paper", getComputerChoice());
        case 'scissors' : playRound("scissors", getComputerChoice());
    }
});