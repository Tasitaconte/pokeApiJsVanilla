import { funcion } from "./funtion.js";
const pokemonContainer = document.querySelector('.pokemon-container')
const spinner = document.querySelector("#spinner")
 let array = []
function pokemon(id) {
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            funcion.guardarLocal(data),
                renderPokemon(funcion.obtenerLocal())
            spinner.style.display = "none"
        }
        )
        .catch(e => console.error(new Error(e)));
}

function pokemons(number) {
    spinner.style.display = "block";
    setTimeout(() => {
        for (let i = 1; i <= number; i++) {
            pokemon(i)
        }
    }, 300);
}

function renderPokemon(pokemon) {


    const card = document.createElement('div');
    const sprite = document.createElement('img');
    const name = document.createElement('h4');
    const id = document.createElement('h5');
    // 
    card.classList.add('card', 'mx-auto', 'mt-1', 'cardTam')
    sprite.classList.add('card-img-top', 'img-fluid', 'imgTam')
    id.classList.add('textId');
    sprite.src = pokemon.img;
    // 
    name.classList.add('letraPokemon');
    name.textContent = pokemon.nombre;
    // 
    id.textContent = pokemon.id;
    // 
    card.appendChild(id)
    card.appendChild(sprite);
    card.appendChild(name);
    pokemonContainer.appendChild(card);
}

function comparacion(a,b) {
    return a-b;
}

export const api = {
    pokemon,
    pokemons
}
