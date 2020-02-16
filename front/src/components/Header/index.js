import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Card, NavItem, NavLink, Row, Image, Container, Col } from 'react-bootstrap';
//import { Container } from './styles';

export default function Header() {
  return (
    <div className="h-100">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Globo Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <Nav.Link href="https://globoplay.globo.com/assine/?dclid=&gclid=Cj0KCQiAyp7yBRCwARIsABfQsnQFtkCkJrrfkuMkmBYJ58CejLFwvVTbvCNbytxLgIIR5MRPL4MfsxcaAumDEALw_wcB" target="_blank">
              Globoplay
            </Nav.Link>
            <Nav.Link href="/Partners">
              Parceiros
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar Programas" className="mr-sm-2" />
            <Button variant="outline-danger">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
