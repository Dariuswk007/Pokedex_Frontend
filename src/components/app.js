import React, {useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import image1 from '../images/drifloon.png';
import image2 from '../images/banette.jpg';
import image3 from '../images/chandelure.jpg';
import image4 from '../images/darkrai.jpg';
import image5 from '../images/dusknoir.jpg';

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
        <Pokemon pokemon ={pokemon} />;
      </div>)  
    });
  };

    return (
      <div className='app'>
        <div className="title">
        Welcome to my Halloween Spookydex, Home of some of the creepiest pokemon ever recorded!
        </div>
        <div className="pokemon-images">
        <img className="drifloon-img" src={image1} alt='Drifloon'></img>
        <img className="banette-img" src={image2} alt='Banette'></img>
        <img className="chandelure-img" src={image3} alt='Chandelure'></img>
        <img className="darkrai-img" src={image4} alt='Darkrai'></img>
        <img className="dusknoir-img" src={image5} alt='Dusknoir'></img>
        </div>
       {renderAllPokemon()}
      </div>
    );
  }

