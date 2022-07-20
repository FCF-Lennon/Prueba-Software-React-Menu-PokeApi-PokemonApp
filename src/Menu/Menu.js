import './Menu.css';
import { Link, Outlet } from 'react-router-dom'

const Menu = (props)  => {
    return (
        <div className='ctn-gui'>
            <aside className="ctn-aside">
                <p>Menu</p>
                <nav className='ctn-menu'>
                    <ul>
                        <li><Link to='/combate'>Combate</Link></li>
                        <li><Link to='/historial'>Historial</Link></li>
                        <li><Link to='/pokemon'>Pokemon</Link></li>
                        <li><Link to='/pokedex'>Pokedex</Link></li>
                    </ul>
                </nav>
            </aside> 
            <main>
                <div className='ctn-buscador'>
                    <input type={'text'} placeholder={' Buscar'}></input>
                    <button>Go!</button>
                </div>
                <Outlet />
            </main>       
        </div>
    )
}; 

export default Menu;