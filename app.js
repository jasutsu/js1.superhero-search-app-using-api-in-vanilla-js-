import { fetchSuperHeroes } from "./superhero.js";
import { updateActiveTabMarkup } from "./activateTab.js";

const searchList = document.getElementById('search-list');
const searchForm = document.querySelector('.app-header-search');
const allTabHeads = document.querySelectorAll('.tab-head-single');
const allTabBodies = document.querySelectorAll('.tab-body-single');

let activeTab = 1;
document.addEventListener('DOMContentLoaded', updateActiveTabMarkup(allTabHeads, allTabBodies, activeTab));

searchForm.search.addEventListener('keyup', () => {
    searchList.innerHTML = "";
    const searchText = searchForm.search.value;
    if (searchText.length > 0) {
        updateSearchItems(searchText);
    }
});

const updateSearchItems = async (searchText) => {
    const data = await fetchSuperHeroes(searchText);
    data.forEach(hero => {
        const searchItem = document.createElement('div');
        searchItem.classList.add('search-list-item');
        searchItem.innerHTML = `
            <img src = "${hero.image.url}" alt = "hreo caption">
            <p>${hero.name}</p>
        `;
        searchList.appendChild(searchItem);
    });
};