const allTabHeads = document.querySelectorAll('.tab-head-single');
const allTabBodies = document.querySelectorAll('.tab-body-single');

const updateActiveTabMarkup = (activeTab) => {
    updateActiveTabHead(activeTab);
    updateActiveTabBody(activeTab);
};

const updateActiveTabHead = (activeTab) => {
    // hide all tab heads first
    allTabHeads.forEach(tabHead => tabHead.classList.remove('active-tab'));

    // Activate the active tab
    allTabHeads[activeTab-1].classList.add('active-tab');
};

const updateActiveTabBody = (activeTab) => {
    // hide all tab bodies first
    allTabBodies.forEach(tabBody => tabBody.classList.remove('show-tab'));

    // Activate the active tab
    allTabBodies[activeTab-1].classList.add('show-tab');
};

export { updateActiveTabMarkup };