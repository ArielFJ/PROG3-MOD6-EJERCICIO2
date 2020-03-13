import React, { Component } from 'react'

export class Historial extends Component {

    constructor(){
        super();
        this.state = {
            operaciones: []
        };
        this.eliminarHistorial = this.eliminarHistorial.bind(this);
    }

    state = {
        operaciones: []
    }

    componentDidMount(){
        const operaciones = this.props.obtenerLS();
        let arr = [];
        for(let i = operaciones.length; i > 0; i--){
            arr.push(operaciones[i]);
        }
        this.setState({
            operaciones: arr
        });
    }

    eliminarHistorial() {
        localStorage.setItem('operaciones', JSON.stringify([]));
        this.setState({
            operaciones: []
        });
    }

    render() {
        return (
            <div>
                <br />
                <table className="table">
                    <thead>                        
                        <tr>
                            <th>
                                Operaciones
                                <button 
                                    className="btn btn-danger ml-5"
                                    type="button" 
                                    onClick={this.eliminarHistorial} >
                                        Eliminar Historial
                                </button>
                            </th>
                            
                        </tr>    
                    </thead>
                    <tbody>
                    {this.state.operaciones.length > 0 &&
                        this.state.operaciones.map((op, i) => {
                            return <tr key={i}>
                                <td>{op}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>     
            </div>
        )
    }
}

export default Historial
