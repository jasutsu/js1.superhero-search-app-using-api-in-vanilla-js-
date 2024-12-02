const searchForm = document.querySelector('.app-header-search');
const searchList = document.getElementById('search-list');
let allData = null;
let currentFetchController = null;

const updateSearchItems = async (searchText) => {
    // Abort any previous fetch controller to replace new one
    // This is to prevent slower responses accidentlly
    // overriding faster responses
    if(currentFetchController) {
        currentFetchController.abort();
    }
    currentFetchController = new AbortController();
    const { signal } = currentFetchController;
    
    try {
        allData = await fetchSuperHeroes(searchText, signal);
        allData.forEach(hero => {
            const searchItem = document.createElement('div');
            searchItem.classList.add('search-list-item');
            searchItem.innerHTML = `
                <img src = "${hero.image.url}" alt = "hero caption">
                <p data-id="${hero.id}">${hero.name}</p>
            `;
            searchList.appendChild(searchItem);
        });
    } catch(error) {
        if(error.name !== 'AbortError') {
            console.error('Error Fetching Superheroes: ', error);
        }
    }
};

const fetchSuperHeroes = async(searchText, signal) => {
    const url = `https://www.superheroapi.com/api.php/727054372039115/search/${searchText}`;
    return fetch(url, { signal })
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(`Fetch Successful for "${searchText}"`);
            return data.results;
        })
        .catch(error => {
            if(error.name === 'AbortError') {
                console.log(`Fetch Aborted for "${searchText}"`);
            } else {
                console.error('Fetch Error: ', error);
            }
            throw error;
        });
};

export { searchForm, searchList, allData, updateSearchItems };