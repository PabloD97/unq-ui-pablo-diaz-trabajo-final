import React, {useState} from "react"
import { Link } from "react-router-dom";

const Partida = () => {

  return (
    <div>
      <div>
        <h1>
            Elegi la accion a realizar:
        </h1>
      </div>
      <div>
        <Link to="/resultado/piedra"><button>Piedra</button></Link>  
        <Link to="/resultado/papel"><button>Papel</button></Link>
        <Link to="/resultado/tijera"><button>Tijera</button></Link>
        <Link to="/resultado/lagarto"><button>Lagarto</button></Link>
        <Link to="/resultado/spock"><button>Spock</button></Link>          
      </div>
    </div>
  )
}

export default Partida;