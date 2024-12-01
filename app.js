const allTabsBody = document.querySelectorAll('.tab-body-single');
const allTabsHead = document.querySelectorAll('.tab-head-single');
const searchForm = document.querySelectorAll('.app-header-search');
let searchList = document.getElementById('search-list');

let activeTab = 1;
let allData;

const loadActiveTab = () => {
    showActiveTabHead();
    showActiveTabBody();
};

const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));
const showActiveTabHead = () => allTabsHead[activeTab-1].classList.add('active-tab');

const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
const showActiveTabBody = () => {
    hideAllTabBody();
    allTabsBody[activeTab-1].classList.add('show-tab');
};

document.addEventListener('DOMContentLoaded', loadActiveTab);
allTabsHead.forEach(singleTabHead => {
    singleTabHead.addEventListener('click', () => {
        hideAllTabHead();
        activeTab = singleTabHead.dataset.id;
        loadActiveTab();
    });
});

// const fetchAllSuperHero = async(searchText) => {

// };