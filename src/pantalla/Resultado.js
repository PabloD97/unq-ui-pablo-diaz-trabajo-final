import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import piedra from '../imagenes/piedra.png';
import papel from '../imagenes/papel.png';
import tijera from '../imagenes/tijera.png';
import lagarto from '../imagenes/lagarto.png';
import spock from '../imagenes/spock.png';

const Resultado = () => {

    const { jugadorEligio } = useParams();


    const [seleccionCPU, setSeleccionCPU] = useState({});
    const [partidaFinalizada, setPartidaFinalizada] = useState(false);

    const opciones = [
        { seleccion: "tijera", ganaA: ["papel", "lagarto"], imagen: tijera },
        { seleccion: "papel", ganaA: ["piedra", "spock"], imagen: papel },
        { seleccion: "piedra", ganaA: ["lagarto", "tijera"], imagen: piedra },
        { seleccion: "lagarto", ganaA: ["spock", "papel"], imagen: lagarto },
        { seleccion: "spock", ganaA: ["tijera", "piedra"], imagen: spock }
    ];

    useEffect(() => {
        eleccionDeLaCPU();
    }, []);

    const eleccionDeLaCPU = () => {
        const seleccion = opciones[Math.floor(Math.random() * opciones.length)];
        setSeleccionCPU(seleccion);
    };

    const elegirGanador = () => {
        if (seleccionCPU.ganaA.includes(jugadorEligio)) {
            return (<div>Ha ganado la CPU</div>)
        };
        if (ganoJugador(jugadorEligio)) {
            return (<div>Ha ganado el jugador</div>)
        } else {
            return (<div>Empate</div>)
        }
    };

    const ganoJugador = (param) => {
        const seleccionJugador = opciones.find(function (it) {
            return it.seleccion === param
        });
        return seleccionJugador.ganaA.includes(seleccionCPU.seleccion)
    };

    const jugadorEligioImg = () => {
        const seleccionJugador = opciones.find(function (it) {
            return it.seleccion === jugadorEligio
        });
        return seleccionJugador.imagen
    }

    return (
        <div>
            <div>
                <h1>
                    Esto es un resultado
                </h1>
                {console.log(seleccionCPU)}
                <p>El jugador eligio: <img src={jugadorEligioImg()} /> </p>
                <p>La CPU eligio:   <img src={seleccionCPU.imagen} /></p>
            </div>
            <div>
                {seleccionCPU.seleccion && jugadorEligio && elegirGanador()}
            </div>

            <div>
                <Link to="/partida">
                    <button>
                        ¡Volver a jugar!
                    </button>
                </Link>
            </div>

        </div>


    )
}

export default Resultado;