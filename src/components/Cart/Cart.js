import { useCartContext } from "../../context/cartContext"

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

            </div>
        </div>
            </li>) }
        <button onClick={clear}>Vaciar carrito</button>
        </div>
    )
}

export default Cart 