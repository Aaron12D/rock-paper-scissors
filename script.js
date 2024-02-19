let computerChoice = '';
let computerPoints = 0;
let playerPoints = 0;
let tiePoints = 0;
let playerChoice = '';
let gameRound = 1;
let playAgain = 1;

const roundResult = document.querySelector('#round-winner');
const playerImg = document.querySelector('.player');
const computerImg = document.querySelector('.comp');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const ties = document.querySelector('#ties');
const winner = document.querySelector('#winner');
const round = document.querySelector('#rounds');
const page = document.querySelector('.page');

function getComputerChoice(){
    const rockPaperScissors = Math.floor(Math.random()*3) + 1;
    
    if (rockPaperScissors === 1){
        computerChoice = 'rock';
        computerImg.src = './images/stone.png';
    } else if (rockPaperScissors === 2){
        computerChoice = 'paper';
        computerImg.src = './images/paper.png';
    }else {
        computerChoice = 'scissors';
        computerImg.src = './images/school.png';
    }
    console.log(`computer: ${computerChoice}`);
}


function playRound (){
    getComputerChoice();
    if (playerChoice.toLowerCase() === computerChoice){
        tiePoints++;
        roundResult.textContent = `Its a tie.`;
        updateScoreboard();
    } else if (
        playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' ||
        playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper' ||
        playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock'
        ) {
        playerPoints++;  
        roundResult.textContent = `You Win!`; 
        updateScoreboard();         
    } else if (
        playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper' ||
        playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock' ||
        playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors'
        ){
        computerPoints++;
        roundResult.textContent = `You Lose!`;
        updateScoreboard();
    };
    if (playerPoints === 5 && computerPoints != 5){
            winner.textContent = 'You beat the computer to 5 wins!';
            playAgainButton();
        } else if ( computerPoints === 5 && playerPoints != 5) {
            winner.textContent = 'The Computer beat you to 5 wins :(';
            playAgainButton();
        };
};

function playAgainButton(){
    if (playAgain === 1) {
        const again = document.createElement('button');
        again.textContent = 'Play Again!'
        page.appendChild(again);
        playAgain = 0;
        again.id = 'again';
    };
}
 function updateScoreboard(){
        round.textContent = `Round: ${gameRound}`;
        wins.textContent = `Wins: ${playerPoints}`;
        losses.textContent = `Losses: ${computerPoints}`;
        ties.textContent = `Ties: ${tiePoints}`;
 }

document.addEventListener('click', function(event){
    if (computerPoints < 5 && playerPoints < 5){
        switch(event.target.id){
            case 'rock':
                playerChoice = 'rock';
                playerImg.src = './images/stone.png'
                console.log('player: rock');
                break;
            case ('paper'):
                playerChoice = 'paper';
                playerImg.src = './images/paper.png'
                console.log('player: paper');
                break;
            case 'scissors':
                playerChoice = 'scissors';
                playerImg.src = './images/school.png'
                console.log('player: scissors')
                break;
        };
        playRound();
        gameRound++;
    }; 
    if (event.target.id === 'again'){
        computerChoice = '';
        computerPoints = 0;
        playerPoints = 0;
        tiePoints = 0;
        playerChoice = '';
        gameRound = 1;
        playAgain = 1
        winner.textContent = '';
        roundResult.textContent = '';
        updateScoreboard();
        again.remove();
    };
});
