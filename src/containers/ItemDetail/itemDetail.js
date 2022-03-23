import './ItemDetail.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import { useState } from 'react'
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ prod }) => {

    const [count, setCount] = useState(1)

    const sumar = ()=> {
        setCount(count+1)
    }

    const restar = ()=> {
        setCount(count-1)
    }
    const { addItem, cartList } = useCartContext()

    const onAdd = count =>{
        console.log(`Agregaste ${count} productos`)
    }
    console.log(cartList)
    return (
        <div className='detalle'>
            <div>
                <img  className='detalle__img' src={prod.img} alt={prod.title}></img>
            </div>
            <div className='detalle__datos'>
                <div>
                    <p>{prod.title}</p>
                    <p>{prod.description}</p>
                    <p>${prod.price}</p>
                </div>
                <div>
                <ItemCount count={count} sumar={sumar} restar={restar} stock={prod.stock} initial={1} onAdd={onAdd}/>
                <Link to='/'>
                <button className='detalle__button'>Volver a productos</button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail