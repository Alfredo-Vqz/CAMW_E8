import Button from '@mui/material/Button';
import "./Busqueda.css"
import { useState } from 'react';

function Busqueda(){
    const [busqueda,setBusqueda]=useState("");

    function addToBusqueda(value:string){
        setBusqueda(busqueda+value);
    }

    function clearBusqueda(){
        setBusqueda("");
    }

    return(
        <div>
            <div style={{paddingTop:"20px"}}>
                <div className="Display">
                    <h2>{busqueda}</h2>
                </div>
            </div>
            <div>
            <Button className="Button" onClick={()=>addToBusqueda("0")}>0</Button>
            <Button className="Button" onClick={()=>addToBusqueda("1")}>1</Button>
            <Button className="Button" onClick={()=>addToBusqueda("2")}>2</Button>
            <Button className="Button" onClick={()=>addToBusqueda("3")}>3</Button>
            <Button className="Button" onClick={()=>addToBusqueda("4")}>4</Button>
            <Button className="Button" onClick={()=>addToBusqueda("5")}>5</Button>
            <Button className="Button" onClick={()=>addToBusqueda("6")}>6</Button>
            <Button className="Button" onClick={()=>addToBusqueda("7")}>7</Button>
            <Button className="Button" onClick={()=>addToBusqueda("8")}>8</Button>
            <Button className="Button" onClick={()=>addToBusqueda("9")}>9</Button>
            </div>
            <div>
                <Button variant="outlined" className="Button">Buscar</Button>
                <Button variant="outlined" className="Button" onClick={clearBusqueda}>Borrar</Button>
            </div>
        </div>

    )
}

export default Busqueda;