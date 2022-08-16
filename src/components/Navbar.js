import React from 'react';

const Navbar = (props) => {
    return (
        <div>
            {props.pokemon.name}
            {props.pokemon.dex_entry}
            {props.pokemon.height}
            {props.pokemon.weight}
        </div>
    )
}

export default Navbar;