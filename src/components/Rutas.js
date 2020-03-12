import React, { Component } from 'react'
import {Route} from 'react-router-dom'

//Components
import {Suma, Resta, Multiplicacion, Division} from './Basica';
import {Potencia, RaizCuadrada, RaizCubica, Factorial} from './Prealgebra';
import {Logaritmo, Neperiano, Exponencial} from './Algebra';
import {Seno, Coseno, Tangente, Cotangente, Secante, Cosecante} from './Trigonometria';

export class Rutas extends Component {
    render() {
        return (
            <div>
                {/* HOME */}
                <Route exact path="/" render={() => {
                    return <div>
                        <h1 className="display-4">Calculadora Web</h1>
                    </div> 
                }}/>
                {/* BASICAS */}
                <Route exact path="/Basica/Suma" component={Suma} />
                <Route exact path="/Basica/Resta" component={Resta} />
                <Route exact path="/Basica/Multiplicacion" component={Multiplicacion} />
                <Route exact path="/Basica/Division" component={Division} />

                {/* PREALGEBRA */}
                <Route exact path="/Prealgebra/Potencia" component={Potencia} />
                <Route exact path="/Prealgebra/RaizCuadrada" component={RaizCuadrada} />
                <Route exact path="/Prealgebra/RaizCubica" component={RaizCubica} />
                <Route exact path="/Prealgebra/Factorial" component={Factorial} />

                {/* ALGEBRA */}
                <Route exact path="/Algebra/Logaritmo" component={Logaritmo} />
                <Route exact path="/Algebra/Neperiano" component={Neperiano} />
                <Route exact path="/Algebra/Exponencial" component={Exponencial} />

                {/* TRIGONOMETRIA */}    
                <Route exact path="/Trigonometria/Seno" component={Seno} />
                <Route exact path="/Trigonometria/Coseno" component={Coseno} />
                <Route exact path="/Trigonometria/Tangente" component={Tangente} />
                <Route exact path="/Trigonometria/Cotangente" component={Cotangente} />
                <Route exact path="/Trigonometria/Secante" component={Secante} />
                <Route exact path="/Trigonometria/Cosecante" component={Cosecante} />
            </div>
        )
    }
}

export default Rutas
