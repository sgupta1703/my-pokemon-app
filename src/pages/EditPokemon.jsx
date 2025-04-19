import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory
import { supabase } from '../supabase';

const EditPokemon = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // useNavigate hook
  const [pokemon, setPokemon] = useState({
    name: '',
    type: '',
    level: 1,
  });

  // Fetch Pokémon data to pre-fill the form
  const fetchPokemon = async () => {
    const { data, error } = await supabase
      .from('pokemon')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching Pokémon:', error);
    } else {
      setPokemon(data);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPokemon((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, type, level } = pokemon;

    const { error } = await supabase
      .from('pokemon')
      .update({ name, type, level })
      .eq('id', id);

    if (error) {
      console.error('Error updating Pokémon:', error);
    } else {
      navigate(`/pokemon/${id}`); // Use navigate instead of history.push
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Edit Pokémon</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-xl">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={pokemon.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-xl">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={pokemon.type}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="level" className="block text-xl">Level</label>
          <input
            type="number"
            id="level"
            name="level"
            value={pokemon.level}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update Pokémon
        </button>
      </form>
    </div>
  );
};

export default EditPokemon;
