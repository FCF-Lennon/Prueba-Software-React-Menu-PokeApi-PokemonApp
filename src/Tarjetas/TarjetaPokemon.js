

function TarjetaPokemon ({  cod, 
                            nombre, 
                            imagenFrontal, 
                            imagenTrasera,
                            tipo, 
                            peso, 
                            altura,
                            exp_base,
                            habilidades,
                            estadisticas
                            }) {

    return (
        <div className='ctn-tarjeta'>
            <div className='tarjeta'>
                <div className='ctn-tarjeta-img'>
                    <img src={imagenFrontal} alt={nombre} />
                    <img src={imagenTrasera} alt={nombre} />
                </div>
                <div className='ctn-tarjeta-info'>

                    <div className='titulo'>
                        <h1>{nombre}</h1>
                        <p>#{cod}</p>
                    </div>

                    <div className='ctn-info'>
                        <div className='info'>
                        <label>Tipo:</label>
                        <p>{tipo}</p>
                        </div>

                        <div className='info'>
                        <label>Peso:</label>
                        <p>{peso}</p>
                        </div>

                        <div className='info'>
                        <label>Altura:</label>
                        <p>{altura}</p>
                        </div>

                        <div className='info'>
                        <label>Exp Base:</label>
                        <p>{exp_base}</p>
                        </div>


                        <div className='info'>
                        <label>Habilidades:</label>
                        <p>{habilidades}</p>
                        </div>

                        <div className='info'>
                        <label>Estadisticas:</label>
                        <p>{estadisticas}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default TarjetaPokemon