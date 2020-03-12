import React, { Component } from 'react'

import FormLogaritmo from './FormLogaritmo';
import FormAlgebra from './FormAlgebra';

export class Logaritmo extends Component {

    state = {
        res: null
    }

    onSubmit(base, argumento){
        let res = Math.log10(argumento) / Math.log10(base);
        this.setState({
            res: res
        });
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Logaritmo</h1>
                <FormLogaritmo
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class Neperiano extends Component {
    state = {
        res: null
    }

    onSubmit(argumento){
        let res = Math.log(argumento);
        this.setState({
            res: res
        });
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Logaritmo Neperiano </h1>
                <FormAlgebra
                    mensaje="Argumento"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}

export class Exponencial extends Component {
    state = {
        res: null
    }

    onSubmit(argumento){
        let res = Math.pow(Math.E, argumento);
        this.setState({
            res
        });
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Exponencial</h1>
                <FormAlgebra
                    mensaje="E (constante de Euler) elevado a:"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div> 
        )
    }
}