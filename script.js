




// //getComputerChoice
// function getComputerChoice() {
//     // create an array- arrOfChoice of rock, paper, scissors
//     let arrOfChoice = ["rock", "paper", "scissors"]
//     //var randomDecimal = random maths multiplies the array's length
//     let randomDecimal = Math.random() * arrOfChoice.length;
//     //var randomNumber= floor the randomDecimal
//     let randomNumber = Math.floor(randomDecimal);
//     //let randomComputerChoice = randomNumber pulling value from the array
//     return arrOfChoice[randomNumber];
// }


 
// function game() {
//     // get playerSelection value from prompt(), console.log winner of every round
//     console.log(userInput)
//     var computerInput = getComputerChoice();
//     var youWin = `You win! ${userInput} beats ${computerInput}`;
//     var youLose = `You lose! ${computerInput} beats ${userInput}`;
//     var tie = "It's a tie, play again";
//     var computerScore = 0;
//     var playerScore = 0;
//     //run playround
//     for (let i = 0; i < 5; i++) {
//         var userInput = prompt("Make a choice!");
//         var outcome = playRound(userInput);
//         //console.log each score
//         console.log(outcome);
//     }
//     if (outcome = youWin) {
//         playerScore++
//     } else if (outcome = youLose) {
//         computerScore++
//     } 
//     if (playerScore > computerScore) {
//         alert(`You scored ${playerScore} points, You win :)`);
//     } else if(computerScore > playerScore) {
//         alert(`You lost by ${computerScore} points, You Lose :(`);
//     }
//         //playRound(playerSelection, computerSelection) a function that plays the game
//     function playRound(playerSelection, computerSelection = computerInput) {
//         //update playerSelection to be case-insensitive using .lowerCase
//         playerSelectionLowerCase = playerSelection.toLowerCase();
//         //use if statement to compare playerSelection to computerSelection
//         if (playerSelectionLowerCase == computerSelection) {
//             return tie;
//         } else if (playerSelectionLowerCase == "rock" && computerSelection == "scissors") {
//             return youWin;
//         } else if (playerSelectionLowerCase == "scissors" && computerSelection == "paper") {
//             return youWin;
//         } else if (playerSelectionLowerCase == "paper" && computerSelection == "rock") {
//             return youWin;
//         } else {
//             return youLose;
//         }
//     }
// }





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