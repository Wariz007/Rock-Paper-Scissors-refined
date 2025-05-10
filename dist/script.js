"use strict";
const rulesPageCloseBtn = document.querySelector('.rules-close-button');
const rulesPage = document.querySelector('.rules-page');
const gamePage = document.querySelector('.gamePage');
rulesPageCloseBtn === null || rulesPageCloseBtn === void 0 ? void 0 : rulesPageCloseBtn.addEventListener('click', () => {
    rulesPage === null || rulesPage === void 0 ? void 0 : rulesPage.classList.add('hide');
    gamePage === null || gamePage === void 0 ? void 0 : gamePage.classList.remove('hide');
});
