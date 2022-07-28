const urlBase = 'https://pokeapi.co/api/v2'
const query = {
    pokemonName: 'pokemon'
}
export async function FetchDataOne(pokemon) {
    return fetch(`${urlBase}/${query.pokemonName}/${pokemon}`)
}

