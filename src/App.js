import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/header/Header';
import Sort from './components/sort/Sort';
import CardList from './components/cardlist/CardList';
function App() {
  return (
    <div className="app">
      <Header className="header"/>
      <div className="container main-container">
      <h1>Descubrí todos los modelos </h1>
        <Sort/>
        <CardList/>
      </div>
     
    </div>
  );
}

export default App;
