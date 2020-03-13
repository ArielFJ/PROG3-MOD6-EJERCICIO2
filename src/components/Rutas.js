import React, { Component} from  'react'
import {Route} from 'react-router-dom'

// Components
import {Suma, Resta, Multiplicacion, Division} from './Basica/Basica';
import {Potencia, RaizCuadrada, RaizCubica, Factorial} from './Prealgebra';
import {Logaritmo, Neperiano, Exponencial} from './Algebra/Algebra';
import {Seno, Coseno, Tangente, Cotangente, Secante, Cosecante} from './Trigonometria';
import Historial from './Historial';

export class Rutas extends Component {

    constructor(){
        super();
        this.obtenerElementosLS = this.obtenerElementosLS.bind(this);
        this.guardarLS = this.guardarLS.bind(this);
    }

    obtenerElementosLS(){
        let arreglo;
        if(localStorage.length < 0){
            arreglo = [];
        }else{
            arreglo = JSON.parse(localStorage.getItem('operaciones'));
        }
        return arreglo;
    }

    guardarLS(dato){
        let arreglo = this.obtenerElementosLS();
        if(arreglo === null)
            arreglo = [];
        
        arreglo.push(dato);
        localStorage.setItem('operaciones', JSON.stringify(arreglo));
    }

    render() {

        return (
            <div>
                {/* HOME */}
                <Route exact  path="/" render={() => {
                    return <div>
                        <h1 className="display-4">Calculadora Web</h1>
                    </div> 
                }} />
                {/* BASICAS */}
                <Route exact path="/Basica/Suma" render={() =>{ return <Suma guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Basica/Resta" render={() =>{ return <Resta guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Basica/Multiplicacion" render={() =>{ return <Multiplicacion guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Basica/Division" render={() =>{ return <Division guardarLS={this.guardarLS}  />}} />
                
                {/* PREALGEBRA */}
                <Route exact path="/Prealgebra/Potencia" render={() =>{ return <Potencia guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Prealgebra/RaizCuadrada" render={() =>{ return <RaizCuadrada guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Prealgebra/RaizCubica" render={() =>{ return <RaizCubica guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Prealgebra/Factorial" render={() =>{ return <Factorial guardarLS={this.guardarLS}  />}} />

                {/* ALGEBRA */}
                <Route exact path="/Algebra/Logaritmo" render={() =>{ return <Logaritmo guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Algebra/Neperiano" render={() =>{ return <Neperiano guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Algebra/Exponencial" render={() =>{ return <Exponencial guardarLS={this.guardarLS}  />}} />

                {/* TRIGONOMETRIA */}    
                <Route exact path="/Trigonometria/Seno" render={() =>{ return <Seno guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Trigonometria/Coseno" render={() =>{ return <Coseno guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Trigonometria/Tangente" render={() =>{ return <Tangente guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Trigonometria/Cotangente" render={() =>{ return <Cotangente guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Trigonometria/Secante" render={() =>{ return <Secante guardarLS={this.guardarLS}  />}} />
                <Route exact path="/Trigonometria/Cosecante" render={() =>{ return <Cosecante guardarLS={this.guardarLS}  />}} />

                {/* HISTORIAL */}
                <Route exact path="/Historial" render={() => { return <Historial obtenerLS={this.obtenerElementosLS} /> }} />
            </div>
        )
    }
}

export default Rutas
