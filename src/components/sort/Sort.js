import React,{useState} from 'react';
import {Nav} from 'react-bootstrap';
const Sort = ({cars,guardarBusqueda}) => {
 
    const [error, guardarError] = useState(false);

    const handleSelect = (type) =>{
        
        if(type.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        const dataFiltered = cars.filter(car => type === car.type);
        console.log(dataFiltered)
        
        guardarBusqueda(dataFiltered);
        
    }
    return ( 
        <Nav variant="pills" defaultActiveKey="todos" onSelect={handleSelect}>
            Ordenar por
            <Nav.Item>
                <Nav.Link eventKey="todos" >Todos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="autos">Autos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="pickups">Pickups</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="comerciales">Comerciales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="suv">SUV</Nav.Link>
            </Nav.Item>
          
        </Nav>
     );
}
 
export default Sort;