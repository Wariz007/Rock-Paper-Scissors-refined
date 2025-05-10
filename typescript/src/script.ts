const rulesPageCloseBtn = document.querySelector('.rules-close-button');
const rulesPage = document.querySelector('.rules-page');
const gamePage = document.querySelector('.gamePage');

rulesPageCloseBtn?.addEventListener('click', () => {
    rulesPage?.classList.add('hide');
    gamePage?.classList.remove('hide');
})