
import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/header/Header';
import Sort from './components/sort/Sort';
import CarList from './components/carlist/CarList';
import Error from './components/Error';
function App() {
  

  const [cars, setCars] = useState({});
  const [error, guardarError] = useState(false);
  
  useEffect(() => {
      const consultarAPI = async () => {
  
          
            
    
            const respuesta = await fetch('http://127.0.0.1:82/api/cars');
            const resultado = await respuesta.json();
            
            setCars(resultado['data']);
      
  
            if(resultado.cod === "404") {
                guardarError(true);
            } else {
                guardarError(false);
            }
          
          
      }
      consultarAPI();
      // eslint-disable-next-line
    },[]);
    let componente;
    if(error) {
      componente = <Error mensaje="No hay resultados" />
    } else {
      componente = <CarList cars={cars}/>
    }
  
  return (
    <Fragment >
      <Header className="header"/>
      <div className="container main-container">
      <h1>Descubrí todos los modelos </h1>
        <Sort/>
        {componente}
      </div>
      <img src="https://res.cloudinary.com/dazwqoxcx/image/upload/v1588335117/api-ego/camry_3x_sgjnkd.png"/>
    </Fragment>
  );
}

export default App;
