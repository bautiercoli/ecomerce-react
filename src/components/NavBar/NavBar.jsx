import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className='NavBar'>
            <NavLink to='/'>
            <Logo/>
            </NavLink>
            <div className="NavBarmenu">
                <div>
                    <NavLink to='categoria/Teclados'><button className='NavBar__button'>Teclados</button></NavLink>
                    <NavLink to='categoria/Mouses'><button className='NavBar__button'>Mouses</button></NavLink>
                    <NavLink to='categoria/Componentes'><button className='NavBar__button'>Componentes</button></NavLink>
                </div>
                </div>
                <NavLink to="cart">
                    <CartWidget />
                </NavLink>
        </div>
    )
}

export default NavBar