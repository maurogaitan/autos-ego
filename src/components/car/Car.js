import React from 'react';
import {  BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

import {Col,Card,Image} from 'react-bootstrap';
const Car = ({car}) => {
    
    return ( 
        <Col xs md="3" >
            <Card>
                <Card.Body>  
                    <Link to={'/single-car/?car='+car['id']}> 
                        <h3 className="text-center">
                            {car['name']}
                        </h3>
                    </Link>
                    
                    <p className="text-center">{`${car['year']}  |  $ ${car['price']}`}</p>
                    <Image 
                        src={car['image']}
                        srcSet={`${car['image_2x']} 2x, ${car['image_3x']} 3x`} 
                        className={car['id']}
                        alt={car['name']}
                        fluid
                    />
                </Card.Body>
            </Card>
        </Col>
        
     );
}
 
export default Car;