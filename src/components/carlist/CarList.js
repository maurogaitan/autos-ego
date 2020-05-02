import React from "react";
import {  BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import SingleCar from '../singlecar/SingleCar';
import {Container,Row} from 'react-bootstrap';
import Car from '../car/Car';   

const CarList = ({busqueda,cars}) => {
 
    
    return ( 
        <Container className="mt-5">
        
        <Row>
        {(Object.keys(busqueda).length > 0)
        ? 
            Object.keys(busqueda).map((car) => (
            <Car car={cars[car]} key={cars[car].id}/>
            ))
        : 
            Object.keys(cars).map((car) => (
            <Car car={cars[car]} key={cars[car].id}/>
            ))
        }
        <Switch>
          <Route path="/:id" children={<SingleCar />} />
        </Switch>  
        
            
        </Row>
        </Container>
     );
}
 
export default CarList;