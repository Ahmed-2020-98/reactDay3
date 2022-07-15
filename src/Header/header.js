import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="btn btn-primary">Login</Link>
              <Link to="/about-us" className="mx-3 btn btn-primary">Register</Link>
              <Link to="/contact" className="btn btn-primary">Favourite</Link>
              <Link to="/products" className="mx-3 btn btn-primary">Movies</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
