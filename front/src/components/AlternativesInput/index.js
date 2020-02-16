import React, { useEffect, useState } from 'react';
import { Card, InputGroup, Modal, Button, FormControl } from 'react-bootstrap';

export default function Header(questionary, index) {
    const alternatives = questionary.alternatives;

    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
    <InputGroup.Text id="inputGroup-sizing-default">Alternativa</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
        />
      </InputGroup>
  );
}
