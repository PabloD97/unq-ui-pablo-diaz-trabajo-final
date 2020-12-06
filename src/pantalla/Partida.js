import React, { useState } from "react"
import { Link, useParams } from "react-router-dom";
import piedra from '../imagenes/piedra.png';
import papel from '../imagenes/papel.png';
import tijera from '../imagenes/tijera.png';
import lagarto from '../imagenes/lagarto.png';
import spock from '../imagenes/spock.png';
import "../css/Partida.css"

const Partida = () => {



  const { puntosP } = useParams();
  const { puntosPC } = useParams();

  let puntosPlayer = parseInt(puntosP);
  let puntosDePC = parseInt(puntosPC);


  const vaGanando = () => {
    if(puntosPlayer > puntosDePC){
      return ("Vas ganando :D ")
    }
    if(puntosDePC > puntosP){
      return("Vas perdiendo :'(")
    }else{
      return("Van empatados")
    }
  }

  return (
    <div>
      <div className='puntuacion'>
        <h1>Puntaciones:</h1>
        <h5>El jugador va: {puntosP} puntos</h5>
        <h5>La cpu va: {puntosPC} puntos</h5>
        <h5>{vaGanando()}</h5>
      </div>
      <div className="padre">
        <div>
          <h1>
            Elige tu jugada:
        </h1>
        </div>

        <div >
          <Link to={`/resultado/piedra/${puntosP}/${puntosPC}`} ><img src={piedra} className="separator" /></Link>
          <Link to={`/resultado/papel/${puntosP}/${puntosPC}`}><img src={papel} className="separator" /></Link>
          <Link to={`/resultado/tijera/${puntosP}/${puntosPC}`}><img src={tijera} className="separator" /></Link>
          <Link to={`/resultado/lagarto/${puntosP}/${puntosPC}`}><img src={lagarto} className="separator" /></Link>
          <Link to={`/resultado/spock/${puntosP}/${puntosPC}`}><img src={spock} className="separator" /></Link>
        </div>

        <div>
          <Link to="/">
            <button className="btn btn-primary botonVolver">
              Volver atras
          </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Partida;