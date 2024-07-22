import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand className="brand-heading">INCREDIBLE KARNATAKA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/destinations" className="nav-link">Destinations</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <NavDropdown title="Explore" id="basic-nav-dropdown">
            <Link to="/travel" className="dropdown-item">Travel</Link>
            <Link to="/experience" className="dropdown-item">Experience</Link>
          </NavDropdown>
          <Link to="/login" className="nav-link">Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;