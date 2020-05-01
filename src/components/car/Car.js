import React from 'react';
import {Col,Card,Image} from 'react-bootstrap';
const Car = ({car}) => {
    
    return ( 
        <Col xs md="3" >
            <Card>
                <Card.Body>  
                    <h3>
                        {car['name']}
                    </h3>
                    <p>{`${car['year']}  |  $ ${car['price']}`}</p>
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