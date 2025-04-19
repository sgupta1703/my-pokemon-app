import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

const CreatePokemon = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [level, setLevel] = useState(1);
  const [nature, setNature] = useState('');
  const [ability, setAbility] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Insert new Pokémon into the table
    const { data, error } = await supabase
      .from('pokemon')
      .insert([
        {
          name,
          type,
          level,
          nature,
          ability,
        },
      ]);

    if (error) {
      console.error('Error adding Pokémon:', error);
    } else {
      navigate('/'); // Redirect to the Pokémon list after success
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Add New Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium">Pokémon Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Type</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Grass">Grass</option>
            <option value="Electric">Electric</option>
            <option value="Psychic">Psychic</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Ghost">Ghost</option>
            {/* Add other types as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Level</label>
          <input
            type="number"
            min="1"
            max="100"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Nature</label>
          <input
            type="text"
            value={nature}
            onChange={(e) => setNature(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Ability</label>
          <input
            type="text"
            value={ability}
            onChange={(e) => setAbility(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Pokémon
        </button>
      </form>
    </div>
  );
};

export default CreatePokemon;
