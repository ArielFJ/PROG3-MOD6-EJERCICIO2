import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class FormLogaritmo extends Component {

    state = {
        base : 0,
        argumento : 0
    }

    onChange(e) {        
        let value = e.target.value !== '' ? Number(e.target.value) : 0;

        this.setState({
            [e.target.name]: value
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.base, this.state.argumento);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-row align-items-center">
                        <div className="col-lg-5" style={{marginRight:'-7.5rem', marginLeft:'9rem'}}>
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label className="control-label">Base</label>
                                    <input name="base" type="number" min="2" className="form-control" onChange={this.onChange.bind(this)} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5" style={{marginLeft:'5.5rem'}}>
                            <div className="form-group">
                                <div className="col-md-5">
                                    <label className="control-label">Argumento</label>
                                    <input name="argumento" type="number" min="1" className="form-control" onChange={this.onChange.bind(this)} />
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

FormLogaritmo.propTypes = {
    onSubmit: PropTypes.func
}

export default FormLogaritmo;
