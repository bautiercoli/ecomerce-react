import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({productos, destacados, oferta}) {

    return (
        <div className="contenedor">
            <h1>{ destacados }</h1>
            <h2>{ productos }</h2>
            <h2>{ oferta }</h2>
            <ItemList></ItemList>
        </div>
    )
}


export default ItemListContainer




