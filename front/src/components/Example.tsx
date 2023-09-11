import React, { useState } from "react";
import "./Button.css"

function Example(){
    const [contador,setContador]=useState(0);
    const [name,setName]=useState("");
    function sumaContador(){
        console.log("Llamando a la funcion sumar")
        setContador(contador+1);
        console.log("Terminando la funcion sumar")
    }

    function onChangeInput(event:any){
        const {value}=event.target
        setName(value)
    }


    return (
        <div>
            {name==="" &&
                <h1>Whats your Name?</h1>
            }
            {name!=="" &&
                <h1>Hello {name}, your count is {contador}</h1>
            }
            <input type="text" onChange={onChangeInput} name="name" value={name} />
            {name!=="" &&
                <button onClick={sumaContador} className="Button">Sumar</button>
            }
        </div>
    );


}
export default Example;