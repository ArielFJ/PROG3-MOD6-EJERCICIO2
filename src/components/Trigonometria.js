import React, { Component } from 'react'

import FormAlgebra from './Algebra/FormAlgebra'

class Operacion extends Component{
    state = {
        res: null
    }

    RetornaGrados(valor) {
        let grados = (valor * Math.PI) / 180;
        return grados;
    }

    render() {
        return (
            <div>
            </div> 
        )
    }
}

export class Seno extends Operacion {
    onSubmit(valor){
        let res = Math.sin(this.RetornaGrados(valor)).toFixed(2);
        this.setState({
            res: res
        });
        return `Seno(${valor}) = ${res}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Seno</h1>
                <FormAlgebra
                    mensaje="Seno de"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class Coseno extends Operacion {
    onSubmit(valor){
        let res = Math.cos(this.RetornaGrados(valor)).toFixed(2);
        this.setState({
            res: res
        });
        return `Coseno(${valor}) = ${res}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Coseno</h1>
                <FormAlgebra
                    mensaje="Coseno de"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class Tangente extends Operacion {
    onSubmit(valor){
        let res = Math.tan(this.RetornaGrados(valor)).toFixed(2);
        this.setState({
            res: res
        });
        return `Tangente(${valor}) = ${res}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Tangente</h1>
                <FormAlgebra
                    mensaje="Tangente de"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class Cotangente extends Operacion {
    onSubmit(valor){
        let res = (1 / Math.tan(this.RetornaGrados(valor))).toFixed(2);
        this.setState({
            res: res
        });
        return `Cotangente(${valor}) = ${res}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Cotangente</h1>
                <FormAlgebra
                    mensaje="Cotangente de"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class Secante extends Operacion {
    onSubmit(valor){
        let res = (1 / Math.cos(this.RetornaGrados(valor))).toFixed(2);
        this.setState({
            res: res
        });
        return `Secante(${valor}) = ${res}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Secante</h1>
                <FormAlgebra
                    mensaje="Secante de"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class Cosecante extends Operacion {
    onSubmit(valor){
        let res = (1 / Math.sin(this.RetornaGrados(valor))).toFixed(2);
        this.setState({
            res: res
        });
        return `Cosecante(${valor}) = ${res}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Cosecante</h1>
                <FormAlgebra
                    mensaje="Cosecante de"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}
