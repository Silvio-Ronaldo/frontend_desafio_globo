import React, { useEffect, useState } from 'react';
import api from '../services/api.js';
import './Main.css';
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
import Routes from '../routes.js';

function Main() {
  const [programs, setPrograms] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadInfo() {
      const programs = await api.get('/listPrograms');
      setPrograms(programs.data);

      const users = await api.get('/getUsers');
      setUsers(users.data);
    }

    loadInfo();
  }, []);

  return (
    <div className="h-100">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="">Globo Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
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
          <Card className="col-sm-8 div-main-body">
            <Card.Header as="h5">
              Programação
              <MdAddCircleOutline className="float-right" size={25} color="black" Link />
            </Card.Header>
            <Card.Body className="overflow-auto">
              <Card.Text className="row" id="program-container">
                {programs.map(program => (
                  <Card body  id={program.id} className="program-card col-sm-3">
                    <a href={'/Programa/'+program.id} className="program-card-link">{program.name}</a>
                  </Card>         
                ))}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="col-sm-4 div-main-body">
            <Card.Header as="h5">Rank de Usuários</Card.Header>
            <Card.Body className="overflow-auto">
              <Card.Text>
                {users.map(user => (
                  <Card.Body>
                    <Card.Title className="row">
                        <a className="col-sm-8">{user.name}</a>
                        <a className="col-sm-4">Score:{user.score}</a>
                      </Card.Title>
                  </Card.Body>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div >
  );
}

export default Main;
