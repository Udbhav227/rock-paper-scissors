let humanScore = 0;
let computerScore = 0;

const humanScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');

function getComputerChoice() {
    let rand = Math.floor(3 * Math.random());
    switch (rand) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.querySelector('.result');

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
    humanScoreDiv.textContent = "Player: " + humanScore;
    computerScoreDiv.textContent = "Computer: " + computerScore;
}

const btns = document.querySelectorAll("button");

btns.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.className;
        playRound(humanChoice, getComputerChoice());
    });
});