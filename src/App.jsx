import './components/PokemonCard.css'
import PokemonCard from './components/PokemonCard';
import React, {useEffect, useState} from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((data) => {
      setPokemons(data.results);
    })
    .catch((error) => console.error('Ошибка', error));
  }, [])

  return (
    <div className='PokemonList'>
    {pokemons.map((pokemon, index) => (
      <PokemonCard
      key={index}
      name={pokemon.name}
      image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
      />
    ))}
    </div>
  )
}

export default App;
