import React from 'react';
import { BrowserRouter, Switch , Route} from "react-router-dom";
import Partida from "../pantalla/Partida"
import App from "../pantalla/App"


const Rutas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/partida" component={Partida} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    );
}

export default Rutas;