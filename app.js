// Decouple different behaviours of the app
import { initSearch } from "./search.js";
import { updateActiveTabMarkup } from "./activateTab.js";

// Show Current Active Tab
let activeTab = 1;
document.addEventListener('DOMContentLoaded', updateActiveTabMarkup(activeTab));

// Fetch from SuperHero API whenever search is performed
initSearch();