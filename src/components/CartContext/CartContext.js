import {createContext,useState, useContext} from 'react'

 const CartContext = createContext([]) 

 export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const isInCart = (id) => {
        if (cartList.some( (prod) =>prod.id === id )) {
            return(true)
        } else {
            return(false)
        }
    }

    const addItem = (prod) => {
        if (isInCart === true) {
            prod.id = prod.id++
        } else {
            setCartList( [ ...cartList, prod ] )
        } 
    }

    const clear=()=>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider 