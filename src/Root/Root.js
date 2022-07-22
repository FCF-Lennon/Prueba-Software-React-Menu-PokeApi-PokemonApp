
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './root.css';


const Root = (props)  => {

    return (
        <div className='ctn-gui'>
            <aside className="ctn-aside">
                <Link to='/combate'>Combate</Link>
                <Link to='/historial'>Historial</Link>
                <Link to='/pokemon'>Pokemon</Link>
                <Link to='/pokedex'>Pokedex</Link>
            </aside> 
            <main> 
                <Outlet />
            </main>       
        </div>
    )
}; 

export default Root;