import React from 'react';
import {  BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import './Header.css';
const Header = () => {
   
    return ( 
        <Navbar fixed="top" className="header" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home"><img src={require("../../img/logo@2x.png")} className="brandImg" alt="brand-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                
                <Nav.Item>
                    <Link to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/single-car">Single Car</Link>
                </Nav.Item>
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