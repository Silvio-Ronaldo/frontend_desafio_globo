import React, { useEffect, useState } from 'react';
import { Container, Image, Info, Title, Description } from './styles';
import { Card, InputGroup, Modal, Button, FormControl } from 'react-bootstrap';
import QuestionModal from '../../components/QuestionModal';
import Item from '../QuestionInpunt'

export default function Header(questionary) {
    //Popup p/ cadastrar questionario
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const questions = questionary.questions;
  return (
    < Container className="col-sm-4" >
      <Info>
        <Title className="" onClick={handleShow}>{questionary.formName}</Title>

        <QuestionModal
          questionary={questionary}
        />

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Questionário</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            {questions.map((question) => (
             <Item {...question}/>
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
      </Info>
    </Container>
  );
}
