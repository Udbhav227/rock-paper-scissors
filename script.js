let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector('.result');
const buttonContainerDiv = document.querySelector('.button-container');
const selection = document.querySelectorAll('.selection');
const humanPoint = document.querySelector('.human-score');
const computerPoint = document.querySelector('.computer-score');

function getComputerChoice() {
    let rand = Math.floor(3 * Math.random());
    switch (rand) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw! Both chose " + humanChoice + ".");
        resultDiv.textContent = "Draw! Both chose " + humanChoice + ".";
    }
    else if (
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        resultDiv.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }
    else {
        computerScore++;
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice + ".")
        resultDiv.textContent = "Computer wins! " + computerChoice + " beats " + humanChoice + ".";
    }

    humanPoint.textContent = humanScore;
    computerPoint.textContent = computerScore;
}

selection.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.textContent.toLowerCase();
        playRound(humanChoice, getComputerChoice());
    });
});