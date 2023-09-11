import Busqueda from "./pokedex/Busqueda";
import "./Pokedex.css"

function Pokedex(){
    return (
        <div className="Pokedex">
            <div className="Busqueda">
                <Busqueda></Busqueda>
            </div>
            <div className="Resultado">

            </div>
        </div>
    );

}

export default Pokedex;