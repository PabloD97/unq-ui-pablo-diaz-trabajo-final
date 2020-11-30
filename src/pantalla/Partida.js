import React, {useState} from "react"
import { Link } from "react-router-dom";
import piedra from '../imagenes/piedra.png';
import papel from '../imagenes/papel.png';
import tijera from '../imagenes/tijera.png';
import lagarto from '../imagenes/lagarto.png';
import spock from '../imagenes/spock.png';

const Partida = () => {

  return (
    <div>
      <div>
        <h1>
            Elegi la accion a realizar:
        </h1>
      </div>
      <div>
        <Link to="/resultado/piedra"><img src={piedra}/></Link>  
        <Link to="/resultado/papel"><img src={papel}/></Link>
        <Link to="/resultado/tijera"><img src={tijera}/></Link>
        <Link to="/resultado/lagarto"><img src={lagarto}/></Link>
        <Link to="/resultado/spock"><img src={spock}/></Link>          
      </div>

      <div>
        <Link to="/">
          <button>
            Volver atras
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Partida;