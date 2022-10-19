




//getComputerChoice
function getComputerChoice() {
    // create an array- arrOfChoice of rock, paper, scissors
    let arrOfChoice = ["rock", "paper", "scissors"]
    //var randomDecimal = random maths multiplies the array's length
    let randomDecimal = Math.random() * arrOfChoice.length;
    //var randomNumber= floor the randomDecimal
    let randomNumber = Math.floor(randomDecimal);
    //let randomComputerChoice = randomNumber pulling value from the array
    return arrOfChoice[randomNumber];
}

//playGame(playerSelection, computerSelection) a function that plays the game
function playGame(playerSelection, computerSelection = getComputerChoice()) {
    //update playerSelection to be case-insensitive using .lowerCase
    playerSelectionLowerCase = playerSelection.toLowerCase();
    //use if statement to compare playerSelection to computerSelection
    if (playerSelectionLowerCase === computerSelection) {
        return "Its a tie, play again";
    } else if (playerSelectionLowerCase == "rock" && computerSelection == "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelectionLowerCase == "scissors" && computerSelection == "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelectionLowerCase == "paper" && computerSelection == "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
