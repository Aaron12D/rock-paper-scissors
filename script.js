let computerChoice = '';
const playerChoice = prompt('Rock, Paper, or Scissors?')

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
console.log(playerChoice);

function playRound (){
    getComputerChoice();

    if (playerChoice.toLowerCase() === computerChoice){
        tie()
    } else if (
        playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' ||
        playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper' ||
        playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock'
        ) {
        alert('You Win! ' + playerChoice.toLowerCase() + ' beats ' + computerChoice + '!');            
    } else if (
        playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper' ||
        playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock' ||
        playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors'
    ){
        alert('You Lose! ' + computerChoice + ' beats ' + playerChoice.toLowerCase() + '. Try Again!');
    } else {
        alert('Enter an attack.');
        
    }
}

function tie(){
    alert('its a tie, try again.')
    playRound();
}
 playRound();

