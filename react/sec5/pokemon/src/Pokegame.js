import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "파이리", type: "fire", base_experience: 62 },
      { id: 7, name: "꼬부기", type: "water", base_experience: 63 },
      { id: 11, name: "딱충이", type: "bug", base_experience: 72 },
      { id: 12, name: "버터플라이", type: "bug", base_experience: 72 },
      { id: 25, name: "피카츄", type: "electric", base_experience: 178 },
      { id: 39, name: "푸린", type: "normal", base_experience: 95 },
      { id: 94, name: "팬텀", type: "poison", base_experience: 225 },
      { id: 133, name: "이브이", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
