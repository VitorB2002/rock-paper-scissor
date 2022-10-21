let playerPoints = 0;
let computerPoints = 0;
let option;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.getElementById("score");

function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[(Math.floor(Math.random() * 3))];
    return computerChoice;
}

function playRound(playerChoice, computerChoice){

    switch (playerChoice){

        case "rock":

            if(computerChoice == "scissors"){
                playerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                return
            }   else if(computerChoice == "paper"){
                computerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                return
            }

            break;

        case "paper":

            if(computerChoice == "rock"){
                playerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                return
            }   else if(computerChoice == "scissors"){
                computerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                return
            }

            break;

        case "scissors":

            if(computerChoice == "paper"){
                playerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                return
            }   else if(computerChoice == "rock"){
                computerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                return
            }

            break;
    }

    return console.log("It's a Draw, both players have choose " + playerChoice);
}

function game(){
    let playerChoice;

    alert("Computer challenges you to a first 5 round match of rock paper scissors")

    for (let i = 0 ; i < 5 ;){
        playerChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();

        while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
            playerChoice = prompt("Invalid input, choose rock, paper or scissors: ").toLowerCase();
        }

        alert(playRound(playerChoice, getComputerChoice()));

        if(playerPoints > computerPoints){
            i = playerPoints;
        }   else{
            i = computerPoints
        }

    }

    if(playerPoints > computerPoints){
        alert("You won against the machine, match result = " + playerPoints + " X " + computerPoints);
    }   else if(playerPoints < computerPoints){
        alert("You lose against the machine, match result = " + playerPoints + " X " + computerPoints);
    }   else{
        alert("We have a draw, match result = " + playerPoints + " X " + computerPoints);
    }

}

function reset(){
    playerPoints = computerPoints = 0;
}

function alertMsg(){
    alert("clicked");
}

/*
do{
    game();
    option = prompt("Press Y to play again").toLowerCase();
    reset();
}   while(option == "y");

alert("Thanks for playing")
*/

rock.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener('click', () => {
    playRound("paper", getComputerChoice())
});
scissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice())
});