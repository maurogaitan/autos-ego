import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
const CardList = () => {
    return ( 
        <Container>
        <Row>
            <Col>
            <div className='cardItem'>
                <h3>Camry</h3>
                <p>2019  |  $ 815900.00</p>
                <img src={require("../../img/camry@2x.png")}  className="img-fluid" alt="brand-logo"/>
            </div>
            </Col>
            <Col>
            <div className='cardItem'>
                <h3>Camry</h3>
                <p>2019  |  $ 815900.00</p>
                <img src={require("../../img/camry@2x.png")} className="img-fluid"  alt="brand-logo"/>
            </div>
            </Col>
            <Col>
            <div className='cardItem'>
                <h3>Camry</h3>
                <p>2019  |  $ 815900.00</p>
                <img src={require("../../img/camry@2x.png")} className="img-fluid"  alt="brand-logo"/>
            </div>
            </Col>
            <Col>
            <div className='cardItem'>
                <h3>Camry</h3>
                <p>2019  |  $ 815900.00</p>
                <img src={require("../../img/camry@2x.png")} className="img-fluid"  alt="brand-logo"/>
            </div>
            </Col>
        </Row>
        
        </Container>
     );
}
 
export default CardList;