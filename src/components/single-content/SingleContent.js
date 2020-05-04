import React, { Fragment} from 'react';
import {Row,Image} from 'react-bootstrap';

import './SingleContent.css';
import Carousel from '../carousel/Carousel';

const SingleContent = ({car}) => {
 
    
    return ( 
            <Fragment>
            <div className="car-container" >
                <div className="row no-gutters">
                    <div className='col-lg-6 image-primera'>
                        <Image 
                            src={car.image_3x}
                            className={car.id}
                            alt={car.name}
                            fluid
                        />
                        
                    </div>
                    <div className='col-lg-6 info'>
                        <h1>{car.name}</h1>
                        <h2>{car.title}</h2>
                        <p>{car.description}</p>
                    </div>
                
                </div>
            </div>
           
            <Carousel/>
            <div className="car-container hero-car">
            <Row className=" d-flex justify-content-center align-items-center">
                <div className='col-md-6 image-segunda order-1 order-md-0 description'>
                    <h3>{car.title_2}</h3>
                    <p>{car.description_2}</p>
                </div>
                <div className='col-md-6 image-tercera order-0 order-md-0 '>
                <Image 
                        src="https://res.cloudinary.com/dazwqoxcx/image/upload/v1588370797/api-ego/3_3x_dbsoyx.png"
                        className={car.id}
                        alt={car.name}
                        fluid
                    />
                </div>
            </Row>
            </div>
            <div className="car-container hero-car hero-car-last ">
            <div className=" row no-gutters  d-flex justify-content-center align-items-center">
                <div className='col-md-6 '>
                   
                    <Image 
                        src="https://res.cloudinary.com/dazwqoxcx/image/upload/v1588370803/api-ego/1_3x_n2j4cx.png"
                        className={car.id}
                        alt={car.name}
                        fluid
                    />
                </div>
                <div className='col-md-6 description'>
                    <h3>{car.title_2}</h3>
                    <p>{car.description_2}</p>
                </div>
            </div>
            </div>
            </Fragment>
     );
}
 
export default SingleContent;