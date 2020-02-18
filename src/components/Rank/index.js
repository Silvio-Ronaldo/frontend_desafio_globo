import React from 'react';

import { Container, Name, Score } from './styles';

export default function Rank(user) {
  return (
    <Container>
      <Name>{user.name}</Name>
      <Score>{`Score: ${user.score}`}</Score>
    </Container>
  );
}
