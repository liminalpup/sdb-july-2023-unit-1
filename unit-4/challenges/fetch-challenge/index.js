async function fetchStarWarsCharacters() {
    const url = "https://swapi.dev/api/people/";
    try {
        let response = await fetch(url);
        let data = await response.json();
        displayStarWarsCharacter(data.results);
    } catch (error) {
        console.error(error);

    }
}

async function fetchStarWarsPlanets(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.name;
    } catch (error) {
        console.error(error);

    }
}

async function fetchStarWarsSpecies(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.name;
    } catch (error) {
        console.error(error);

    }
}
fetchStarWarsCharacters();

function displayStarWarsCharacter(characterData) {
    let characterContainer = document.querySelector(".container");
    
    characterData.forEach(async(character) => {
        // character name
        let characterNameElement = document.createElement("h2");
        characterNameElement.textContent = character.name;
        //create homeworld listing
        let characterHomeWorld = document.createElement("h3");
        characterHomeWorld.textContent = await fetchStarWarsPlanets(character.homeworld)
        //create species
        let characterSpecies = document.createElement("h3");
        characterSpecies.textContent = await fetchStarWarsSpecies(character.species);
        //HTML calling
        characterContainer.appendChild(characterNameElement);
        characterContainer.appendChild(characterSpecies);
        characterContainer.appendChild(characterHomeWorld);
        
    });
}
