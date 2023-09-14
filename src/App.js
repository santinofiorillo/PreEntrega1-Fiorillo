import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting= {"Bienvenidos a mi tienda "}/>
    </div>
  );
}

export default App;
