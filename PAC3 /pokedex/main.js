
/////////////////// MODO DARK-LIGHT ///////////////////////////////


var cols = {
  defecto:"#4A235A",
  oscuro:"#4A235A",
  claro:"#FF00FF"
} 
window.onload=function() { 
  document.body.style.backgroundColor=cols[('claro')];
  var rads = document.getElementsByName("modo");
  for (var i=0;i<rads.length;i++) {
    rads[i].onclick=function() {
      var col = cols[this.value];
      document.body.style.backgroundColor=col;
    }
  }
}



///////ARRAY NUMERO DE POKEMONS////////



////////// FETCH//////////
const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");

var arrayPoks=[fetchPokemon()];
var user= document.getElementById("celda").value;




function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      console.dir(data);
      createPokemon(data);
      spinner.style.display = "none";
    });
}

function fetchPokemons(user,arrayPoks) {
  spinner.style.display = "block";
  for (let i = user; i <= 10; i++) {
    
    if(user){ 
      arrayPoks.lenght=user;
      fetchPokemon(i);
    }
    
  }
}



function createPokemon(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const types = document.createElement("p");
  types.classList.add("types");
  types.textContent = pokemon.types[0].type.name;

  

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(types);
  

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  cardBack.appendChild(progressBars(pokemon.stats));

  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}




