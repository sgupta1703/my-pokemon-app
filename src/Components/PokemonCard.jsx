import { Link } from 'react-router-dom';

const Pokemoncard = ({ pokemon }) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-md">
      <h2 className="text-xl font-semibold">{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Level: {pokemon.level}</p>
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default Pokemoncard;
