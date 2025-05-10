"use strict";
const rulesPageCloseBtn = document.querySelector('.rules-close-button');
const rulesPage = document.querySelector('.rules-page');
rulesPageCloseBtn === null || rulesPageCloseBtn === void 0 ? void 0 : rulesPageCloseBtn.addEventListener('click', () => {
    rulesPage === null || rulesPage === void 0 ? void 0 : rulesPage.classList.add('hide');
});
