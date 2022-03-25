import { useCartContext } from "../../context/CartContext"
import './Cart.css'

function Cart() {
    const { cartList, clear } = useCartContext()
    return (
        <div>
            { cartList.map(prod => <li key={prod.id}>
            <div>
                <div>
                    <img src={prod.pictureURL} alt="" />
                </div>
            <div>
                <p><li>{prod.title}</li></p>
                <p><li>Cantidad: {prod.cantidad}</li></p>
                <p><li>Precio: ${prod.cantidad * prod.price}</li></p>
            </div>
        </div>
            </li>) }
        <button className="clearCart" onClick={clear}>Vaciar carrito</button>
        </div>
    )
}

export default Cart 