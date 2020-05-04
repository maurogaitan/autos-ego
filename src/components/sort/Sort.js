import React,{useState} from 'react';
import PropTypes from 'prop-types';

/*Bootstrap*/
import {Nav,Row,Col,Dropdown} from 'react-bootstrap';

/*Styles*/
import './Sort.css'

const Sort = ({cars,busqueda,guardarBusqueda}) => {
 
    const [error, guardarError] = useState(false);

    const handleSelect = (type) =>{
        
        if(type.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        const dataFiltered = cars.filter(car => type === car.type);
        
        
        guardarBusqueda(dataFiltered);
        
    }
    const handleSort = (sort) =>{
        
        if(sort.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        
        let dataFiltered;
    
        let choice = (Object.entries(busqueda).length === 0)?cars:busqueda;
        switch (sort) {
            
            case 'precio-menor-mayor':
                dataFiltered = choice.sort((a,b) =>  a.price-b.price );
                console.log('precio-menor-mayor',dataFiltered)
                break;
            case 'precio-mayor-menor':
                dataFiltered = choice.sort((a,b) =>  a.price-b.price ).reverse();
                console.log('precio-mayor-menor',dataFiltered)
                break;
            case 'fecha-nuevos':
                dataFiltered = choice.sort((a,b) =>  a.year-b.year );
                console.log('fecha-nuevos',dataFiltered)
                break;
            case 'fecha-viejos':
                dataFiltered = choice.sort((a,b) =>  a.year-b.year ).reverse();
                console.log('fecha-viejos',dataFiltered)
                break;
            default:
                dataFiltered = choice;
                console.log('default',dataFiltered)
                break;
        }
     
        guardarBusqueda(dataFiltered);
       
    }
    
    
    return ( 
        <Row className="no-gutters sort-nav d-flex justify-content-between">
            <Col sm={8} md={10} className="d-none d-md-block">
            
                <Nav  variant="pills" defaultActiveKey="todos" onSelect={handleSelect}>
                    <span className="nav-link sort-title">Ordenar por</span>
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
            </Col>
            <Col  xs sm={4} md={10} className=" d-md-none" >
                <Dropdown className="d-block d-md-none" onSelect={handleSelect}>
                    <Dropdown.Toggle id="dropdown-basic">
                        Filtrar por
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="sort-filter">
                        <Dropdown.Item className="active" eventKey="todos" href="#/action-1">Todos</Dropdown.Item>
                      
                        <Dropdown.Item  eventKey="autos">Autos</Dropdown.Item>
                       
                        <Dropdown.Item  eventKey="pickups">Pickups</Dropdown.Item>
                      
                        <Dropdown.Item  eventKey="comerciales">Comerciales</Dropdown.Item>
                       
                        <Dropdown.Item  eventKey="suv">SUV</Dropdown.Item>
                  
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col xs sm={4} md={2}  className="d-flex justify-content-end">
                <Dropdown onSelect={handleSort}>
                    <Dropdown.Toggle id="dropdown-basic">
                        Filtrar por
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="sort-filter">
                        <Dropdown.Item  className="active" eventKey="nada">Nada</Dropdown.Item>
                        
                        <Dropdown.Item eventKey="precio-menor-mayor">De <span>menor</span> a <span>mayor</span> precio</Dropdown.Item>
                      
                        <Dropdown.Item eventKey="precio-mayor-menor">De <span>mayor</span> a <span>menor</span> precio</Dropdown.Item>
                       
                        <Dropdown.Item eventKey="fecha-nuevos">Más <span>nuevos</span> primero</Dropdown.Item>
                     
                        <Dropdown.Item eventKey="fecha-viejos">Más <span>viejos</span> primero</Dropdown.Item>
                  
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
     );
}
Sort.propTypes = {
    cars: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    busqueda: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    guardarBusqueda:PropTypes.func
}; 
export default Sort;