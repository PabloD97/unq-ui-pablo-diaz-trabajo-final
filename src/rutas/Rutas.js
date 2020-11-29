import React from 'react';
import { BrowserRouter, Switch , Route} from "react-router-dom";
import Partida from "../pantalla/Partida"
import App from "../pantalla/App"
import Resultado from "../pantalla/Resultado"


const Rutas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/resultado" component={Resultado} />
                <Route path="/partida" component={Partida} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    );
}

export default Rutas;