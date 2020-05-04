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
    const handleClick = () =>{
      
            document.querySelector('.navbar-collapse').collapse('hide');
        
    }
    return ( 
        
    <Router>
   
    
        <Navbar  className="header" collapseOnSelect expand="md">
        <Navbar.Brand ><img src={require("../../img/logo@2x.png")} className="brandImg" alt="brand-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>

                <Navbar.Toggle className="cerrar">
                    <span className=" d-md-none">Carrar <img src="https://res.cloudinary.com/dazwqoxcx/image/upload/v1588335117/api-ego/fill-1_igzqvp.png" alt="close-button"/></span>
                </Navbar.Toggle>
               
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
                            to="/">Ficha de modelos</NavLink>
                    </Nav.Item>
                    <Nav.Item className="d-md-none">
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/">Servicios y accesorios</NavLink>
                    </Nav.Item>
                    <Nav.Item className="d-md-none">
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Financiación</NavLink>
                    </Nav.Item>
                    <Nav.Item id="reviews" className="d-md-none">
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Reviews y Comunidad</NavLink>
                    </Nav.Item>
                </div>
                <div className="divider bordered d-md-none">
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Toyota Mobility Service</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Toyota Gazoo Racing</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Toyota Híbridos</NavLink>
                    </Nav.Item>
                </div>
                <div className="divider d-md-none">
                    <Nav.Item >
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Concesionarios</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car" >Test Drive</NavLink>
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
                            to="/single-car">Actividades</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Servicios al Cliente</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Ventas Especiales</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Innovación</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Prensa</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/single-car">Acerca de...</NavLink>
                    </Nav.Item>
                </div>
                
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
        
            <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/single-car">
            <SingleCar/>
            </Route>
        </Switch>
        </Router>
    );
}
 
export default Header;