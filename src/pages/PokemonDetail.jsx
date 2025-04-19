import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase';

const PokemonDetail = () => {
  const { id } = useParams();  
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemonDetail = async () => {
    const { data, error } = await supabase
      .from('pokemon')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching Pokémon details:', error);
    } else {
      setPokemon(data);
    }
  };

  useEffect(() => {
    fetchPokemonDetail();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{pokemon.name}</h1>
      <div className="mt-4">
        <p>Type: {pokemon.type}</p>
        <p>Level: {pokemon.level}</p>
        <p>Created at: {new Date(pokemon.created_at).toLocaleString()}</p>
      </div>
      <Link
        to={`/edit/${pokemon.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4 inline-block"
      >
        Edit Pokémon
      </Link>
    </div>
  );
};

export default PokemonDetail;
