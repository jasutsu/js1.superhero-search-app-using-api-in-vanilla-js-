// Decouple different behaviours of the app
import { searchForm, searchList, allData, updateSearchItems } from "./search.js";
import { allTabHeads, updateActiveTabMarkup } from "./activateTab.js";
import { updateHtmlMarkupWithSelectedHero } from "./heroHtml.js";
// Show Current Active Tab
let activeTab = 1;
document.addEventListener('DOMContentLoaded', updateActiveTabMarkup(activeTab));

// Update stats based on specific tab selection
allTabHeads.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.id;
        activeTab = tabId;
        updateActiveTabMarkup(activeTab);
    });
});

// Disable default search form submission
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

// Fetch superheroes on search input
searchForm.search.addEventListener('keyup', () => {
    searchList.innerHTML = "";
    const searchText = searchForm.search.value;
    if (searchText.length > 0) {
        updateSearchItems(searchText);
    }
});

// Update HTML Markup on a super hero selection from search results
searchList.addEventListener('click', (event) => {
    const heroId = event.target.dataset.id;
    const selectedHero = allData.filter(hero => {
        return hero.id === heroId;
    })[0];
    updateHtmlMarkupWithSelectedHero(selectedHero);
    searchList.innerHTML = "";
});