import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {

  return (
<BrowserRouter>
      <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer destacados='Productos destacados' productos='Otros productos' oferta='En oferta' />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer destacados='Productos destacados' productos='Otros productos' oferta='En oferta'/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/*' element={<Navigate to='/' replace />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

