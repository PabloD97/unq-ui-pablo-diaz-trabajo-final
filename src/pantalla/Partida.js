import React from "react"
import { Link } from "react-router-dom";
import piedra from '../imagenes/piedra.png';
import papel from '../imagenes/papel.png';
import tijera from '../imagenes/tijera.png';
import lagarto from '../imagenes/lagarto.png';
import spock from '../imagenes/spock.png';
import "../css/Partida.css"

const Partida = () => {

  return (
    <div className="padre">
      <div>
        <h1>
            Elige tu jugada:
        </h1>
      </div>
      <div >
        <Link to="/resultado/piedra" ><img src={piedra} className="separator"/></Link>  
        <Link to="/resultado/papel"><img src={papel} className="separator"/></Link>
        <Link to="/resultado/tijera"><img src={tijera} className="separator"/></Link>
        <Link to="/resultado/lagarto"><img src={lagarto} className="separator"/></Link>
        <Link to="/resultado/spock"><img src={spock} className="separator"/></Link>          
      </div>

      <div>
        <Link to="/">
          <button className="btn btn-primary botonVolver">
            Volver atras
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Partida;