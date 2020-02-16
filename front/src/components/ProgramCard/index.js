import React from 'react';
import { Container, Image, Info, Title, Description } from './styles';

export default function Header(questionary) {

  return (
    < Container className="col-sm-4">
      <Info>
        <Title className="">{questionary.formName}</Title>
      </Info>
    </Container>
  );
}
