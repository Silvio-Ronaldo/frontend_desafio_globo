import React from 'react';
import { Container, Image, Info, Title, Description } from './styles';

export default function Header(program) {

  return (
    < Container to={`/Program/${program.id}`} >
      <Image src={program.uri} />
      <Info>
        <Title>{program.name}</Title>
        <Description>{program.description}</Description>
      </Info>
    </Container >
  );
}
