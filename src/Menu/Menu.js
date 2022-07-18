import './Menu.css';

function Menu () {
    return (
        <div className='ctn-gui'>
            <aside className="ctn-aside">
                <p>Menu</p>
                <nav className='ctn-menu'>
                    <ul>
                        <li><a href={'home'}>Historial Busqueda</a></li>
                        <li><a href={'home'}>Lista Pokemones</a></li>
                        <li><a href={'home'}>Combate</a></li>
                    </ul>
                </nav>
            </aside> 
            <main>
                <div className='ctn-buscador'>
                    <input type={'text'} placeholder={' Buscar'}></input>
                    <button>Go!</button>
                </div>
                <p>contenido central</p>
            </main>       
        </div>
    )
}; 

export default Menu;