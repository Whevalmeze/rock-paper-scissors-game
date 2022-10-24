// GAME FUNCTION
let stats = document.createElement('h3');
let statsContainer = document.querySelector('div.stats-container');
stats.classList.add('stats');
statsContainer.appendChild(stats);
let finalResult = document.querySelector('h3.final-result');
let playbuttons = document.querySelectorAll('div.btn-cls  button');
var computerScore = 0;
var playerScore = 0;
let wrapperContent = document.querySelector("body > div.container > div.wrapper-content");
let finalResultContainer = document.querySelector("body > div.container > div.final-result-container");
let replayBtn = document.querySelector("div.final-result-container > button");
finalResultContainer.style.display = 'none';
function game(param) {
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
    if (computerScore === 5 && computerScore > playerScore) {
        wrapperContent.style.display = 'none';
        finalResultContainer.style.display='flex';
        return 'You lose, Bot wins';
    } else if (playerScore === 5 && playerScore > computerScore) {
        wrapperContent.style.display = 'none';
        finalResultContainer.style.display='flex';
        return 'You win, human';
    };
     function playRound(playerSelection, computerSelection = getComputerChoice()) {
         playerSelectionLowerCase = playerSelection.toLowerCase();
         computerSelectionLowerCase = computerSelection.toLowerCase();
         if (playerSelectionLowerCase === computerSelectionLowerCase) {
             return (`It's a tie, try again...`);
         } else if (
             (playerSelectionLowerCase === "rock" && computerSelectionLowerCase === "paper") ||
             (playerSelectionLowerCase === "paper" && computerSelectionLowerCase === "scissors") ||
             (playerSelectionLowerCase === "scissors" && computerSelectionLowerCase === "rock")         
         ) {
             computerScore++
             return (`You lose, ${computerSelection} beats ${playerSelection}. computer score: ${computerScore}`);
         } else if (
             (playerSelectionLowerCase === "rock" && computerSelectionLowerCase === "scissors") ||
             (playerSelectionLowerCase === "paper" && computerSelectionLowerCase === "rock") ||
             (playerSelectionLowerCase === "scissors" && computerSelectionLowerCase === "paper")         
         ) {
             playerScore++
             return (`You win, ${playerSelection} beats ${computerSelection}. your score: ${playerScore}`);
         }
     };
    stats.textContent = playRound(param);
};

// DOM MANIPULATION
// alert('Im here');
replayBtn.addEventListener('click', () => {
    computerScore = 0; playerScore = 0; stats.textContent = '';
    wrapperContent.style.display = 'flex';
    finalResultContainer.style.display = 'none';
})


playbuttons.forEach((choice) => {
    choice.addEventListener('click', function () {
        finalResult.textContent = game(choice.innerText);
    });
}
);

let div = document.querySelectorAll(".minContainer, .minContainer2");
div.forEach((each) => each.addEventListener('click', (e) => { console.log(each.classList.value, each.id); /*e.stopPropagation();*/ }, { capture: true,once: true }))