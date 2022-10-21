let playerPoints = 0;
let computerPoints = 0;

const resultContainer = document.getElementById("results");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.getElementById("score");
const result = document.getElementById("result");


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
                result.innerHTML = "You Won! rock beats scissors";
                return
            }   else if(computerChoice == "paper"){
                computerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                result.innerHTML = "You Lose! paper beats rock";
                return
            }

            break;

        case "paper":

            if(computerChoice == "rock"){
                playerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                result.innerHTML = "You Won! paper beats rock";
                return
            }   else if(computerChoice == "scissors"){
                computerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                result.innerHTML = "You Lose! scissors beats paper";
                return
            }

            break;

        case "scissors":

            if(computerChoice == "paper"){
                playerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                result.innerHTML = "You Won! scissors beats paper";
                return
            }   else if(computerChoice == "rock"){
                computerPoints++;
                score.innerHTML = playerPoints + " X " + computerPoints;
                result.innerHTML = "You Lose! rock beats scissors";
                return
            }

            break;
    }

    result.innerHTML = "It's a Draw, both players have choose " + playerChoice;

    return
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
            return;
        }

    }
}

function reset(){
    playerPoints = computerPoints = 0;
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