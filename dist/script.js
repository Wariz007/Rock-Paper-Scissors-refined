"use strict";
//pages and navigation btns selection
const rulesPageCloseBtn = document.querySelector('.rules-close-button');
const rulesBtn = document.querySelector('.rules-btn');
const rulesPage = document.querySelector('.rules-page');
const gamePage = document.querySelector('.gamePage');
const pageOne = document.querySelector('.page-one');
const pageTwo = document.querySelector('.page-two');
//code for when the cancel btn in rules page is clicked, we navigate to page one
rulesPageCloseBtn === null || rulesPageCloseBtn === void 0 ? void 0 : rulesPageCloseBtn.addEventListener('click', () => {
    rulesPage === null || rulesPage === void 0 ? void 0 : rulesPage.classList.add('hide');
    gamePage === null || gamePage === void 0 ? void 0 : gamePage.classList.remove('hide');
});
/*code for when the rules btn is clicked in page one,
we navigate to remind the player of the rules*/
rulesBtn === null || rulesBtn === void 0 ? void 0 : rulesBtn.addEventListener('click', () => {
    rulesPage === null || rulesPage === void 0 ? void 0 : rulesPage.classList.remove('hide');
    gamePage === null || gamePage === void 0 ? void 0 : gamePage.classList.add('hide');
});
//rock, paper, scissors btns selection
const paperBtn = document.querySelector('.paper-btn');
const rockBtn = document.querySelector('.rock-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
//selection for dynamic pick for page two
const playerPick = document.getElementById('player-pick');
const playerPickCircle = document.querySelector('.player-pick-circle');
let userPick = '';
function navigateToPageTwo() {
    //code for player pick in page 2
    playerPickCircle === null || playerPickCircle === void 0 ? void 0 : playerPickCircle.classList.remove('paper-style', 'scissors-style', 'rock-style');
    switch (userPick) {
        case 'paper':
            playerPick.src = 'images/icon-paper.svg';
            playerPick.alt = 'Paper pick';
            playerPickCircle === null || playerPickCircle === void 0 ? void 0 : playerPickCircle.classList.add('paper-style');
            break;
        case 'scissors':
            playerPick.src = 'images/icon-scissors.svg';
            playerPick.alt = 'Scissors pick';
            playerPickCircle === null || playerPickCircle === void 0 ? void 0 : playerPickCircle.classList.add('scissors-style');
            break;
        case 'rock':
            playerPick.src = 'images/icon-rock.svg';
            playerPick.alt = 'Rock pick';
            playerPickCircle === null || playerPickCircle === void 0 ? void 0 : playerPickCircle.classList.add('rock-style');
            break;
        default:
            console.error('Invalid user pick', userPick);
            return;
    }
    //navigate to page two
    pageOne === null || pageOne === void 0 ? void 0 : pageOne.classList.add('hide');
    pageTwo === null || pageTwo === void 0 ? void 0 : pageTwo.classList.remove('hide');
}
paperBtn === null || paperBtn === void 0 ? void 0 : paperBtn.addEventListener('click', () => {
    /*navigate to page 2 with paper as the
    selected choice*/
    userPick = 'paper';
    navigateToPageTwo();
});
scissorsBtn === null || scissorsBtn === void 0 ? void 0 : scissorsBtn.addEventListener('click', () => {
    /*navigate to page 2 with scissors as the
    selected choice*/
    userPick = 'scissors';
    navigateToPageTwo();
});
rockBtn === null || rockBtn === void 0 ? void 0 : rockBtn.addEventListener('click', () => {
    /*navigate to page 2 with rock as the
    selected choice*/
    userPick = 'rock';
    navigateToPageTwo();
});
