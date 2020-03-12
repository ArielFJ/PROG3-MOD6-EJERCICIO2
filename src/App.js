import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css';

//Components
import MenuOperaciones from './components/MenuOperaciones';
import Rutas from './components/Rutas';

function App() {
  return (
    <Router>
        <Link 
          to="/" 
          className="display-3"
          style={{ textDecoration:'none', color:'black', cursor:'pointer' }}>
            <b>Calculadora</b>
        </Link> <br/>
        <MenuOperaciones />

        <Rutas/>
      </Router>
  );
}

export default App;
