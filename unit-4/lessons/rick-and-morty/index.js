console.log("rick and morty works");
/* 
*FETCH API

*The Fetch is an Asynchronous fx
    *we don't know how long it will take to get a response
    *we have to write code to wait for the Promise to resolve

* When we use the async - await functionality we should use a try catch
*/

/* 
*Fetch Structure

*Identify the url and store it in a variable
*conduct the fetch and wait the response. We will store it in a variable called "response"
*

*/
async function fetchRickAndMortyCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    let response = await fetch(url);
    let data = await response.json()

    displayRickAndMortyCharacters(data.results);
  } catch (error) {
  console.error(error);
    }
}

fetchRickAndMortyCharacters();

function displayRickAndMortyCharacters(characterData) {
console.log(characterData);
let characterContainer = document.querySelector(".container");


characterData.forEach(character => {
    //Creating Image
    let characterImageElement = document.createElement("img");
    characterImageElement.src = character.image;
    characterImageElement.classList.add("rounded");
    //Creating Character Name
    let characterNameElement = document.createElement("h3");
    characterNameElement.textContent = character.name;
    //Creating Gender
    let characterGenderElement = document.createElement("p");
    characterGenderElement.textContent = "Gender: " + character.gender;
    // Building the HTML
    characterContainer.appendChild(characterNameElement);
    characterContainer.appendChild(characterGenderElement);

    console.log(character.name);
    console.log(character.gender);
    console.log(character.location.name);
    console.log(character.image);
    console.log(character);


});
}
