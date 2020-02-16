import React, { useEffect, useState } from 'react';
import api from '../services/api.js';
import './Program.css';
import { Navbar, Nav, Form, FormControl, Button, Card, NavItem, NavLink, Row, Image, Container, Col } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';

export default function Ads() {

    return(
        <div className="h-100">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Globo Quiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link href="https://globoplay.globo.com/assine/?dclid=&gclid=Cj0KCQiAyp7yBRCwARIsABfQsnQFtkCkJrrfkuMkmBYJ58CejLFwvVTbvCNbytxLgIIR5MRPL4MfsxcaAumDEALw_wcB" target="_blank">
                            Globoplay
                        </Nav.Link>
                        <Nav.Link href="/Partners">
                            Parceiros
                        </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar Programas" className="mr-sm-2" />
                        <Button variant="outline-danger">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <div className="container-fluid h-100">
                <div className="row h-100">
                    <Card className="col-sm-12 div-main-body text-center">
                        <Card.Header className="bg-white">Marcas parceiras</Card.Header>
                        <Card.Body>
                            <Card.Text className="row" id="questionary-container">
                                <Card body className="col-sm-3">Sprite</Card>
                                <Card body className="col-sm-3">Americanas</Card>
                                <Card body className="col-sm-3">PicPay</Card>
                                <Card body className="col-sm-3">Claro</Card>
                                <Card body className="col-sm-3">Burger King</Card>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}