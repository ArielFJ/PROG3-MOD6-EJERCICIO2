import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css';

//Components
import MenuOperaciones from './components/MenuOperaciones';

function App() {
  return (
    <Router>

        <MenuOperaciones />

      </Router>
  );
}

export default App;
