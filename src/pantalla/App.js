import React from "react"
import { Link } from "react-router-dom";

const App = () => {

  const handleClick = (event) =>{
    
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
        Jugar contra la CPU
        </Link>
          
      </div>
    </div>
  )
}

export default App;
