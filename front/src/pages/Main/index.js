import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
import Header from '../../components/Header';
import { Container, Item } from './styles.js';
import api from '../../services/api.js';

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
      <Header />

      <Container>
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
                    <Item>
                      <Card body id={program.id} className="program-card col-sm-3" to={`/Programa/${program.id}`}>
                        <Card.Text>{program.name}</Card.Text>
                      </Card>
                    </Item>
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
