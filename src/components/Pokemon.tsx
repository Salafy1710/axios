import { useState, useEffect } from "react";
import { requestPokemon } from "../axios";

interface Pokemon {
  name: string;
  url: string;
}

function Pokemon() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await requestPokemon.get("/pokemon");

        setPokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemon();
  }, []);

  return (
  <div className="bg-white p-5 rounded-xl border border-gray-200">
    <h1 className="text-xl font-bold text-gray-800 mb-4">
      Pokemon List
    </h1>

    <div className="grid grid-cols-2 gap-2">
      {pokemonList.map((pokemon, index) => (
        <div
          key={index}
          className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-yellow-50 transition"
        >
          <p className="text-sm text-gray-500">#{index + 1}</p>
          <p className="font-semibold capitalize text-gray-800">
            {pokemon.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);
}

export default Pokemon;