var elPokemons = $_(".pokemons");
var elPokemonTemplate = $_("#pokemon-card-template").content;

elPokemons.innerHTML = "";

var createPokemonElement = function (pokemon) {
  var elNewPokemon = elPokemonTemplate.cloneNode(true);

  elNewPokemon.querySelector(".pokemon__img").src = pokemon.img;
  elNewPokemon.querySelector(".pokemon__img").alt = pokemon.name;
  elNewPokemon.querySelector(".pokemon__name").textContent = pokemon.name;
  elNewPokemon.querySelector(".pokemon__type").textContent =
    pokemon.type.join(", ");

  return elNewPokemon;
};

pokemons.forEach(function (pokemon) {
  elPokemons.appendChild(createPokemonElement(pokemon));
});
