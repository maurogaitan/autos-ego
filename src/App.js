
import React from 'react';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import SingleCar from './components/singlecar/SingleCar';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  


  
  return (
    <Router>
    <section>
      <Header className="header"/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/single-car">
            <SingleCar/>
          </Route>
      </Switch>
     
      <Footer/>
      
    </section>
    </Router>
  );
}

export default App;
