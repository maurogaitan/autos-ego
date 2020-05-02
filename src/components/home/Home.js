import React, { Fragment, useState, useEffect } from 'react';
import Sort from '../sort/Sort';
import CarList from '../carlist/CarList';
import Error from '../error/Error';
import Loading from '../loading/Loading';
const Home = () => {
    const [cars, setCars] = useState({});
    const [error, guardarError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ busqueda, guardarBusqueda ] = useState({});
  
    useEffect(() => {
        const consultarAPI = async () => {
              setLoading(true);
              const resultado = await fetch('http://127.0.0.1:82/api/cars/').then(function (response) {
                    return response.json();
                }).catch(function (err) {
                    console.warn('No se pudo obtener autos en la consulta');
                });
              
                if (!resultado){
                    setLoading(false);
                    guardarError(true)
                    return;
                } 
                setLoading(false)
                guardarError(false)
                setCars(resultado['data']);
        }
        consultarAPI();
    },[busqueda]);
    
    let componente;
    if(error){
        componente = <Error mensaje="No hay resultados" />
    }else{
        componente = <CarList cars={cars} busqueda={busqueda} />
    }
    return ( 
        <div className="container main-container">
            <h1>Descubrí todos los modelos </h1>
            <Sort 
            cars={cars} 
            guardarBusqueda={guardarBusqueda}
            busqueda={busqueda}
            />
            {loading ? <Loading/> : componente}
        </div>
    );
}
 
export default Home;