import React from 'react';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/index';
import SignupPage from './pages/signup';



function App() {
  return (
    
      <Router>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/signin' component={SignupPage} exact></Route>
        </Switch>
      </Router>
    
  );
}

export default App;
