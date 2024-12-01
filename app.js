const allTabsBody = document.querySelectorAll('.tab-body-single');
const allTabsHead = document.querySelectorAll('.tab-head-single');
const searchForm = document.querySelector('.app-header-search');
let searchList = document.getElementById('search-list');

let activeTab = 1;
let allData;



// Handle Classes inside of Tabs head and body
const loadActiveTab = () => {
    showActiveTabHead();
    showActiveTabBody();
};

const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));
const showActiveTabHead = () => allTabsHead[activeTab - 1].classList.add('active-tab');

const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
const showActiveTabBody = () => {
    hideAllTabBody();
    allTabsBody[activeTab - 1].classList.add('show-tab');
};

document.addEventListener('DOMContentLoaded', loadActiveTab);
allTabsHead.forEach(singleTabHead => {
    singleTabHead.addEventListener('click', () => {
        hideAllTabHead();
        activeTab = singleTabHead.dataset.id;
        loadActiveTab();
    });
});



// Fetch Super Hero API for the search field
const fetchAllSuperHero = async (searchText) => {
    let url = `https://www.superheroapi.com/api.php/727054372039115/search/${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(response => showSearchList(response.results))
        .catch(error => console.log(`Error: ${error}`));
};

const showSearchList = heroes => {
    searchList.innerHTML = "";
    heroes.forEach(hero => {
        const heroElement = document.createElement('div');
        heroElement.classList.add('search-list-item');
        heroElement.innerHTML = `
            <img src = "${hero.image.url ? hero.image.url : ""}" alt = "${hero.name}">
            <p data-id="${hero.id}">${hero.name}</p>
        `;
        searchList.appendChild(heroElement);
    });
};

searchForm.search.addEventListener('keyup', () => {
    const searchText = searchForm.search.value;
    if (searchText.length > 1) {
        fetchAllSuperHero(searchText);
    } else {
        searchList.innerHTML = "";
    }
});