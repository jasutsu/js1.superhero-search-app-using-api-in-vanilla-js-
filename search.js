const initSearch = () => {
    const searchForm = document.querySelector('.app-header-search');
    const searchList = document.getElementById('search-list');

    // Disable default search form submission
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    searchForm.search.addEventListener('keyup', () => {
        searchList.innerHTML = "";
        const searchText = searchForm.search.value;
        if (searchText.length > 0) {
            updateSearchItems(searchText);
        }
    });

    let currentFetchController = null;
    const updateSearchItems = async (searchText) => {
        // Abort any previous fetch controller to replace new one
        if(currentFetchController) {
            currentFetchController.abort();
        }
        currentFetchController = new AbortController();
        const { signal } = currentFetchController;
        
        try {
            const data = await fetchSuperHeroes(searchText, signal);
            data.forEach(hero => {
                const searchItem = document.createElement('div');
                searchItem.classList.add('search-list-item');
                searchItem.innerHTML = `
                    <img src = "${hero.image.url}" alt = "hreo caption">
                    <p>${hero.name}</p>
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
};

export { initSearch };