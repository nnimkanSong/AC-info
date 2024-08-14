import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';
import logo from './logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
// src/App.js or any other file

function Menu() {
  return (
    <Navbar bg="black" variant="dark" className="navbar-dark">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title={<FaBars size={24} />} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/acinfo">ACTIVITY & INFORMATION</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/vision">VISION</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/applying">APPLYING</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accomplishment">ACCOMPLISHMENT</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/contact">CONTACT</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Brand style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
           <img src={logo} alt="logo" width="12%" height="12%" />
        </Navbar.Brand>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;



