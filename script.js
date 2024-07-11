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

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();