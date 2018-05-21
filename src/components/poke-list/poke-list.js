import React from 'react';
import PokeCell from '../poke-cell';
import { pokeClasses } from '../../lib/pokeClasses';
import './_poke-list.scss';

const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell 
        key={pokeClass.id} 
        pokeClass={pokeClass} 
        handleOnClick={handleOnClick}
      />
    );
  });

  return (
    <section className="poke-list">
      {cells}
    </section>
  )
}

export default PokeList;