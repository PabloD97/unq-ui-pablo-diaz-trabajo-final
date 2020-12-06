import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import piedra from '../imagenes/piedra.png';
import papel from '../imagenes/papel.png';
import tijera from '../imagenes/tijera.png';
import lagarto from '../imagenes/lagarto.png';
import spock from '../imagenes/spock.png';
import '../css/Resultado.css';

const Resultado = () => {

    const { jugadorEligio } = useParams();


    const [seleccionCPU, setSeleccionCPU] = useState({});


    const {puntosP} = useParams();
    const {puntosPC} = useParams();

    let newPuntosP  = parseInt(puntosP);
    let newPuntosPC = parseInt(puntosPC);


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
            newPuntosPC += 1;
            return (<div><h2>Ha ganado la CPU</h2></div>)
        };
        if (ganoJugador(jugadorEligio)) {
            newPuntosP += 1;
            return (<div><h2>Ha ganado el jugador</h2></div>)
        } else {
            return (<div><h2>Empate</h2></div>)
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
        <div className='centrado'>
            <div>
                <h1>
                    Resultado de la partida:
                </h1>
                {console.log(seleccionCPU)}
                <p><h3>El jugador eligio:<img src={jugadorEligioImg()} className='separatorR'/></h3> </p>
                <p><h3>La CPU eligio:            <img src={seleccionCPU.imagen} className='separatorR'/></h3></p>
            </div>
            <div>
                {seleccionCPU.seleccion && jugadorEligio && elegirGanador()}
            </div>

            <div>
                <Link to={`/partida/${newPuntosP}/${newPuntosPC}`}>
                    <button className="btn btn-primary">
                        ¡Volver a jugar!
                    </button>
                </Link>
            </div>

        </div>


    )
}

export default Resultado;