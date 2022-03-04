import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

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
            <ItemList></ItemList>
        </div>
    )
}


export default ItemListContainer




