import React from 'react';
import PropTypes from 'prop-types';

/*Third Parts*/
import {  Link } from 'react-router-dom';

/*React-Bootstrap*/
import {Col,Image} from 'react-bootstrap';

const Car = ({car}) => {
    
    return ( 
        <Col  sm="6" md="4" xl="3" className="car" >
             
                    
                        <h3 className="text-center">
                            {car['name']}
                        </h3>
                    
                    
                    <p className="text-center">{`${car['year']}  |  $ ${car['price']}`}</p>
                    <div className="image-car">
                        <Image 
                            src={car['image']}
                            srcSet={`${car['image_2x']} 2x, ${car['image_3x']} 3x`} 
                            className={car['id']}
                            alt={car['name']}
                            fluid
                        />
                    </div>
                    <Link to={'/single-car/?car='+car['id']} className="view-model"> 
                    Ver modelo
                    </Link>
             
        </Col>
        
     );
}
Car.propTypes = {
    car: PropTypes.object
};
export default Car;