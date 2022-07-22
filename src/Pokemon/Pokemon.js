import React, { useEffect } from "react"
import {useState} from "react"
import Button from "../Elementos/Button/Button"


const Pokemon = (props) => {

    const [urlPokemon, setUrlPokemon] = useState('')
    const [urlPokemonBack, setUrlPokemonBack] = useState('')
    const [urlPokemonShiny, setUrlPokemonShiny] = useState('')
    const [urlPokemonShinyBack, setUrlPokemonShinyBack] = useState('')
    const [urlPokemonFamale, setUrlPokemonFamale] = useState('')
    const [urlPokemonFamaleBack, setUrlPokemonFamaleBack] = useState('')

    const [radio, setRadio] = useState('Normal')

    const [pokemonName, setPokemonName] = useState('pikachu')
    const [pokemonInput, setPokemonInput] = useState('')
    
    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    
    const [habilidad, sethabilidad] = useState('')
    const [movimientos, setMovimientos] = useState('')
    const [experiencia, setExperiencia] = useState('')

    const [estadisticas, setEstadisticas] = useState('') 
    

    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => res.json())
            .then(
                (data) => {
                    
                    setUrlPokemon(data.sprites.front_default)
                    setUrlPokemonBack(data.sprites.back_default)
                    setUrlPokemonShiny(data.sprites.front_shiny)
                    setUrlPokemonShinyBack(data.sprites.back_shiny)
                    setUrlPokemonFamale(data.sprites.front_female)
                    setUrlPokemonFamaleBack(data.sprites.back_female)

                    setCodigo(data.id)
                    setNombre(data.name)
                    setTipo(data.types.map(t => (t.type.name + (', '))))
                    setPeso(data.weight)
                    setAltura(data.height)
                    sethabilidad(data.abilities.map(e => ((e.ability.name + ', ' ))))
                    setMovimientos(data.moves.map(m => (m.move.name + ', ')))
                    setEstadisticas(data.stats.map(s => (s.stat.name + ' ' + s.base_stat + ', '))) 
                    

                    setExperiencia(data.base_experience)


                    console.log(data.stats)
                    console.log(data)
                    
                }
            )
    }, [pokemonName] )

    const handleChange = (event) => {
        setPokemonInput(event.target.value)
    }

    const handleChangeRadius = (event) => {
        setRadio(event.target.value)
    }

    const handleClick = () => {

        setPokemonName(pokemonInput)

    }
    
    let url1, url2, descript

    if (radio === 'Famale') {
        url1 = urlPokemonFamale
        url2 = urlPokemonFamaleBack
        descript = 'pokemon famale'
    }
    else if (radio === 'Shiny') {
        url1 = urlPokemonShiny
        url2 = urlPokemonShinyBack
        descript = 'pokemon shiny'

    } else {
        url1 = urlPokemon
        url2 = urlPokemonBack
        descript = 'pokemon normal'
    }

    return (
        <>
            <input type="text" onChange={(e) => handleChange(e)}/>
            <Button enviar={handleClick} name='go!'/>
            <br />
            <img src={url1} alt={descript}/>
            <img src={url2} alt={descript}/>
            <input type="radio" value='Normal'onChange={handleChangeRadius} checked={radio ===  'Normal' ? true : false} id ='pNormal'/>
            <label>Normal</label>
            <input type="radio" value='Shiny' onChange={handleChangeRadius} checked={radio === 'Shiny' ? true : false} id='pShiny'/>
            <label>Shany</label>
            <input type="radio" value='Famale'onChange={handleChangeRadius} checked={radio ===  'Famale' ? true : false} id ='pFamale'/>
            <label>Famale</label>
            
            <div>
                <div>
                    <p>#: {codigo}</p>
                    <p>nombre: {nombre}</p>
                    <p>tipo: {tipo}</p>
                    <p>Peso: {peso}</p>
                    <p>Altura: {altura}</p>
                    <p>Habilidad/es: {habilidad}</p>
                    <p>Movimiento/os: {movimientos}</p>
                    <p>Exp Base: {experiencia}</p>
                    <p>stat: {estadisticas}</p> 
                </div>
            </div> 
        </>
    )
}

export default Pokemon