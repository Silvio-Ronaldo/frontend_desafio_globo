import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Card, InputGroup, Modal, Button, FormControl, Alert } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
import Header from '../../components/Header';
import Rank from '../../components/Rank';
import Item from '../../components/Card';
import { Container } from './styles.js';
import api from '../../services/api.js';

function Main() {
  const [programs, setPrograms] = useState([]);
  const [users, setUsers] = useState([]);

  const [nome, setNome] = useState("");
  const [horario, setHorario] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  //Popup p/ cadastrar programas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Limpa form popup programa
  function clearPopup() {
    setNome("");
    setDescricao("");
    setHorario("");
    setImagem("");
    handleClose();
  };
  //valida form popup programa
  async function validaForm() {
    return (nome.length > 0 && horario.length > 0 && imagem.length > 0 || descricao.length > 0);
  };
  //Função p/ gravar novo programa
  async function gravarPrograma() {
    if (await validaForm()) {
      const programa = await api.post('/storeProgram', {
        "name": nome,
        "description": descricao,
        "schedule": horario,
        "uri": imagem
      })
        .then(function (response) {
          console.log('salvo com sucesso');
          alert("salvo com sucesso!");
        })
        .catch(error => {
          console.log(error);
          alert("erro ao salvar no banco de dados!");
        });
      clearPopup();
      window.location.reload()
    } else {
      alert("É necessário preencher todos os campos!");
    }
  };

  useEffect(() => {
    async function loadInfo() {
      const programs = await api.get('/listPrograms');
      console.log(programs);
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
              <Card.Header as="h5" className="bg-white">
                Programação
                <Button variant="light" as="h5" className="float-right" onClick={handleShow}>
                  <MdAddCircleOutline size={25} color="black" />
                </Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Cadastrar Programas</Modal.Title>
                  </Modal.Header>
                  <Modal.Body >
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Nome</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        aria-label="Default"
                        placeholder="Nome do programa"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Horário</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        aria-label="Default"
                        value={horario}
                        onChange={e => setHorario(e.target.value)}
                        placeholder="Horário de transmissão"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3" >
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Imagem</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        aria-label="Default"
                        placeholder="URL da imagem"
                        value={imagem}
                        onChange={e => setImagem(e.target.value)}
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>Descrição</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl as="textarea"
                        aria-label="With textarea"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        placeholder="Descrição" />
                    </InputGroup>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="light" onClick={clearPopup} type="submit">
                      Cancelar
                </Button>
                    <Button variant="dark" onClick={gravarPrograma}>
                      Salvar
                </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Header>
              <Card.Body className="overflow-auto">
                <Card.Text className="row justify-content-center" id="program-container">
                  {programs.map(program => (
                    <Item {...program} />
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-sm-4 div-main-body">
              <Card.Header as="h5" className="bg-white">Rank de Usuários</Card.Header>
              <Card.Body className="overflow-auto">
                <Card.Text>
                  {users.map((user) => (
                    < Rank {...user} />
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
