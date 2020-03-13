import React, { Component } from 'react'

import FormBasica from './FormBasica';

class Operacion extends Component {
    state = {
        n1: 0,
        n2: 0,
        res: null
    }

    onSubmit(n1, n2) {
        this.setState({
            n1: n1,
            n2: n2,
        });
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export class Suma extends Operacion {

    onSubmit(n1, n2) {
        super.onSubmit(n1,n2);
        this.setState({
            res: n1 + n2
        });
        return `${n1} + ${n2} = ${n1+n2}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Suma</h1>
                <FormBasica 
                    guardarLS={this.props.guardarLS}
                    signo="+"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div>
        )
    }
}

export class Resta extends Operacion {
    onSubmit(n1, n2) {
        super.onSubmit(n1,n2);
        this.setState({
            res: n1 - n2
        });
        return `${n1} - ${n2} = ${n1-n2}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Resta</h1>
                <FormBasica 
                    guardarLS={this.props.guardarLS}
                    signo="-"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div>
        )
    }
}

export class Multiplicacion extends Operacion {
    onSubmit(n1, n2) {
        super.onSubmit(n1,n2);
        this.setState({
            res: n1 * n2
        });
        return `${n1} * ${n2} = ${n1*n2}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >Multiplicación</h1>
                <FormBasica 
                    guardarLS={this.props.guardarLS}
                    signo="*"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div>
        )
    }
}

export class Division extends Operacion {
    onSubmit(n1, n2) {
        super.onSubmit(n1,n2);
        this.setState({
            res: (n1 / n2).toFixed(2)
        });
        return `${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`;
    }

    render() {
        return (
            <div>
                <h1 className="display-4" >División</h1>
                <FormBasica 
                    guardarLS={this.props.guardarLS}
                    signo="/"
                    onSubmit={this.onSubmit.bind(this)}
                    res={this.state.res} />
            </div>
        )
    }
}