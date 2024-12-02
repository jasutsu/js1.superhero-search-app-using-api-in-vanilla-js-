const updateActiveTabMarkup = (allTabHeads, allTabBodies, activeTab) => {
    updateActiveTabHead(allTabHeads, activeTab);
    updateActiveTabBody(allTabBodies, activeTab);
};

const updateActiveTabHead = (allTabHeads, activeTab) => {
    // hide all tab heads first
    allTabHeads.forEach(tabHead => tabHead.classList.remove('active-tab'));

    // Activate the active tab
    allTabHeads[activeTab-1].classList.add('active-tab');
};

const updateActiveTabBody = (allTabBodies, activeTab) => {
    // hide all tab bodies first
    allTabBodies.forEach(tabBody => tabBody.classList.remove('show-tab'));

    // Activate the active tab
    allTabBodies[activeTab-1].classList.add('show-tab');
};

export { updateActiveTabMarkup };