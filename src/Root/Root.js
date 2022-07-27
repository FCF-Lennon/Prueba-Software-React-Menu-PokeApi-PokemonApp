
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Root/root.css';

const Root = (props)  => {

    return (
        <div className='ctn-gui'>
            <aside className="ctn-aside">
                <div>
                    <Link to='/combate'>COMBATE</Link>
                    <Link to='/pokemon'>POKEMON</Link>
                    <Link to='/pokedex'>POKEDEX</Link>
                </div>
            </aside> 
            <main> 
                <Outlet />
            </main>       
        </div>
    )
}; 

export default Root;