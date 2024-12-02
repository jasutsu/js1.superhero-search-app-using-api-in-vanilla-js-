const fetchSuperHeroes = async(searchText) => {
    const url = `https://www.superheroapi.com/api.php/727054372039115/search/${searchText}`;
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP Error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch(error) {
        console.error('Fetch Error: ', error);
        return null;
    }
};

export { fetchSuperHeroes };