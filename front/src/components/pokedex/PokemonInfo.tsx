import { Box, Tab, Tabs } from "@mui/material";
import "./PokemonInfo.css";
import React from "react";
import { Pokemon } from "../../models/Pokemon";
<<<<<<< Updated upstream

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
                    <Tab style={{ color: "white" }} label="Moves" />
                    <Tab style={{ color: "white" }} label="Abilities" />
                </Tabs>
            </Box>
            <div className="TabContent">
                {value === 0 && (
                    <ul>
                        {props.pokemon.moves.map((move, index) => (
                            <li key={index}>{move.move.name}</li>
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
=======
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
>>>>>>> Stashed changes
        </div>
    );
}

<<<<<<< Updated upstream
export default PokemonInfo;
=======
interface PokemonInfoProps {
    pokemon:Pokemon
}

function PokemonInfo(props:PokemonInfoProps) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
            <h1 className="Name">{props.pokemon.name}</h1>
            <img className="Image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png"></img>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab style={{color:"white"}} label="Moves" />
                    <Tab style={{color:"white"}} label="Abilities" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div style={{color:"white"}}>
                    <ul>
                        {props.pokemon.moves.map((move,index)=>{
                            return <li key={index}>{move.move.name}</li>
                        })}
                    </ul>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div style={{color:"white"}}>
                    <ul>
                        {props.pokemon.abilities.map((ability,index)=>{
                            return <li key={index}>{ability.ability.name}</li>
                        })}
                    </ul>
                </div>
            </CustomTabPanel>
        </div>
    )
}

export default PokemonInfo;
>>>>>>> Stashed changes
