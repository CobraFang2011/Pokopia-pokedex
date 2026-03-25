import React, { useState, useEffect } from 'react';
import './App.css';

// Function to generate gradient backgrounds based on Pokemon type
const pokopiaBackground = (type) => {
    const typeColors = {
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        ice: '#98D8D8',
        fight: '#C03028',
        poison: '#A040A0',
        ground: '#E0C68E',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        fairy: '#F0B6BC',
        normal: '#A8A878'
    };
    return typeColors[type] || '#A8A8A8'; // default color
};

// Component for displaying individual Pokemon details
const PokedexEntry = ({ pokemon }) => {
    return (
        <div className="pokedex-entry" style={{ backgroundColor: pokopiaBackground(pokemon.types[0].type.name) }}>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>ID: {pokemon.id}</p>
            <p>Height: {pokemon.height / 10} m</p>
            <p>Weight: {pokemon.weight / 10} kg</p>
            <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
        </div>
    );
};

// Main App component
const App = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch Pokemon data
    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
            const data = await response.json();
            const pokemonPromises = data.results.map(async (p) => {
                const pokemonResponse = await fetch(p.url);
                return await pokemonResponse.json();
            });
            const fullPokemonList = await Promise.all(pokemonPromises);
            setPokemonList(fullPokemonList);
            saveToLocalStorage(fullPokemonList);
        };

        fetchPokemon();
    }, []);

    // Save Pokemon list to localStorage
    const saveToLocalStorage = (pokemonData) => {
        localStorage.setItem('pokemonList', JSON.stringify(pokemonData));
    };

    // Get filtered Pokemon list based on search
    const filteredList = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <h1>Pokédex</h1>
            <input 
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="pokedex-list">
                {filteredList.map(pokemon => (<PokedexEntry key={pokemon.id} pokemon={pokemon} />))}
            </div>
        </div>
    );
};

export default App;