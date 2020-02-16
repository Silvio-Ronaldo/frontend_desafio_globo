import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';
import { Card } from 'react-bootstrap';
import './styles.css';
import Header from '../../components/Header';


export default function Paterns() {

    return (
        <>
            <Header />
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
        </>
    );
}