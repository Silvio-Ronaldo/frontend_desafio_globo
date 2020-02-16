import React from 'react';
import { Container, Image, Info, Title, Description } from './styles';


export default function Header(program) {

  return (

    < Container to={`/Program/${program.id}`} >
      <Image source={{ uri: 'https://s04.video.glbimg.com/x720/7483303.jpg' }} />
      <Info>
        <Title>{program.name}</Title>
        <Description>{program.description}</Description>
      </Info>
    </Container >
  );
}
