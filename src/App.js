import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //routing methods
import Navbar from './components/Navbar'; //navbar
import Home from './components/pages/Home.js';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component={Home}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
