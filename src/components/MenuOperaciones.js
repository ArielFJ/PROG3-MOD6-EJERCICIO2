import React, { Component } from 'react';
import {Link} from 'react-router-dom';      

class MenuOperaciones extends Component{

    render() {
        return (
            <div>
                <div className="btn-group mr-4">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false">
                        Básicas
                    </button>
                    <div className="dropdown-menu">
                        <Link  className="dropdown-item" to="/Basica/Suma">Suma</Link> 
                        <Link  className="dropdown-item" to="/Basica/Resta">Resta</Link>
                        <Link  className="dropdown-item" to="/Basica/Multiplicacion">Multiplicación</Link>
                        <Link  className="dropdown-item" to="/Basica/Division">División</Link>
                    </div>
                </div>

                <div className="btn-group mr-4">
                    <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Preálgebra
                    </button>
                    <div className="dropdown-menu">
                        <Link  className="dropdown-item" to="/Prealgebra/Potencia">Potencia</Link>
                        <Link  className="dropdown-item" to="/Prealgebra/RaizCuadrada">Raíz Cuadrada</Link>
                        <Link  className="dropdown-item" to="/Prealgebra/RaizCubica">Raíz Cúbica</Link>
                        <Link  className="dropdown-item" to="/Prealgebra/Factorial">Factorial</Link>
                    </div>
                </div>

                <div className="btn-group mr-4">
                    <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Álgebra
                    </button>
                    <div className="dropdown-menu">
                        <Link  className="dropdown-item" to="/Algebra/Logaritmo">Logaritmo</Link>
                        <Link  className="dropdown-item" to="/Algebra/Neperiano">Neperiano</Link>
                        <Link  className="dropdown-item" to="/Algebra/Exponencial">Exponencial</Link>
                    </div>
                </div>

                <div className="btn-group mr-4">
                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Trigonometría
                    </button>
                    <div className="dropdown-menu">
                        <Link  className="dropdown-item" to="/Trigonometria/Seno">Seno</Link>
                        <Link  className="dropdown-item" to="/Trigonometria/Coseno">Coseno</Link>
                        <Link  className="dropdown-item" to="/Trigonometria/Tangente">Tangente</Link>
                        <div className="dropdown-divider"></div>
                        <Link  className="dropdown-item" to="/Trigonometria/Cotangente">Cotangente</Link>
                        <Link  className="dropdown-item" to="/Trigonometria/Secante">Secante</Link>
                        <Link  className="dropdown-item" to="/Trigonometria/Cosecante">Cosecante</Link>                        
                    </div>
                </div>
            </div>
        );
    }
    
}

export default MenuOperaciones;