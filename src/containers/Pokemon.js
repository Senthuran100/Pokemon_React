import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import _ from "lodash";


const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.Pokemon);
    React.useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, []);

    const showData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokedata = pokemonState.data[pokemonName]
            return (
                <div>
                    <div className={'pokemon-wrapper'}>
                        <div className={'item'}>
                            <h1>Sprites</h1>
                            <img src={pokedata.sprites.front_default} alt="" />
                            <img src={pokedata.sprites.back_default} alt="" />
                            <img src={pokedata.sprites.front_shiny} alt="" />
                            <img src={pokedata.sprites.back_shiny} alt="" />
                        </div>
                        <div className={'item'}>
                            <h1>Stats</h1>
                            {pokedata.stats.map(e1 => {
                                return <p>{e1.stat.name} {e1.base_stat}</p>
                            })}
                        </div>
                        <div className={'item'}>
                            <h1>Abilities</h1>
                            {pokedata.abilities.map(e1 => {
                                return <p>{e1.ability.name}</p>
                            })}
                        </div>

                    </div>
                    <div className={'pokemon-wrapper'}>
                        <div className={'item'}>
                            <h1>Base Experience : {pokedata.base_experience}</h1>
                        </div>
                        <div className={'item'}>
                            <h1>Height : {pokedata.height}</h1>
                        </div>
                        <div className={'item'}>
                            <h1>Weight : {pokedata.weight}</h1>
                        </div>
                    </div>
                </div>
            )
        }
        if (pokemonState.loading) {
            return <p>loading.....</p>
        }

        if (pokemonState.errorMsg !== "") {
            return <p>{pokemonState.errorMsg}</p>
        }

        return <p>error getting pokemon</p>
    }

    return (
        <div className={"poke"}>
            <h1>{pokemonName}</h1>
            {showData()}
        </div>
    );
}

export default Pokemon;