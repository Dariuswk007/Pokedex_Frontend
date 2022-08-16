import React, {useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function app() {

  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/pokedex/get")
      .then((response) => response.json())
      .then((response) => setAllPokemon(response))
      .catch((error) =>
        console.log("An error has occured.", error)
      );
  }, []);

  const renderAllPokemon = () => {
    return allPokemon.map((pokemon) => {
      return ( 
      <div>
        <Navbar pokemon ={pokemon} />;
      </div>)  
    });
  };

    return (
      <div className='app'>
       {renderAllPokemon()}
      </div>
    );
  }

