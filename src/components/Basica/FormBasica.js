import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class FormBasica extends Component {

    state = {
        n1 : 0,
        n2 : 0
    }

    onChange(e) {        
        let value = e.target.value !== '' ? Number(e.target.value) : 0;

        this.setState({
            [e.target.name]: value
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.n1, this.state.n2);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-row align-items-center">
                        <div className="col-lg-5" style={{marginRight:'-7.5rem', marginLeft:'9rem'}}>
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label className="control-label">Número 1</label>
                                    <input name="n1" type="number" step="0.0001" className="form-control" onChange={this.onChange.bind(this)} />
                                </div>
                            </div>
                        </div>
                        <div className="col"><h1>{this.props.signo}</h1></div>
                        <div className="col-lg-5" style={{marginLeft:'5.5rem'}}>
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label className="control-label">Número 2</label>
                                    <input name="n2" type="number" step="0.0001" className="form-control" onChange={this.onChange.bind(this)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group" style={{margin:'5% 41%'}}>
                        <div className="col-md-5">
                            <button type="submit" className="btn btn-danger">Calcular</button>
                        </div>
                    </div>
                </form>
        {this.props.res !== null && <div className="text-center"> <h1>El resultado es {this.props.res}</h1> </div>}
            </div>            
        )
    }
}

FormBasica.propTypes = {
    signo: PropTypes.string,
    onSubmit: PropTypes.func
}

export default FormBasica;
