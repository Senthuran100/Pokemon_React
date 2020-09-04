import {combineReducers} from "redux";
import PokemonListReducer from "./pokemonListReducer";
import pokemonMultipleReducer from "./pokemonMultipleReducer";



const RootReducer = combineReducers({
    PokemonList: PokemonListReducer,
    Pokemon: pokemonMultipleReducer
});

export default RootReducer;