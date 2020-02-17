import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';
import { Card, Image } from 'react-bootstrap';
import './styles.css';
import Header from '../../components/Header';


export default function Paterns() {

    return (
        <>
            <Header />
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <Card className="col-sm-12 div-main-body text-center">
                        <Card.Header className="bg-white" as="h6">Marcas parceiras</Card.Header>
                        <Card.Body>
                            <Card.Text className="row" id="questionary-container">
                                <Image className="mx-auto teste" src="https://ecoke.vteximg.com.br/arquivos/sprite_logo.jpg?v=636930900766070000" alt="Sprite logo" />
                                <Image className="mx-auto teste" src="https://images-americanas.b2w.io/zion/manifest/icons/1f3cb37c9be5fb0e9dd16b6ac97e213c.opengraph-image.png" alt="Americanas logo" />
                                <Image className="mx-auto teste" src="https://logodownload.org/wp-content/uploads/2018/05/picpay-logo-1.png" alt="PicPay logo" />
                                <Image className="mx-auto teste" src="https://geekpublicitario.com.br/wp-content/uploads/2018/03/novo-logo-santander-fundo-vermelho.jpg" alt="Santander logo" />
                                <Image className="mx-auto teste" src="https://logodownload.org/wp-content/uploads/2015/02/Burger-king-logo-5.png" alt="Burger King logo" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}