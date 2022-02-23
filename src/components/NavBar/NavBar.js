import React from 'react'
import './NavBar.css';

function NavBar() {
    return (
    <div className='NavBar'>
            <div className='titulo'>ecomerce</div> {/*el ecomerce esta donde iria el titulo pero por ahora no se que poner */}
            <div>
            <button className='NavBarButton'>Inicio</button>
            <button className='NavBarButton'>Productos</button>
            <button className='NavBarButton'>Sobre Nosotros</button>
            <button className='NavBarButton'>Carrito</button>
        </div>
    </div>
    )
}

export default NavBar