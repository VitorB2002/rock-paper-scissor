function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[(Math.floor(Math.random() * 3))];
    return computerChoice;
}

alert(getComputerChoice())