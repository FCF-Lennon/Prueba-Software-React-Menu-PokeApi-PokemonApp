import React, {useEffect} from 'react'

const Pokemon = (props) => {

    useEffect ( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.json()).then((data) => (console.log(data)))
    }, [])

    return (
        <>
            Funciona!
        </>
    )
}

export default Pokemon