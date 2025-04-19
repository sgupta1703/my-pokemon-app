import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome to My Pokémon Team Builder!</h1>
      <div className="mt-6">
        <Link to="/pokemons" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Pokémon Team
        </Link>
      </div>
    </div>
  );
};

export default Home;
