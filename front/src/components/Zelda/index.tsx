import React, { useEffect, useState } from "react";
import Button from "./Button";

function Zelda(){
    const [contador,setContador]=useState(0);
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const [name,setName]=useState("");
    function sumaContador(){
        console.log("Llamando a la funcion sumar")
        setContador(contador+1);
        console.log("Terminando la funcion sumar")
    }
    function restarContador(){
        console.log("Llamando a la funcion sumar")
        setContador(contador-1);
        console.log("Terminando la funcion sumar")
    }

    function onChangeInput(event:any){
        const {value}=event.target;
        setName(value);
    }

    const calculateCenter = () => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        setX(centerX);
        setY(centerY);
      };

    useEffect(() => {
        calculateCenter();
    }, []);


    return (
        <div className="bg">
            {name==="" &&
                <h1>Whats your Name?</h1>
            }
            {name!=="" &&
                <h1>Hello {name}</h1>
            }
            <input type="text" onChange={onChangeInput} name="name" value={name} />
            <br />
            <br />
            <Button title="arriba" onPress={()=>setY(y-10)}></Button>
            <br />
            <Button title="izquierda" onPress={()=>setX(x-10)}></Button>
            <Button title="derecha" onPress={()=>setX(x+10)}></Button>
            <br />
            <Button title="abajo" onPress={()=>setY(y+10)}></Button>
            <div className="xd" style={{top: y, left: x}}></div>
        </div>
    );


}
export default Zelda;