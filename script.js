




//getComputerChoice
function getComputerChoice() {
    // create an array- arrOfChoice of rock, paper, scissors
    let arrOfChoice = ["Rock", "Paper", "Scissors"]
    //var randomDecimal = random maths multiplies the array's length
    let randomDecimal = Math.random() * arrOfChoice.length;
    //var randomNumber= floor the randomDecimal
    let randomNumber = Math.floor(randomDecimal);
    //let randomComputerChoice = randomNumber pulling value from the array
    return arrOfChoice[randomNumber];
}