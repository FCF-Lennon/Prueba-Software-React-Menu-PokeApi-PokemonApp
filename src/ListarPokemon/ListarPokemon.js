import React, {useEffect, useState}  from 'react'
import Tarjetas from '../Tarjetas/Tarjetas'


function ListarPokemon() {

    const [updatePokemones, setUpdatePokemones] = useState([])
    const [cargaPokemones, setCargaPokemones] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

    const getupdatePokemones = async () => {
        const response = await fetch(cargaPokemones)
        const data = await response.json()
        setCargaPokemones(data.next)

        function crearObjetoListaPokemones(resultado) {
            resultado.forEach(async (pokemon) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await response.json()

            setUpdatePokemones(lista => [...lista, data])
            })
        }

        crearObjetoListaPokemones(data.results)

    }


    useEffect(() => {
        getupdatePokemones()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        
        <div className='flex flex-wrap justify-center'>
            
            {updatePokemones.map((pokemon, idx) => ( 
                    <Tarjetas key={idx}  pokemon={pokemon} 
                        cod={pokemon.id}
                        nombre={pokemon.name}
                        imagenfrontal={pokemon.sprites.front_default}
                        tipo={pokemon.types[0].type.name}
                        peso={pokemon.weight}
                        altura={pokemon.height}
                        exp_base={pokemon.base_experience}/>
            ))}
        </div>
        

    )
}

export default ListarPokemon