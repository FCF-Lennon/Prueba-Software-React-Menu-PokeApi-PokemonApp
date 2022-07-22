import React, {useEffect, useState} from 'react'

const ListaPokemones = (props) => {

    const [pokemons, setPokemons] = useState([])

    useEffect ( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then(res => res.json())
            .then((data) => {
                setPokemons(data.results)
                console.log(data.results)
            })
    }, [])

    return  (
        <>
            {pokemons.map( (pokemon) => {
                return (
                    <li key={pokemon.name}>{pokemon.name}</li>
                )
            })}
        </>
    )
}

export default ListaPokemones