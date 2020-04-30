import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

const Header = () => {
   
    return ( 
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home"><img src={require("../../img/logo@2x.png")} className="brandImg" alt="brand-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <a href="#">Cerrar</a>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>   
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Header;