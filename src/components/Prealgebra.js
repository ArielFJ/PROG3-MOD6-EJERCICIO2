import React, { Component } from 'react'

import FormInputDoble from './Algebra/FormInputDoble';
import FormAlgebra from './Algebra/FormAlgebra';

class Operacion extends Component{
    state = {
        res: null
    }

    render() {
        return (
            <div>
            </div> 
        )
    }
}

export class Potencia extends Operacion {
    onSubmit(base, exponente){
        let res = Math.pow(base, exponente);
        this.setState({
            res
        });
        return `${base}^${exponente} = ${res}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Potencia</h1>
                <FormInputDoble
                    guardarLS={this.props.guardarLS}
                    input1="Base"
                    input2="Exponente"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class RaizCuadrada extends Operacion {
    onSubmit(radicando){
        let res = Math.sqrt(radicando);
        this.setState({
            res
        });
        return `Raíz cuadrada de ${radicando} = ${res}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Raíz Cuadrada</h1>
                <FormAlgebra
                    guardarLS={this.props.guardarLS}
                    mensaje="Radicando"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class RaizCubica extends Operacion {
    onSubmit(radicando){
        let res = Math.cbrt(radicando);
        this.setState({
            res
        });
        return `Raíz cúbica de ${radicando} = ${res}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Raíz Cúbica</h1>
                <FormAlgebra
                    guardarLS={this.props.guardarLS}
                    mensaje="Radicando"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class Factorial extends Operacion {
    onSubmit(factor){
        let res = this.factorial(factor);
        this.setState({
            res
        });
        return `${factor}! = ${res}`;
    }

    factorial(factor){
        if(factor === 0) return 1;
        return factor * this.factorial(factor - 1);
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Factorial</h1>
                <FormAlgebra
                    guardarLS={this.props.guardarLS}
                    mensaje="Factor"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}