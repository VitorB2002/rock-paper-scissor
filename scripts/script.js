let playerPoints = 0;
let computerPoints = 0;

const resultsContainer = document.getElementById("results");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.getElementById("score");
const result = document.getElementById("result");
let resetButton = document.createElement("button");

resetButton.innerHTML = "RESET";
resetButton.style.fontSize = "25px";
resetButton.style.backgroundColor = "#04aa6d";
resetButton.style.border = "1px solid black";
resetButton.style.width = "175px";
resetButton.style.height = "50px";
resetButton.style.fontFamily = "Common Pixel, sans-serif";
resetButton.style.margin = "30px";

function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[(Math.floor(Math.random() * 3))];
    return computerChoice;
}

function game(playerChoice, computerChoice){
    
    if(playerPoints < 5 && computerPoints < 5){

        switch (playerChoice){

            case "rock":

                if(computerChoice == "scissors"){
                    playerPoints++;
                    score.innerHTML = playerPoints + " X " + computerPoints;
                        if(playerPoints == 5)
                            break;
                    result.innerHTML = "You Won! rock beats scissors".toUpperCase();
                    return;
                }   else if(computerChoice == "paper"){
                    computerPoints++;
                    score.innerHTML = playerPoints + " X " + computerPoints;
                        if(computerPoints == 5)
                            break;
                    result.innerHTML = "You Lose! paper beats rock".toUpperCase();
                    return;
                }

            break;

            case "paper":

                if(computerChoice == "rock"){
                    playerPoints++;
                    score.innerHTML = playerPoints + " X " + computerPoints;
                        if(playerPoints == 5)
                            break;
                    result.innerHTML = "You Won! paper beats rock".toUpperCase();
                    return;
                }   else if(computerChoice == "scissors"){
                    computerPoints++;
                    score.innerHTML = playerPoints + " X " + computerPoints;
                        if(computerPoints == 5)
                            break;
                    result.innerHTML = "You Lose! scissors beats paper".toUpperCase();
                    return;
                }

            break;

            case "scissors":

                if(computerChoice == "paper"){
                    playerPoints++;
                    score.innerHTML = playerPoints + " X " + computerPoints;
                    if(playerPoints == 5)
                        break;
                    result.innerHTML = "You Won! scissors beats paper".toUpperCase();
                    return;
                }   else if(computerChoice == "rock"){
                    computerPoints++;
                    score.innerHTML = playerPoints + " X " + computerPoints;
                        if(computerPoints == 5)
                            break;
                    result.innerHTML = "You Lose! rock beats scissors".toUpperCase();
                    return;
                }

            break

        }

        if(playerPoints != 5 && computerPoints != 5){
            result.innerHTML = ("It's a Draw, " + playerChoice + " X " + computerChoice).toUpperCase();
            return;
        }   else{
                if(playerPoints == 5){
                    result.innerHTML = ("You won the match against the machine").toUpperCase();
                }   else{
                    result.innerHTML = ("You lose the match against the machine").toUpperCase();
                }
                resultsContainer.appendChild(resetButton);
            return;
        }

    }
}

function reset(){
    playerPoints = computerPoints = 0;
    result.innerHTML = "MAKE YOUR CHOICE";
    score.innerHTML = "0 X 0";
    resultsContainer.lastChild.remove();
}

function alertMsg(){
    alert("clicked");
}

rock.addEventListener('click', () => {
    game("rock", getComputerChoice());
});
paper.addEventListener('click', () => {
    game("paper", getComputerChoice())
});
scissors.addEventListener('click', () => {
    game("scissors", getComputerChoice())
});
resetButton.addEventListener('click', () => {
    reset();
});