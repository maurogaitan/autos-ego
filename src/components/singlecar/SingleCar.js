import React, { useState, useEffect, Fragment } from 'react';


import Error from '../error/Error';
import Loading from '../loading/Loading';
import SingleContent from '../single-content/SingleContent';

const SingleCar = ({props}) => {
  
    const [car, setCar] = useState({});
    const [error, guardarError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ busqueda, guardarBusqueda ] = useState({});
  
    useEffect(() => {
        
       
        const consultarAPI = async () => {
            setLoading(true);
            let query = window.location.search.substring(1);
            query = query.slice(4);
            query = (query ==='')?1:query;
           
            let resultado = await fetch('http://127.0.0.1:82/api/cars/'+query).then(function (response) {
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
            setCar(resultado.data)
            
        }
        consultarAPI();
    },[busqueda]);

    let componente;
    if(error) {
        componente = <Error mensaje="No se pudo ejecutar la consulta." />
    } else {
        
        componente = <SingleContent car={car} />;
    }
    return (
        
            <Fragment>
                {loading ? <Loading/> : componente}
            </Fragment>
        
    );
}
 
export default SingleCar;