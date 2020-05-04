import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import './Header.css';
const Header = () => {
   
    return ( 
        <div>
        <Navbar  className="header" collapseOnSelect expand="md">
        <Navbar.Brand ><img src={require("../../img/logo@2x.png")} className="brandImg" alt="brand-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <span className="cerrar d-md-none">Carrar <img src="https://res.cloudinary.com/dazwqoxcx/image/upload/v1588335117/api-ego/fill-1_igzqvp.png" alt="close-button"/></span>
                <div className="divider">
                    <Nav.Item >
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/">Modelos</NavLink>
                    </Nav.Item>
                    <Nav.Item >
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Ficha de modelos</NavLink>
                    </Nav.Item>
                </div>
                
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
        </div>
    );
}
 
export default Header;