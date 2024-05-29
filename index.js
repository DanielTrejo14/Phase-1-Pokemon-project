document.querySelector("#search").addEventListener("click", fetchPokemon)

function lowerCaseName(string) {
    return string.toLowerCase();
}

function fetchPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(resp => resp.json())
    .then(data => {
      
})}