import React from 'react'
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({destacados, productos, oferta}) => {

    const onAdd = (count) =>{
        console.log(`Se añadio al carrito ${count} productos`)
    }
    return (
        <div className="contenedor">
            <h1>{ destacados }</h1>
            <h2>{ productos }</h2>
            <ItemCount stock={7} initial={1} onAdd={onAdd} />
            <h2>{ oferta }</h2>
        </div>
    )
}


export default ItemListContainer




