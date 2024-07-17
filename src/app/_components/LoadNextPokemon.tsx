'use client';

import { useState } from 'react';
import Pokemon from './Pokemon';

function LoadNextPokemon(props: any) {
  const [pokemon, setPokemon] = useState<any>(props.pokemon);

  function handleLoadButton() {
    async function loadData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${+pokemon.id + 1}/`
      );
      const pokemon = await response.json();

      setPokemon(pokemon);
    }

    loadData();
  }

  return (
    <div>
      <Pokemon pokemon={pokemon} />
      <button onClick={handleLoadButton}>다음 포켓몬</button>
    </div>
  );
}

export default LoadNextPokemon;
