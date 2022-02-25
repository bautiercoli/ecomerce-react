import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = ({destacados, productos, oferta}) => {

    return (
        <div className="contenedor">
            <h1>{ destacados }</h1>
            <h2>{ productos }</h2>
            <h2>{ oferta }</h2>
        </div>
    )
}

export default ItemListContainer