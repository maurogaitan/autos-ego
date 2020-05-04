import React from "react";
import PropTypes from 'prop-types';

import {  Route, Switch} from 'react-router-dom';
import SingleCar from '../singlecar/SingleCar';
import {Row} from 'react-bootstrap';
import Car from '../car/Car';   
import './CarList.css'
const CarList = ({busqueda,cars}) => {
 
    
    return ( 
        <div className="car-list">
        
        <Row className="no-gutters">
        {(Object.entries(busqueda).length === 0)
        ? 
            Object.keys(cars).map((car) => (
            <Car car={cars[car]} key={cars[car].id}/>
            ))
        : 
            Object.keys(busqueda).map((bus) => (
            <Car car={cars[bus]} key={cars[bus].id}/>
            ))
           
        }
        <Switch>
          <Route path="/:id" children={<SingleCar />} />
        </Switch>  
        
            
        </Row>
        </div>
     );
}
CarList.propTypes = {
    busqueda: PropTypes.object,
    car: PropTypes.object,
};
export default CarList;