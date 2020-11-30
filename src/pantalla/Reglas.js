import React from "react"
import { Link } from "react-router-dom";
import '../css/Reglas.css'


const Reglas = () => {
    return (
        <div className= 'card'>
            <div>
                <h1>Estas son las reglas del juego:</h1>
                <ul>
                    <li>Tijera corta a Papel</li>
                    <li>Papel tapa a Piedra</li>
                    <li>Piedra aplasta a Lagarto</li>
                    <li>Lagarto envenena a Spock</li>
                    <li>Spock rompe a Tijera</li>
                    <li>Tijera decapita a Lagarto</li>
                    <li>Lagarto devora a Papel</li>
                    <li>Papel desautoriza a Spock</li>
                    <li>Spock vaporiza a Piedra</li>
                    <li>Piedra aplasta a Tijera</li>
                </ul>
            </div>
            <div className='botonCentrado'>
                <Link to='/' >
                    <button className='btn btn-primary ' >
                        Volver al incio
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Reglas;
