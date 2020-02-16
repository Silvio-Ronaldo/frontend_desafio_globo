import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Container, Info, Title, Description } from './styles';
import { Modal, Button } from 'react-bootstrap';
import QuestionModal from '../../components/QuestionModal';
import Item from '../QuestionInpunt'

export default function Header(questionary) {
  //Popup p/ cadastrar questionario
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const questions = questionary.questions;
  return (
    <Container className="col-sm-4" >
      <Info>
        <Title className="" onClick={handleShow}>{questionary.formName}</Title>
        <Description> <Moment format="DD/MM/YYYY HH:mm">{questionary.date}</Moment></Description>
      </Info>
      <QuestionModal
        questionary={questionary}
        type='getQuestion'
      />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Questionário</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {questions.map((question) => (
            <Item {...question} />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancelar
        </Button>
          <Button variant="dark" onClick={handleClose}>
            Salvar
        </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}
