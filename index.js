document.querySelector("#search").addEventListener("click", fetchPokemon)


function lowerCaseName(string) {
    return string.toLowerCase();
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


function fetchPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(resp => resp.json())
    .then(data => {
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="${data.name}"
          id="pokemonImage"
        />
      </div>
      <div class="pokemonInfo">
        <h1>${data.name}</h1>
        <p>Weight: ${data.weight}</p>
        <p>Order: ${data.order}</p>
      </div>`;
    
      document.getElementById("pokemonImage").addEventListener("mouseover", function() {
        alert(`${data.name}`);
    });


    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            toggleDarkMode();
        }
    });


    document.querySelectorAll('.pokemonInfo').forEach(function(element) {
        element.style.color = '#dddddd'; 
    });


    })
    .catch((err) => {
        console.log("Pokemon not found", err);
});

e.preventDefault();
}
