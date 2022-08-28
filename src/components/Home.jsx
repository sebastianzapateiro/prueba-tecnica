
import React from 'react'
import PokemonCard from './PokemonCard'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/pikachu.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Nav, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Home() {
  return (
    <>
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
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
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


      <Container className='mt-5'>

        <InputGroup className="my-4">
          <Form.Control aria-label="Text input with dropdown button" />

          <DropdownButton
            variant="outline-secondary"
            title="Origen"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#">Pokemón API</Dropdown.Item>
            <Dropdown.Item href="#">Firestore</Dropdown.Item>
          </DropdownButton>
        </InputGroup>

        <div className='gap-4 d-flex flex-wrap  justify-content-center'>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>
      </Container>

    </>
  )
}

export default Home