function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[(Math.floor(Math.random() * 3))];
    return computerChoice;
}

function round(playerChoice, computerChoice){

    switch (playerChoice){

        case "rock":

            if(computerChoice == "scissors"){
                return "You Won! rock beats scissors";
            }   else if(computerChoice == "paper"){
                return "You Lose! paper beats rock"
            }

            break;

        case "paper":

            if(computerChoice == "rock"){
                return "You Won! rock beats scissors";
            }   else if(computerChoice == "scissors"){
                return "You Lose! scissors beats paper"
            }

            break;

        case "scissors":

            if(computerChoice == "rock"){
                return "You Lose! rock beats scissors";
            }   else if(computerChoice == "scissors"){
                return "You Won! scissors beats paper"
            }

            break;
    }

    return "It's a Draw, both players have choose " + playerChoice;
}

let playerChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();

while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
    playerChoice = prompt("Invalid input, choose rock, paper or scissors: ");
}

alert("Computer choice = " + getComputerChoice() + " Player choice = " + playerChoice)