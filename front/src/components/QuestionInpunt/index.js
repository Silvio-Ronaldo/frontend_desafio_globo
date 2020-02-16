import React, { useEffect, useState } from 'react';
import { Card, InputGroup, Modal, Button, FormControl } from 'react-bootstrap';
import Item from '../AlternativesInput'

export default function Header(question) {
    const alternatives = question.alternatives;

    return (
    <>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Questão</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
          />
        </InputGroup>
        {alternatives.map((alternative) => (
          <Item {...alternative}/>
        ))}
    </>
  );
}
