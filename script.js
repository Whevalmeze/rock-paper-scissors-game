// GAME FUNCTION
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
                Your score:     ${playerScore} points.
                Computer score: ${computerScore} points`);
    } else {
        alert(`Oops! You lost.
                Your score:     ${playerScore} points.
                Computer score: ${computerScore} points`);
    };
};

/*
let arrOfChoice = ["rock", "paper", "scissors"]
function getComputerChoice() {
    // create an array- arrOfChoice of rock, paper, scissors
    //var randomDecimal = random maths multiplies the array's length
    let randomDecimal = Math.random() * arrOfChoice.length;
    //var randomNumber= floor the randomDecimal
    let randomNumber = Math.floor(randomDecimal);
    //let randomComputerChoice = randomNumber pulling value from the array
    return arrOfChoice[randomNumber];
};

function getPlayerChoice() {
    return prompt("Make A Choice!!");
};


function game() {
    var playerScore = 0;
    var computerScore = 0;
    function playRound(playerSelection = getPlayerChoice(), computerSelection = getComputerChoice()) {
        playerSelectionLowerCase = playerSelection.toLowerCase();
        computerSelectionLowerCase = computerSelection.toLowerCase();
        if (playerSelectionLowerCase === computerSelectionLowerCase) {
            console.log(`It's a tie, try again...`);
        } else if ((arrOfChoice.some((choice) => choice == playerSelectionLowerCase) == false)) {
            alert(`Wrong Input: ${playerSelection}.`)
        } else {
            function run() {
                if (
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
            };
            for (let i = 0; i < 5; i++) {
                run();
            };
            if (playerScore > computerScore) {
                alert(`Great Job! You won the computer.
                    Your score:     ${playerScore} points.
                    Computer score: ${computerScore} points`);
            } else {
                alert(`Oops! You lost.
                    Your score:     ${playerScore} points.
                    Computer score: ${computerScore} points`);
            };
        }
    };
    playRound();
};

*/

// DOM MANIPULATION
let btn = document.querySelector('button#click-me');
btn.addEventListener('click', game);
alert("Im working")

let div = document.querySelectorAll(".minContainer, .minContainer2");
div.forEach((each) => each.addEventListener('click', (e) => { console.log(each.classList.value, each.id); /*e.stopPropagation();*/ }, { capture: true,once: true }))