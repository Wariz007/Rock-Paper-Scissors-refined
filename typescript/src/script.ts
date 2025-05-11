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

let userPick: string = '';

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
    console.log('random pick is:', computerChoice);

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
}

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