import React from 'react';
import {Nav} from 'react-bootstrap';
const Sort = () => {
    return ( 
        <Nav variant="pills" defaultActiveKey="/home">
            Ordenar por
            <Nav.Item>
                <Nav.Link href="/home">Todos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Autos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Pickups</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Comerciales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">SUV</Nav.Link>
            </Nav.Item>
          
        </Nav>
     );
}
 
export default Sort;