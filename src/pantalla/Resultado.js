import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Resultado = () => {

    const { jugadorEligio } = useParams();


    const [seleccionCPU, setSeleccionCPU] = useState({});
    const [partidaFinalizada, setPartidaFinalizada] = useState(false);

    const opciones = [
        { seleccion: "tijera", derrota: ["papel", "lagarto"] },
        { seleccion: "papel", derrota: ["piedra", "spock"] },
        { seleccion: "piedra", derrota: ["lagarto", "tijera"] },
        { seleccion: "lagarto", derrota: ["spock", "papel"] },
        { seleccion: "spock", derrota: ["tijera", "piedra"] }
    ];

    useEffect(() => {
        eleccionDeLaCPU();
    }, []);

    const eleccionDeLaCPU = () => {
        const seleccion = opciones[Math.floor(Math.random() * opciones.length)];
        setSeleccionCPU(seleccion);
    };

    const elegirGanador = () => {
        if (seleccionCPU.derrota.includes(jugadorEligio)) {
           return (<div>Ha ganado la cpu</div> )
        };
        if (ganoJugador(jugadorEligio)){
            return(<div>Ha ganado el jugador</div>)
        } else {
            return(<div>Empate</div>) 
        }
    };

    const ganoJugador = (param) =>{
        const seleccionJugador = opciones.find(function(it){
            return it.seleccion === param
        });
        return seleccionJugador.derrota.includes(seleccionCPU.seleccion)
    };


    return (
        <div>
            <div>
                <h1>
                    Esto es un resultado
                </h1>
                {console.log(seleccionCPU)}
                <p>El jugador eligio: {jugadorEligio} </p>
                <p>La computadora: {seleccionCPU.seleccion} </p>
            </div>
            <div>
             {seleccionCPU.seleccion && jugadorEligio && elegirGanador()}
            </div>
        </div>
    )
}

export default Resultado;