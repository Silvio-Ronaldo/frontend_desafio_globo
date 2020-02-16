import React, { useEffect, useState } from 'react';
import api from '../services/api.js';
import './Program.css';
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
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
            <Card.Header className="bg-white">*Programa*</Card.Header>
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