import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import './NavBar.css';

function NavBar() {
    return (
        <div className='NavBar'>
            <Logo/>
            <div className="NavBarmenu">
                <div>
                    <button className='NavBarbutton'>Menú</button>
                    <button className='NavBarbutton'>Productos</button>
                    <button className='NavBarbutton'>Sobre Nosotros</button>
                    <button className='NavBarbutton'>Preguntas Frecuentes</button>
                </div>
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar