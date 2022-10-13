import React from 'react';

const Pokemon = (props) => {
    return (
        <div className="mon-container">
            <div className= "mon-name">
            {props.pokemon.name}
            </div>
            {props.pokemon.dex_entry}
            {props.pokemon.height}
            {props.pokemon.weight}
        </div>
    )
}

export default Pokemon;