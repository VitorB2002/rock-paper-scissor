function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[(Math.floor(Math.random() * 3))];
    return computerChoice;
}

let playerChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();

while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
    playerChoice = prompt("Invalid input, choose rock, paper or scissors: ");
}

alert("Computer choice = " + getComputerChoice() + " Player choice = " + playerChoice)