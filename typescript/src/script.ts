const rulesPageCloseBtn = document.querySelector('.rules-close-button');
const rulesPage = document.querySelector('.rules-page');
rulesPageCloseBtn?.addEventListener('click', () => {
    rulesPage?.classList.add('hide');
})