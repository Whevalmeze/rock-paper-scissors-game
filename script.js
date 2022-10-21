function getComputerChoice() {
    // create an array- arrOfChoice of rock, paper, scissors
    let arrOfChoice = ["Rock", "Paper", "Scissors"]
    //var randomDecimal = random maths multiplies the array's length
    let randomDecimal = Math.random() * arrOfChoice.length;
    //var randomNumber= floor the randomDecimal
    let randomNumber = Math.floor(randomDecimal);
    //let randomComputerChoice = randomNumber pulling value from the array
    return arrOfChoice[randomNumber];
};

function getPlayerChoice() {
    return prompt("Make A Choice!!");
}


function game() {
    var playerScore = 0;
    var computerScore = 0;
    function playRound(playerSelection = getPlayerChoice(), computerSelection = getComputerChoice()) {
        playerSelectionLowerCase = playerSelection.toLowerCase();
        computerSelectionLowerCase = computerSelection.toLowerCase();
        if (playerSelectionLowerCase === computerSelectionLowerCase) {
            console.log(`It's a tie, try again...`);
        } else if (
            (playerSelectionLowerCase === "rock" && computerSelectionLowerCase === "paper") ||
            (playerSelectionLowerCase === "paper" && computerSelectionLowerCase === "scissors") ||
            (playerSelectionLowerCase === "scissors" && computerSelectionLowerCase === "rock")         
        ) {
            computerScore++
            console.log(`You lose, ${computerSelection} beats ${playerSelection}. computer score: ${computerScore}`);
        } else if (
            (playerSelectionLowerCase === "rock" && computerSelectionLowerCase === "scissors") ||
            (playerSelectionLowerCase === "paper" && computerSelectionLowerCase === "rock") ||
            (playerSelectionLowerCase === "scissors" && computerSelectionLowerCase === "paper")         
        ) {
            playerScore++
            console.log(`You win, ${playerSelection} beats ${computerSelection}. your score: ${playerScore}`);
        }
        else {
            alert(`Wrong Input: ${playerSelection}.`)
        }
    };
    for (let i = 0; i < 5; i++) {
        playRound();
    };
    if (playerScore > computerScore) {
        alert(`Great Job! You won the computer.
                Your scored ${playerScore} points.`);
    } else {
        alert(`Oops! You lost.
                Your scored ${playerScore} points.`);
    };
};