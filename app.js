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
    allData = heroes;
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

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
});



// Load Stats for the selected super hero
searchList.addEventListener('click', (event) => {
    const searchId = event.target.dataset.id;
    const singleHero = allData.filter(dataItem => {
        return dataItem.id === searchId;
    })[0];
    searchList.innerHTML = "";
    showSuperheroDetails(singleHero);
});

const showSuperheroDetails = (heroData) => {
    const heroName = document.querySelector('.app-body-content-list .name');
    const thumbnail = document.querySelector('.app-body-content-thumbnail');

    heroName.innerHTML = heroData.name;
    thumbnail.innerHTML = `
    <img src = "${heroData.image.url}">
    `;

    const powerstats = document.querySelector('.powerstats');
    const biography = document.querySelector('.biography');
    const appearance = document.querySelector('.appearance');
    const connections = document.querySelector('.connections');

    powerstats.innerHTML = `
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>intelligence</span>
            </div>
            <span>${heroData.powerstats.intelligence}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>strength</span>
            </div>
            <span>${heroData.powerstats.strength}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>speed</span>
            </div>
            <span>${heroData.powerstats.speed}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>durability</span>
            </div>
            <span>${heroData.powerstats.durability}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>power</span>
            </div>
            <span>${heroData.powerstats.power}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>combat</span>
            </div>
            <span>${heroData.powerstats.combat}</span>
        </li>
    `;

    biography.innerHTML = `
        <li>
            <span>full name</span>
            <span>${heroData.biography['full-name']}</span>
        </li>
        <li>
            <span>alert-egos</span>
            <span>${heroData.biography['alter-egos'] ? heroData.biography['alter-egos'] : "no alter egos found."}</span>
        </li>
        <li>
            <span>aliases</span>
            <span>${heroData.biography.aliases.join(', ')}</span>
        </li>
        <li>
            <span>place-of-birth</span>
            <span>${heroData.biography['place-of-birth']}</span>
        </li>
        <li>
            <span>first-apperance</span>
            <span>${heroData.biography['first-appearance']}</span>
        </li>
        <li>
            <span>publisher</span>
            <span>${heroData.biography.publisher}</span>
        </li>
    `;

    appearance.innerHTML = `
        <li>
            <span>
                <i class = "fas fa-star"></i> gender
            </span>
            <span>${heroData.appearance.gender}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> race
            </span>
            <span>${heroData.appearance.race}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> height
            </span>
            <span>${heroData.appearance.height[0]}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> weight
            </span>
            <span>${heroData.appearance.weight[0]}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> eye-color
            </span>
            <span>${heroData.appearance['eye-color']}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> hair-color
            </span>
            <span>${heroData.appearance['hair-color']}</span>
        </li>
    `;

    connections.innerHTML = `
        <li>
            <span>group--affiliation</span>
            <span>${heroData.connections['group-affiliation']}</span>
        </li>
        <li>
            <span>relatives</span>
            <span>${heroData.connections.relatives}</span>
        </li>
    `;
};