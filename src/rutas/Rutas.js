import React from 'react';
import { BrowserRouter, Switch , Route} from "react-router-dom";
import Partida from "../pantalla/Partida"
import App from "../pantalla/App"
import Resultado from "../pantalla/Resultado"
import Reglas from "../pantalla/Reglas"


const Rutas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/reglas' component = {Reglas}/>
                <Route path="/resultado/:jugadorEligio/:puntosP/:puntosPC" component={Resultado} />
                <Route path="/partida/:puntosP/:puntosPC" component={Partida} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    );
}

export default Rutas;