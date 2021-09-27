import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //routing methods
import Navbar from './components/Navbar'; //navbar
import Home from './components/pages/Home.js';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SingUp from './components/pages/SingUp';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/services' exact component={Services}/>
        <Route path = '/products' exact component={Products}/>
        <Route path = '/sign-up' exact component={SingUp}/>
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
