import React from 'react';

const Pokemon = (props) => {
    return (
        <div className="mon-container">
            <div className= "mon-name">
                {props.pokemon.name}
            </div>
            <div className= "mon-name-two">
                {props.pokemon.dex_entry}
            </div>

            <div className= "mon-name-three">
                Height: {props.pokemon.height}
            </div>

            <div className= "mon-name-four">
               Weight: {props.pokemon.weight}
            </div>
        </div>
    )
}

export default Pokemon;