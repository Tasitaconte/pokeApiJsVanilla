import { variables } from "./env.js";
const pokemonContainer = document.querySelector('.pokemon-container')



function pokemon(id) {
    var url = variables.urlApi + id;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data),
                renderPokemon(data)
        }
        )
        .catch(e => console.error(new Error(e)));
}

function pokemons(number) {
    for (let i = 152; i < 252; i++) {
        pokemon(i)
    }
}

function renderPokemon(pokemon) {

    const card = document.createElement('div');
    card.classList.add('card','mx-auto','mt-1')
    card.style.width = '250px';
    card.style.height = '250px';

    const sprite = document.createElement('img');
    const name = document.createElement('h4');

    sprite.style.width = 'auto'
    sprite.style.height = '200px'
    sprite.classList.add('card-img-top', 'img-fluid')

    sprite.src = pokemon.sprites.other.dream_world.front_default
    name.textContent = pokemon.name;

    card.appendChild(sprite);
    card.appendChild(name);

    pokemonContainer.appendChild(card)
}


export const api = {
    pokemon,
    pokemons
}
