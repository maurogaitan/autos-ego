import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
NavLink
  } from "react-router-dom";

import {Navbar,Nav} from 'react-bootstrap';
import Home from '../home/Home';
import SingleCar from '../singlecar/SingleCar';
import './Header.css';
const Header = () => {

    return ( 
        
 
   
    
        <Navbar  className="header" collapseOnSelect expand="md">
        <Navbar.Brand >
        <img src={require("../../img/logo@2x.png")} className="brandImg" alt="brand-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>

                <Navbar.Toggle className="cerrar">
                    <span className=" d-md-none">Carrar <img src="https://res.cloudinary.com/dazwqoxcx/image/upload/v1588335117/api-ego/fill-1_igzqvp.png" alt="close-button"/></span>
                </Navbar.Toggle>
               
                <div className="divider">
                    <Nav.Item  className='d-none d-md-block text-right'>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/">Modelos</NavLink>
                    </Nav.Item>
                    <Nav.Item  className='d-none d-md-block'>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link "
                            to="/single-car">Ficha de modelos</NavLink>
                    </Nav.Item>
                    <Nav.Item className="d-md-none">
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Servicios y accesorios</NavLink>
                    </Nav.Item>
                    <Nav.Item className="d-md-none">
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Financiación</NavLink>
                    </Nav.Item>
                    <Nav.Item id="reviews" className="d-md-none">
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Reviews y Comunidad</NavLink>
                    </Nav.Item>
                </div>
                <div className="divider bordered d-md-none">
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Toyota Mobility Service</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Toyota Gazoo Racing</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Toyota Híbridos</NavLink>
                    </Nav.Item>
                </div>
                <div className="divider d-md-none">
                    <Nav.Item >
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Concesionarios</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="" >Test Drive</NavLink>
                    </Nav.Item>
                    <Nav.Item className="item-divider">
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Contacto</NavLink>
                    </Nav.Item>
                </div>
              <div className="background-menu divider d-md-none">
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Actividades</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Servicios al Cliente</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Ventas Especiales</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Innovación</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Prensa</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="">Acerca de...</NavLink>
                    </Nav.Item>
                </div>
                
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
        
      
    );
}
 
export default Header;