import React from "react"
import { Link } from "react-router-dom";

const App = () => {

  const handleClick = (event) => {

  }

  return (
    <div>
      <div>
        <h1>
          Bienvenido al juego del piedra papel tijera lagarto o spock!
          <p>Espero que se divierta :) </p>
        </h1>
      </div>
      <div>
        <Link to='/partida'>
          <button>
            Jugar contra la CPU
          </button>
        </Link>
      </div>
    </div>
  )
}

export default App;
