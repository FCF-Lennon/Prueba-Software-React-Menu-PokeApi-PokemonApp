import React, {useEffect, useState} from 'react'

const ListaPokemones = (props) => {

    const [pokemons, setPokemons] = useState([])

    useEffect ( () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setPokemons(data.results)
            })
    }, [])

    return  (
        <>
            {pokemons.map( (pokemon) => {
                return (
                    <p>{pokemon.name}</p>
                )
            })}
        </>
    )
}

export default ListaPokemones