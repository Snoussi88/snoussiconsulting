import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/index.js';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
