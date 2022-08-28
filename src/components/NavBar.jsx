import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/pikachu.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Container, Nav, Row } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">


    <Container className=''>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

          <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
          <Nav.Link href="#action1" className='text-white'>Create pokemon</Nav.Link>
          <Nav.Link href="#action1" className='text-white'>Edit pokemon</Nav.Link>
          <Nav.Link href="#action1" className='text-white'>Delete pokemon</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>

        <NavDropdown className='text-white' title="" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            App Repository
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
        <img
          alt=""
          src={icon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Nav>


    </Container>
  </Navbar>
  )
}

export default NavBar