import React from "react"
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
        <Link to="/resultado"><button>Piedra</button></Link>  
        <Link to="/resultado"><button>Papel</button></Link>
        <Link to="/resultado"><button>Tijera</button></Link>
        <Link to="/resultado"><button>Lagarto</button></Link>
        <Link to="/resultado"><button>Spock</button></Link>          
      </div>
    </div>
  )
}

export default Partida;