import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import PokemonCard from '../Components/PokemonCard';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const { data, error } = await supabase
      .from('pokemon')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching Pokémon:', error);
    } else {
      setPokemon(data);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600 hover:underline mb-2 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">Pokémon List</h1>
      <Link to="/new" className="bg-green-500 text-white px-6 py-2 rounded mb-4 inline-block hover:bg-green-700">
        Add New Pokémon
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemon.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
