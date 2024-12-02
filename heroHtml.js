const updateHtmlMarkupWithSelectedHero = hero => {
    const thumbnail = document.querySelector('.app-body-content-thumbnail');
    thumbnail.innerHTML = `
        <img src = "${hero.image.url}">
    `;
    
    const heroName = document.querySelector('.app-body-content-list .name');
    heroName.innerText = hero.name;
    
    const powerstats = document.querySelector('.powerstats');
    powerstats.innerHTML = `
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>intelligence</span>
            </div>
            <span>${hero.powerstats.intelligence}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>strength</span>
            </div>
            <span>${hero.powerstats.strength}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>speed</span>
            </div>
            <span>${hero.powerstats.speed}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>durability</span>
            </div>
            <span>${hero.powerstats.durability}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>power</span>
            </div>
            <span>${hero.powerstats.power}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>combat</span>
            </div>
            <span>${hero.powerstats.combat}</span>
        </li>
    `;
    
    const biography = document.querySelector('.biography');
    biography.innerHTML = `
        <li>
            <span>full name</span>
            <span>${hero.biography['full-name']}</span>
        </li>
        <li>
            <span>alert-egos</span>
            <span> ${hero.biography['alter-egos'] ? hero.biography['alter-egos'] : "no alter egos found."}</span>
        </li>
        <li>
            <span>aliases</span>
            <span>${hero.biography.aliases.join(', ')}</span>
        </li>
        <li>
            <span>place-of-birth</span>
            <span>${hero.biography['place-of-birth']}</span>
        </li>
        <li>
            <span>first-apperance</span>
            <span>${hero.biography['first-appearance']}</span>
        </li>
        <li>
            <span>publisher</span>
            <span>${hero.biography.publisher}</span>
        </li>
    `;

    const appearance = document.querySelector('.appearance');
    appearance.innerHTML = `
        <li>
            <span>
                <i class = "fas fa-star"></i> gender
            </span>
            <span>${hero.appearance.gender}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> race
            </span>
            <span>${hero.appearance.race}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> height
            </span>
            <span>${hero.appearance.height[0]}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> weight
            </span>
            <span>${hero.appearance.weight[0]}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> eye-color
            </span>
            <span>${hero.appearance['eye-color']}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> hair-color
            </span>
            <span>${hero.appearance['hair-color']}</span>
        </li>
    `;
    
    const connections = document.querySelector('.connections');
    connections.innerHTML = `
        <li>
            <span>group--affiliation</span>
            <span>${hero.connections['group-affiliation']}</span>
        </li>
        <li>
            <span>relatives</span>
            <span>${hero.connections.relatives}</span>
        </li>
    `;
};

export { updateHtmlMarkupWithSelectedHero };