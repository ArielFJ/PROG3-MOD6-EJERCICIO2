import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css';

//Components
import MenuOperaciones from './components/MenuOperaciones';
import Rutas from './components/Rutas';

function App() {
  return (
    <Router>
        <Link to="/" className="display-4 text-bold">Calculadora</Link> <br/>
        <MenuOperaciones />

        <Rutas/>
      </Router>
  );
}

export default App;
