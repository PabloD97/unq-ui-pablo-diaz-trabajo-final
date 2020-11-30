import React from "react"
import { Link } from "react-router-dom";
import "../css/App.css"

const App = () => {



  return (
    <div className= "padre">
      <div>
        <h1>
          Bienvenido al juego de
          <p>piedra papel tijera lagarto o spock!</p> 
          <p>Espero que se divierta :) </p>
        </h1>
      </div>
      <div>
        <Link to='/partida'>
          <button className="btn btn-primary">
            Jugar contra la CPU
          </button>
        </Link>
      </div>
      <div className='reglas'>
        <Link to='/reglas'>
          <button className="btn btn-primary ">
            Reglas del juego
          </button>
        </Link>
      </div>
    </div>
  )
}

export default App;
