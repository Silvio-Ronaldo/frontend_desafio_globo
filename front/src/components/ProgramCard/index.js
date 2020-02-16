import React from 'react';
import { Container, Info, Title } from './styles';
import QuestionModal from '../../components/QuestionModal';

export default function Header(questionary) {

  return (
    <Container className="col-sm-4">
      <Info>
        <Title className="">{questionary.formName}</Title>
        <QuestionModal
          questionary={questionary}
        />
      </Info>
    </Container>
  );
}
