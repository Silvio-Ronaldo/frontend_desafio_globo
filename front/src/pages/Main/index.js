import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, InputGroup, Modal, Button, FormControl } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
import Header from '../../components/Header';
import Item from '../../components/Card';
import { Container } from './styles.js';
import api from '../../services/api.js';

function Main() {
  const [programs, setPrograms] = useState([]);
  const [users, setUsers] = useState([]);

  //Popup p/ cadastrar programas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Header />

      <Container>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <Card className="col-sm-8 div-main-body">
              <Card.Header as="h5">
                Programação
                <Button variant="light" as="h5" className="float-right" onClick={handleShow}>
                <MdAddCircleOutline size={25} color="black"/>
              </Button>              
              <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Cadastrar Programas</Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text  id="inputGroup-sizing-default">Nome</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                </InputGroup>             
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-default">Horário</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                </InputGroup>                
                <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Descrição</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
              </Modal.Body>              
              <Modal.Footer>
                <Button variant="light" onClick={handleClose} type="submit">
                  Cancelar
                </Button>
                <Button variant="dark" onClick={handleClose}>
                  Salvar
                </Button>
              </Modal.Footer>
              </Modal>
              </Card.Header>
              <Card.Body className="overflow-auto">
                <Card.Text className="row" id="program-container">
                  {programs.map(program => (
                    <Item {...program} />
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
      </Container>
    </div >
  );
}

export default Main;
