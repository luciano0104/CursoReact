import './App.css';
import Menu from '../src/components/NavBar/NavBar' 
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <div className="App">
      <Menu/>
      <ItemListContainer greeting="Seremos los productos"/>
    </div>
  );
}

export default App;
