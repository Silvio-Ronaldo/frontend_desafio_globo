import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';
import './styles.css';
import { Navbar, Nav, Form, FormControl, Button, Card, NavItem, NavLink } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';

export default function Program() {

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


      <div className="container-fluid h-100">
        <div className="row h-100">
          <Card className="col-sm-12 div-main-body text-center">
            <Card.Title as="h5">*NOME PROGRAMA*</Card.Title>
            <Card.Header className="bg-white">
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Questionários</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Enquetes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">Comentários</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted text-center">Conteúdos interativos do *programa*</Card.Subtitle>
              <Card.Text className="row" id="questionary-container">
                <Card body className="col-sm-3">
                  <Card.Text>Questionário 1</Card.Text>
                </Card>
                <Card body className="col-sm-3">
                  <Card.Text>Questionário 1</Card.Text>
                </Card>
                <Card body className="col-sm-3">
                  <Card.Text>Questionário 1</Card.Text>
                </Card>
                <Card body className="col-sm-3">
                  <Card.Text>Questionário 1</Card.Text>
                </Card>
                <Card body className="col-sm-3">
                  <Card.Text>Questionário 1</Card.Text>
                </Card>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div >
  );
}