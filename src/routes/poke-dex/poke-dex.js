import React, { Component } from 'react';
import PokeList from '../../components/poke-list';
import DetailView from '../../components/detail-view';
import Pokemon from '../../lib/pokemon';

class PokeDex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="PokeDex">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default PokeDex;