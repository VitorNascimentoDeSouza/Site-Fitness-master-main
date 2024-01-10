import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './style.css';

function NavBar() {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg">
      <Navbar.Brand href="#home">CorpoSaudavel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="Home">Home</Nav.Link>
          <Nav.Link href="Loja">Loja</Nav.Link>
          <Nav.Link href="Contato">Contato</Nav.Link>
          <Nav.Link href="Sobrenos">Sobre nós</Nav.Link>
          <Nav.Link href="Receitas">Receitas</Nav.Link>
          <Nav.Link href="Cronograma">Cronograma</Nav.Link>
        </Nav>
        <Nav>
          <a href='Login'><Button variant="outline-dark" className="mr-2">Login</Button></a>
          <a href='Cadastro'><Button variant="dark">Cadastre-se</Button></a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
