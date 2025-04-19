import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import EditPokemon from './pages/EditPokemon';
import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';
import CreatePokemon from './pages/CreatePokemon'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/edit/:id" element={<EditPokemon />} />
        <Route path="/new" element={<CreatePokemon />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
