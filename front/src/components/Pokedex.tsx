import Busqueda from "./pokedex/Busqueda";
import "./Pokedex.css"
import PokemonInfo from "./pokedex/PokemonInfo";
import { Grid } from "@mui/material";
import { Pokemon } from "../models/Pokemon";
<<<<<<< Updated upstream
import { useEffect, useState } from "react";
import axios from "axios";

function Pokedex() {
    const columnSize = 6;
    const [pokemonId,setPokemonId]=useState(0);
    const [pokemon,setPokemon]=useState<Pokemon|null>(null);
    function selectPokemonId(id:number){
        setPokemonId(id);
    }

    function getPokemon(){
        axios.get("https://pokeapi.co/api/v2/pokemon/"+pokemonId).then((response)=>{
            setPokemon(response.data)
        })
    }
    

    useEffect(()=>{
        console.log("Cambio el valor de pokemonId y ahora es "+pokemonId)
    },[pokemonId])


=======

function Pokedex() {
    const columnSize = 6;
    const pokemon:Pokemon={
        id:35,
        name:"Clefairy",
        moves: [{
                move: {
                    name: "pound",
                }
            }
        ],
        abilities:[{
            "ability": {
                "name": "cute-charm",
            },
        }]
    }
>>>>>>> Stashed changes
    return (
        <div className="Pokedex">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={columnSize} className="Busqueda">
<<<<<<< Updated upstream
                    <Busqueda searchPokemon={getPokemon} changePokemonId={selectPokemonId}></Busqueda>
                </Grid>
                <Grid item xs={columnSize} className="Resultado">
                    {pokemon&&
                        <PokemonInfo pokemon={pokemon}></PokemonInfo>
                    }
=======
                    <Busqueda></Busqueda>
                </Grid>
                <Grid item xs={columnSize} className="Resultado">
                    <PokemonInfo pokemon={pokemon}></PokemonInfo>
>>>>>>> Stashed changes
                </Grid>
            </Grid>
        </div>
    );

}

export default Pokedex;