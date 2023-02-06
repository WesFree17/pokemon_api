import './App.css';
import { useState, setUseState, useEffect } from "react";
import Axios from "axios";
// import PokemonList from './components/PokemonList.jsx';

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      setPokemon({
      });
    })
  }

  return (

      <div className="App">
        <div className="Title">
          <h1>Pokemon API</h1>
          <input type="text" onChange={(event) => {setPokemonName(event.target.value);}}></input>
          <button onClick={searchPokemon}>Search Pokemon</button>
        </div>
      </div>

  );
}

export default App;
