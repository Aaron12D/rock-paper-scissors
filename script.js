let computerChoice = '';
let computerPoints = 0;
let playerPoints = 0;
let tiePoints = 0;

function getComputerChoice(){
    const rockPaperScissors = Math.floor(Math.random()*3) + 1;
    
    if (rockPaperScissors === 1){
        computerChoice = 'rock'
    } else if (rockPaperScissors === 2){
        computerChoice = 'paper'
    }else {
        computerChoice = 'scissors'
    }
    console.log(computerChoice);
}


function playRound (){
    getComputerChoice();
    const playerChoice = prompt('Rock, Paper, or Scissors?')
    console.log(playerChoice);
    if (playerChoice.toLowerCase() === computerChoice){
        tiePoints++;
        alert('its a tie.' + ' round: ' + gameRound + ' computer: ' + computerPoints + ' player: ' + playerPoints + ' ties: ' + tiePoints)
    } else if (
        playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' ||
        playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper' ||
        playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock'
        ) {
        playerPoints++;  
        alert('You Win! ' + playerChoice.toLowerCase() + ' beats ' + computerChoice + '!' + ' round: ' + gameRound + ' computer: ' + computerPoints + ' player: ' + playerPoints + ' ties: ' + tiePoints);          
    } else if (
        playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper' ||
        playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock' ||
        playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors'
    ){
        computerPoints++;
        alert('You Lose! ' + computerChoice + ' beats ' + playerChoice.toLowerCase() + '.' + ' round: ' + gameRound + ' computer: ' + computerPoints + ' player: ' + playerPoints + ' ties: ' + tiePoints);
    } else {
        alert('Enter an attack.');
    }
}


let gameRound = 0;
// try i-- for ties in the loop function
function game(){
    for (let i = 0; i < 5; i++){
        gameRound++;
        playRound();
    }

    if (playerPoints > computerPoints && playerPoints > tiePoints){
        alert('Congradulations you won!' + ' Rounds won: ' + playerPoints)
    } else if (computerPoints > playerPoints && computerPoints > tiePoints){
        alert('You lost to a computer lol.' + ' Rounds lost: ' + computerPoints)
    } else {
        alert('Its a tie.' + ' Rounds tied: ' + tiePoints)
    }
}
 game();

