import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/header/Header';
import Sort from './components/sort/Sort';
function App() {
  return (
    <div className="">
      <Header/>
      <div className="container main-container">
        <Sort/>
      </div>
     
    </div>
  );
}

export default App;
