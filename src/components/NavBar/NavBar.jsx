import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useCartContext } from '../../context/CartContext';

function NavBar() {
    
    const { totalProducts } = useCartContext()

    const valueItemCart = totalProducts();

    return (
        <div className='NavBar'>
            <NavLink to='/'>
            <Logo/>
            </NavLink>
            <div className="NavBarmenu">
                <div>
                    <NavLink to='category/Teclados'><button className='NavBar__button'>Teclados</button></NavLink>
                    <NavLink to='category/Mouses'><button className='NavBar__button'>Mouses</button></NavLink>
                    <NavLink to='category/Componentes'><button className='NavBar__button'>Componentes</button></NavLink>
                </div>
                </div>
                <div className='cartWidget'>
        <NavLink to="cart">
            <CartWidget />  
        </NavLink>
        {valueItemCart === 0 ? (
            <></>
            ) : (
                <div className='cartProducts'>
                    <div className='number'>{totalProducts()}</div>
                </div>
            )}
            </div>
        </div>
    )
}

export default NavBar