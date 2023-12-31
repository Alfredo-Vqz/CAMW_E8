import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import "./Busqueda.css"
import buscar from './images/buscar.png';
import tache from './images/tache.png';
import { useEffect, useState } from 'react';

interface BusquedaProps {
    changePokemonId: (id: number) => void;
    searchPokemon: () => void;
}

function Busqueda(props: BusquedaProps) {
    const [busqueda, setBusqueda] = useState("");
    const [error, setError] = useState(false); 

    useEffect(() => {
        console.log("Cambio el valor de busqueda y ahora es " + busqueda)
        props.changePokemonId(parseInt(busqueda))
    }, [busqueda])

    function addToBusqueda(value: string) {
        setBusqueda(busqueda + value);
        setError(false); 
    }

    function clearBusqueda() {
        setBusqueda("");
        setError(false); 
    }

    const columnSize = 4;

    function handleSearchPokemon() {
        if (busqueda === "") {
            setError(true); 
        } else {
            props.searchPokemon();
        }
    }

    return (
        <div>
            <div style={{ paddingTop: "40px" }}>
                <div className="Display">
                    {error ? (
                        <h2>Error al buscar Pokémon</h2>
                    ) : (
                        <h2>{busqueda}</h2>
                    )}
                </div>
            </div>
            <div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("1")}>1</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("2")}>2</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("3")}>3</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("4")}>4</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("5")}>5</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("6")}>6</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("7")}>7</Button>
                </Grid> 
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("8")}>8</Button>
                </Grid> 
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("9")}>9</Button>
                </Grid> 
                <Grid item xs={12}>
                    <Button className="Button" onClick={()=>addToBusqueda("0")}>0</Button>
                </Grid>
                </Grid>
            </div>
            <div>
                <div className="ButtonContainer">
                    <Button variant="outlined" className="Button" onClick={handleSearchPokemon}><img src={buscar} alt="Buscar" /></Button>
                    <Button variant="outlined" className="Button" onClick={clearBusqueda}><img src={tache} alt="Borrar" /></Button>
                </div>
            </div>
        </div>
    )
}

export default Busqueda;
