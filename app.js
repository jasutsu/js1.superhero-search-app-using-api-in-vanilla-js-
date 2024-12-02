const searchList = document.getElementById('search-list');
const searchForm = document.querySelector('.app-header-search');
const allTabHeads = document.querySelectorAll('.tab-head-single');
const allTabBodies = document.querySelectorAll('.tab-body-single');

let allData;
let activeTab = 1;

// show-tab body
// active-tab head

const updateActiveTabMarkup = () => {
    updateActiveTabHead();
    updateActiveTabBody();
};

const updateActiveTabHead = () => {
    // hide all tab heads first
    allTabHeads.forEach(tabHead => tabHead.classList.remove('active-tab'));

    // Activate the active tab
    allTabHeads[activeTab-1].classList.add('active-tab');
};

const updateActiveTabBody = () => {
    // hide all tab bodies first
    allTabBodies.forEach(tabBody => tabBody.classList.remove('show-tab'));

    // Activate the active tab
    allTabBodies[activeTab-1].classList.add('show-tab');
};

document.addEventListener('DOMContentLoaded', updateActiveTabMarkup);

searchForm.search.addEventListener('keyup', () => {
    console.log(searchForm.search.value);
});

const fetchSuperHeroes = (searchText) => {
    let url = `https://www.superheroapi.com/api.php/727054372039115/search/${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(response => processFetchedSuperHeroes(response))
        .catch(error => console.log('Fetch Error:', error));
};

const processFetchedSuperHeroes()