import React, { useState, useEffect } from 'react';

/*Components*/
import Error from '../error/Error';
import Loading from '../loading/Loading';
import SingleContent from '../single-content/SingleContent';

const SingleCar = () => {
  
    const [car, setCar] = useState({});
    const [error, guardarError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ busqueda, guardarBusqueda ] = useState({});
    const singleCar = {
        minHeight:'120vh'
    }
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
        
            <div id="single-car" style={singleCar}>
                {loading ? <Loading/> : componente}
            </div>
        
    );
}


export default SingleCar;