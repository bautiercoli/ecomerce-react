import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div>
    <NavBar />
    <ItemListContainer destacados='Productos destacados' productos='Otros productos' oferta=' En oferta'/>
    </div>
  );
}

export default App;