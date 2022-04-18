import React from 'react'
import './Logo.css';

function Logo() {
    return (
        <div><img src={require('../../imagenes/titulo.png')} alt="" className='logo'></img></div>
    )
}

export default Logo