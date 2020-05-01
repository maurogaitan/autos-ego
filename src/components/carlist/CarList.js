import React from "react";
import {Container,Row} from 'react-bootstrap';
import Car from '../car/Car';   

const CarList = ({cars}) => {
 
    
    return ( 
        <Container>
        
        <Row>
        {Object.keys(cars).map((car) => (
            <Car car={cars[car]} key={car}/>
        ))}
            
        </Row>
        </Container>
     );
}
 
export default CarList;