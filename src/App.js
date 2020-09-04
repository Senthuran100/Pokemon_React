import React from 'react';
import './App.css';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';
import pokemon from './Images/pokemon.png';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={pokemon} alt="Pokemon" />
        <NavLink to={"/"}>Home</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
