import React, {useEffect, useState} from 'react'

const ListaPokemones = (props) => {

    const [pokemons, setPokemons] = useState([])

    console.log(pokemons)

    useEffect ( () => {

        async function obtenerPokemons() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5offset=0')
            const data = await response.json()
            setPokemons(data.results)
            
        }
        obtenerPokemons()
    }, [])

    return  (

        <>
            <ul>
                {pokemons.map((pokemon, index) => { 
                    return <li key={index}>{pokemon.name}</li>
                })}
            </ul>
        </>
    )
}

export default ListaPokemones;