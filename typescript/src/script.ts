//pages and navigation btns selection
const rulesPageCloseBtn = document.querySelector('.rules-close-button');
const rulesBtn = document.querySelector('.rules-btn');
const rulesPage = document.querySelector('.rules-page');
const gamePage = document.querySelector('.gamePage');
const pageOne = document.querySelector('.page-one');
const pageTwo = document.querySelector('.page-two');

//code for when the cancel btn in rules page is clicked, we navigate to page one
rulesPageCloseBtn?.addEventListener('click', () => {
    rulesPage?.classList.add('hide');
    gamePage?.classList.remove('hide');
})

/*code for when the rules btn is clicked in page one, 
we navigate to remind the player of the rules*/
rulesBtn?.addEventListener('click', () => {
    rulesPage?.classList.remove('hide');
    gamePage?.classList.add('hide');
})

//rock, paper, scissors btns selection
const paperBtn = document.querySelector('.paper-btn');
const rockBtn = document.querySelector('.rock-btn');
const scissorsBtn = document.querySelector('.scissors-btn');

//selection for dynamic pick for page two
const playerPick = document.getElementById('player-pick') as HTMLImageElement;
const playerPickCircle = document.querySelector('.player-pick-circle');
const computerPick = document.getElementById('computer-pick') as HTMLImageElement;
const computerPickCircle = document.querySelector('.computer-pick-circle');

//selection for win or lose indicator
const winOrLoseIndicator = document.querySelector('.win-or-lose-indicator');
const winOrLoseText = document.querySelector('.win-or-lose-text') as HTMLElement;
const nextRoundBtn = document.querySelector('.next-round-btn') as HTMLElement;
const playAgainBtn = document.getElementById('play-again-btn');

let userPick: string = '';

//variables
let currentRound = 1;
const maxRounds = 5;
let playerScore = 0;
let computerScore = 0;

//scores for player and computer and round count
const scoreForPlayer = document.getElementById('scoreForPlayer') as HTMLElement;
const scoreForComputer = document.getElementById('scoreForComputer') as HTMLElement;
const roundCount = document.getElementById('round-count') as HTMLElement;

function navigateToPageTwo(){

    //code for player pick in page 2
    playerPickCircle?.classList.remove('paper-style', 'scissors-style', 'rock-style')

    switch(userPick){
        case 'paper':
            playerPick.src = 'images/icon-paper.svg';
            playerPick.alt = 'Paper pick';
            playerPickCircle?.classList.add('paper-style');
            break;
        case 'scissors':
            playerPick.src = 'images/icon-scissors.svg';
            playerPick.alt = 'Scissors pick';
            playerPickCircle?.classList.add('scissors-style');
            break;
        case 'rock':
            playerPick.src = 'images/icon-rock.svg';
            playerPick.alt = 'Rock pick';
            playerPickCircle?.classList.add('rock-style');
            break;
        default:
            console.error('Invalid user pick', userPick);
            return;
    }

    //code for random computer pick in page 2
    let choices = ['paper', 'scissors', 'rock'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    switch(computerChoice){
        case 'paper':
            computerPick.src = 'images/icon-paper.svg';
            computerPick.alt = 'Paper pick';
            computerPickCircle?.classList.add('paper-style');
            break;
        case 'scissors':
            computerPick.src = 'images/icon-scissors.svg';
            computerPick.alt = 'Scissors pick';
            computerPickCircle?.classList.add('scissors-style');
            break;
        case 'rock':
            computerPick.src = 'images/icon-rock.svg';
            computerPick.alt = 'Rock pick';
            computerPickCircle?.classList.add('rock-style');
            break;
    }

    //navigate to page two
    pageOne?.classList.add('hide');
    pageTwo?.classList.remove('hide');
    determineWinner(userPick, computerChoice);
}
function determineWinner(user: string, computer: string) {
    //code for if the results is a draw
    if(user === computer){
        winOrLoseIndicator?.classList.remove('hide');
        winOrLoseText.textContent = 'DRAW';
        return;
    }

    console.log('determine winner is working');

    //code to determine a win or lose situation
    if(user === 'paper' && computer === 'rock'){
        winOrLoseIndicator?.classList.remove('hide');
        winOrLoseText.textContent = 'YOU WIN';
        playerScore++
        return;
    } else if (user === 'scissors' && computer === 'paper'){
        winOrLoseIndicator?.classList.remove('hide');
        winOrLoseText.textContent = 'YOU WIN';
        playerScore++
        return;
    } else if (user === 'rock' && computer === 'scissors'){
        winOrLoseIndicator?.classList.remove('hide');
        winOrLoseText.textContent = 'YOU WIN';
        playerScore++
        return;
    } else {
        winOrLoseIndicator?.classList.remove('hide');
        winOrLoseText.textContent = 'YOU LOSE';
        computerScore++;
        return;
    }

}
function resetForNextRound(){
    winOrLoseIndicator?.classList.add('hide');
    pageOne?.classList.remove('hide');
    pageTwo?.classList.add('hide');
}
function updateScores(){
    if(currentRound){
        roundCount.textContent = `${currentRound}`;
    }
    if(playerScore){
        scoreForPlayer.textContent = playerScore.toString();
    }
    if(computerScore){
        scoreForComputer.textContent = computerScore.toString();
    }
}
function handleNextRound(){
    if(currentRound < maxRounds){
        resetForNextRound();
        updateScores();
        currentRound++;
    } else {
        winOrLoseIndicator?.classList.remove('hide');
        winOrLoseText.textContent = `Game over: ${playerScore} : ${computerScore}`;
        winOrLoseText.style.fontSize = '20px';
        nextRoundBtn.classList.add('hide');
        playAgainBtn?.classList.remove('hide');
    }
}

nextRoundBtn?.addEventListener('click', handleNextRound);

paperBtn?.addEventListener('click', () => {
    /*navigate to page 2 with paper as the 
    selected choice*/
    userPick = 'paper';
    navigateToPageTwo();
})
scissorsBtn?.addEventListener('click', () => {
    /*navigate to page 2 with scissors as the 
    selected choice*/
    userPick = 'scissors';
    navigateToPageTwo();
})
rockBtn?.addEventListener('click', () => {
    /*navigate to page 2 with rock as the 
    selected choice*/
    userPick = 'rock';
    navigateToPageTwo();
})