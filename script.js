let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

const resultDiv = document.querySelector('.result');
const buttonContainerDiv = document.querySelector('.button-container');
const selection = document.querySelectorAll('.selection');
const humanPoint = document.querySelector('.human-score');
const computerPoint = document.querySelector('.computer-score');

function gameOver() {
    buttonContainerDiv.innerHTML = '';

    const newButton = document.createElement('button');
    newButton.className = 'restart';
    newButton.textContent = 'Restart';
    buttonContainerDiv.appendChild(newButton);

    resultDiv.classList.add('final-result');

    if (computerScore < humanScore) {
        resultDiv.innerHTML = 'YOU WIN!!'
    } else {
        resultDiv.innerHTML = 'You Lost, Good Game!'
    }

    newButton.addEventListener('click', () => {
        buttonContainerDiv.innerHTML = `
            <button class="selection">Rock</button>
            <button class="selection">Paper</button>
            <button class="selection">Scissors</button>
        `;

        humanScore = 0;
        computerScore = 0;
        resultDiv.innerHTML = '';
        humanPoint.textContent = humanScore;
        computerPoint.textContent = computerScore;

        // Re-add event listeners to the new buttons
        addEventListeners();
    });
}

function getComputerChoice() {
    let rand = Math.floor(3 * Math.random());
    switch (rand) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let result = '';
    if (humanChoice == computerChoice) {
        console.log("Draw! Both chose " + humanChoice + ".");
        result = "Draw! Both chose " + humanChoice + ".";
    }
    else if (
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        result = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }
    else {
        computerScore++;
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice + ".")
        result = "Computer wins! " + computerChoice + " beats " + humanChoice + ".";
    }

    const newMessage = document.createElement('div');
    newMessage.textContent = result;
    newMessage.style.fontSize = '24px';
    newMessage.style.opacity = '1';

    // Adjust existing messages
    const existingMessages = resultDiv.querySelectorAll('div');
    existingMessages.forEach((msg, index) => {
    msg.style.fontSize = `${24 - 1.6 * (index + 1)}px`;
    msg.style.opacity = `${1 - 0.18 * (index + 1)}`;
    });

    // Add the new message to the result div
    resultDiv.insertBefore(newMessage, resultDiv.firstChild);

    humanPoint.textContent = humanScore;
    computerPoint.textContent = computerScore;

    if (computerScore == winningScore || humanScore == winningScore) {
        gameOver();
    }
}

function addEventListeners() {
    const buttons = document.querySelectorAll('.selection');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const humanChoice = button.textContent.toLowerCase();
            playRound(humanChoice, getComputerChoice());
        });
    });
}

// Add event listeners to the initial buttons
addEventListeners();