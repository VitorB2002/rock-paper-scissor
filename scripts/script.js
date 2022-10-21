let playerPoints = 0;
let computerPoints = 0;
let option;

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
                return "You Won! rock beats scissors";
            }   else if(computerChoice == "paper"){
                computerPoints++;
                return "You Lose! paper beats rock"
            }

            break;

        case "paper":

            if(computerChoice == "rock"){
                playerPoints++;
                return "You Won! rock beats scissors";
            }   else if(computerChoice == "scissors"){
                computerPoints++;
                return "You Lose! scissors beats paper"
            }

            break;

        case "scissors":

            if(computerChoice == "paper"){
                playerPoints++;
                return "You Won! scissors beats paper";
            }   else if(computerChoice == "rock"){
                computerPoints++;
                return "You Lose! rock beats scissors"
            }

            break;
    }

    return "It's a Draw, both players have choose " + playerChoice;
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

do{
    game();
    option = prompt("Press Y to play again").toLowerCase();
    reset();
}   while(option == "y");

alert("Thanks for playing")