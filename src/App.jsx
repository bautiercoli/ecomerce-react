import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';


function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer destacados='Productos destacados' productos='Otros productos' oferta='En oferta' />} />
        <Route path='category/:categoryId' element={<ItemListContainer destacados='Productos destacados' productos='Otros productos' oferta='En oferta'/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/*' element={<Navigate to='/' replace />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;

