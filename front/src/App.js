import React from 'react';
import api from './services/api';
import './App.css';
import {Navbar, Nav, Form, FormControl, Button, Card} from 'react-bootstrap';
import {MdAddCircleOutline} from 'react-icons/md';

function App() {
  
  return ( 
    <div className="h-100">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Globo Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://globoplay.globo.com/assine/?dclid=&gclid=Cj0KCQiAyp7yBRCwARIsABfQsnQFtkCkJrrfkuMkmBYJ58CejLFwvVTbvCNbytxLgIIR5MRPL4MfsxcaAumDEALw_wcB">
              Home
            </Nav.Link>
            <Nav.Link>
            <MdAddCircleOutline size={25} color="white" Link/>
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
          <Card className="col-sm-8 div-main-body">
            <Card.Header as="h5">Programação</Card.Header>
              <Card.Body className="overflow-auto"> 
                <Card.Text>
              
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-sm-4 div-main-body">
            <Card.Header as="h5">Rank de Usuários</Card.Header>
              <Card.Body className="overflow-auto"> 
                <Card.Text>
              
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
  );
}

export default App;
