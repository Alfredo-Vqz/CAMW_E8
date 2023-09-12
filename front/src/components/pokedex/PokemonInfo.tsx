import { Box, Tab, Tabs } from "@mui/material";
import "./PokemonInfo.css";
import React from "react";
import { Pokemon } from "../../models/Pokemon";

interface PokemonInfoProps {
    pokemon: Pokemon;
}

function PokemonInfo(props: PokemonInfoProps) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <h1 className="Name">{props.pokemon.name}</h1>
            <img className="Image" src={props.pokemon.sprites.other["official-artwork"].front_default} alt={props.pokemon.name} />
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab style={{ color: "white" }} label="Type" />
                    <Tab style={{ color: "white" }} label="Abilities" />
                </Tabs>
            </Box>
            <div className="TabContent">
                {value === 0 && (
                    <ul>
                        {props.pokemon.types.map((type, index) => (
                            <li key={index}>{type.type.name}</li>
                        ))}
                    </ul>
                )}
                {value === 1 && (
                    <ul>
                        {props.pokemon.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default PokemonInfo;
