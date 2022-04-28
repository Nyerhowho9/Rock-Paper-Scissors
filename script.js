function computerPlay(){
    let y = getRandomNum()
    if (y==0){
        return "Rock";
    }
    else if (y==1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getRandomNum(){
    let x = Math.floor(Math.random()*3);
    return x;
}
console.log(computerPlay());

//Player's selection choices
const a = "ROCK";
const b = "PAPER";
const c = "SCISSORS"


function playRound(playerSelection, computerSelection){
    if (playerSelection.toUppercase() == a){
        if (computerSelection == b){
            return "You lose";
        }
        else if (computerSelection == c){
            return "You win";
        }
        else{
            return "It's a tie";
        }
    }
    if (playerSelection.toUppercase() == b){
        if (computerSelection == c){
            return "You win";
        }
        else if (computerSelection == a){
            return "You lose";
        }
        else {
            return "Its a tie";
        }
    }
    if (playerSelection.toUppercase() == c){
        if (computerSelection == a){
            return "You lose";
        }
        if (computerSelection == b){
            return "You win";
        }
    }
}

const playerSelection =  prompt("Choose your weapon: Rock, Paper or Scissors");
const computerSelection = computerPlay();



function game(){
    for (let i = 0; i < 5; i++) {
        // your code here!
        playRound();
     }
}
game();


