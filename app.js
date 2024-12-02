import { initSearch } from "./search.js";
import { updateActiveTabMarkup } from "./activateTab.js";

const allTabHeads = document.querySelectorAll('.tab-head-single');
const allTabBodies = document.querySelectorAll('.tab-body-single');

let activeTab = 1;
document.addEventListener('DOMContentLoaded', updateActiveTabMarkup(allTabHeads, allTabBodies, activeTab));

initSearch();