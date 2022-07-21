import React from "react"
import { useEffect, useState } from "react"

const Pokemon = (props) => {

    const [urlPokemon, setUrlPokemon] = useState('')
    const [urlPokemonShiny, setUrlPokemonShiny] = useState('')
    
    const [pokemonName, setPokemonName] = useState('pikachu')
    const [pokemonInput, setPokemonInput] = useState('')
    const [nombre, setNombre] = useState('')
    const [peso, setPeso] = useState('')
   
    const [experiencia, setExperiencia] = useState('0')
    const [altura, setAltura] = useState('0')
    const [radio, setRadio] = useState('Normal')
    const [urlPokemonFamale, setUrlPokemonFamale] = useState('')



    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => res.json())
            .then(
                (data) => {
                    setUrlPokemonShiny(data.sprites.front_shiny)
                    setUrlPokemon(data.sprites.front_female)
                    setNombre(data.name)
                    setPeso(data.weight)
                    setAltura(data.height)
                    setExperiencia(data.base_experience)
                    setUrlPokemonFamale(data.sprites.front_female)
                    
                }
            )
    }, [pokemonName] )

    const handleChange = (event) => {
        setPokemonInput(event.target.value)
    }

    const handleChangeRadius = (event) => {
        setRadio(event.target.value)
        console.log(event.target.value)
    }

    const handleClick = () => {

        setPokemonName(pokemonInput)
        props.radio = 'Normal'
    }

    let url

    if (radio === 'Famale') {
        url = urlPokemonFamale
    }
    else if (radio === 'Shiny') {
        url = urlPokemonShiny
    } else {
        url = urlPokemon
    }

    return (
        <>
            <input type="text" onChange={(e) => handleChange(e)}/>
            <br />
            <img src={url} alt='pokemon shiny'/>
            <div>
                <div>
                    <p>nombre: {nombre}</p>
                    <p>Peso: {peso}</p>
                    <p>Altura: {altura}</p>
                    {/* <p>Habilidades: {habilidades}</p> */}
                    <p>Exp Base: {experiencia}</p>
                </div>

                <input type="radio" value='Normal' onChange={handleChangeRadius} checked={radio === 'Normal' ? true : false}/>
                <label>Normal</label>
                <input type="radio" value='Shiny' onChange={handleChangeRadius} checked={radio === 'Shiny' ? true : false}/>
                <label>Shany</label>
                
                <input type="radio" value='Famale'onChange={handleChangeRadius} checked={radio ===  'Famale' ? true : false}/>
                <label>Famale</label>


                

            </div>
            
            <button onClick={handleClick} >Buscar</button> 
            
        </>
    )
}

export default Pokemon