import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);
    const [search, setSearch] = useState("");
    React.useEffect(() => {
        Fetchdata(1);
    }, []);

    const Fetchdata = (page = 1) => {
        dispatch(GetPokemonList(page))
    }

    const ShowData = () => {

        if (!_.isEmpty(pokemonList.data)) {
            return (
                <div className={"list-wrapper"}>
                    {pokemonList.data.map(e1 => {
                return (
                    <div className={"pokemon-item"}>
                        <p>{e1.name}</p>
                        <Link to={`/pokemon/${e1.name}`}>View</Link>
                    </div>
                )
            })}
                </div>
            )
        }
        if (pokemonList.loading) {
            return <p>loading.....</p>
        }

        if (pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }

        return <p>unable to get data</p>
    }
    return (
        <div>
            <div className={"search-wrapper"}>
                <p>Search :</p>
                <input type="text" onChange={e=>setSearch(e.target.value)}/>
                <button onClick={()=>props.history.push(`/pokemon/${search}`)}>Search</button>
            </div>
            {ShowData()}
            {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate
                pageCount={Math.ceil(pokemonList.count/15)}
                pageRangeDisplayed = {2}
                marginPagesDisplayed = {1}
                onPageChange = {(data)=>Fetchdata(data.selected + 1)}
                containerClassName={"paginate"}
                />
            )}
        </div>
    );
}

export default PokemonList