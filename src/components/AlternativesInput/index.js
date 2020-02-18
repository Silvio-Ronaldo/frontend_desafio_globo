import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default function Header(alternative, index) {

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Alternativa</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        disabled={true}
        id={alternative.id}
        value={alternative.text}
      />
    </InputGroup>
  );
}
