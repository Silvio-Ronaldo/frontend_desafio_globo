import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';
import { Card, Image } from 'react-bootstrap';
import './styles.css';
import Header from '../../components/Header';
import PartnersModal from '../../components/PartnersModal';

const data = [
    {
        company: 'Magazine Luiza',
        product: 'Smartphone Motorola G7',
        image: 'https://a-static.mlcdn.com.br/352x470/smartphone-motorola-g7-play-32gb-ouro-4g-2gb-ram-tela-57-cam-13mp-cam-selfie-8mp/magazineluiza/155549400/2afabc87f2b5c10171b75ca58f97e177.jpg',
        uri: 'https://www.magazinevoce.com.br/magazineweblojaoficial/p/smartphone-motorola-g7-play-32gb-ouro-4g-2gb-ram-tela-57-cam-13mp-cam-selfie-8mp/155549400/'
    },
    {
        company: 'Americanas',
        product: 'Smart TV LED 50',
        image: 'https://images-americanas.b2w.io/produtos/01/00/image/134241/7/134241731_1GG.jpg',
        uri: 'https://www.americanas.com.br/produto/134241723/smart-tv-led-50-samsung-50ru7100-ultra-hd-4k-com-conversor-digital-3-hdmi-2-usb-wi-fi-visual-livre-de-cabos-controle-remoto-unico-e-bluetooth?DCSext.recom=RR_home_page.rr1-PopularProducts&dcsext.recom=RR_home_page.rr1-PopularProducts&nm_origem=rec_home_page.rr1-PopularProducts&nm_ranking_rec=4'
    },
    {
        company: 'Volkswagen',
        product: 'Up',
        image: 'https://catalogo.webmotors.com.br/imagens/prod/348019/VOLKSWAGEN_UP_1.0_MPI_TOTAL_FLEX_4P_MANUAL_34801913345552845.png?s=fill&w=440&h=330&q=80&t=true',
        uri: 'https://www.vw.com.br/pt/carros/up.html'
    },
    {
        company: 'PicPay',
        product: 'PicPay',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUhwl7///8AvlAAv1MIwFai4LTC68/T8dyp4rqY3q/d8+MYwVoAvU1gzoMRwltj0IiL2qTj9ulJy3cqxGSD2J551Zav5cA2xmv0/PfK7tXo+O7E7ND1/Phs0o666cmU3atCyXN01JNTzHy15sQAu0PmX90+AAAEIklEQVR4nO3cfVeyMBzG8TEw1GE+QCKYYtj7f423ZnW6hd8A29hD1+fPTtG+Rx7mEBkDAAAAAAAAAAAAAAAAAAAAAHCViB5getBDiMN2OljlUmI0C4Zbc9PDHuChwjkKbYJCFNoPhT4VZosuteOFi0h0eHe8cCm6fjdBoZVQ+BMK7dRWeH8O/fq5N4Xpva/f9aRQpPczmGD12e5vYYZCq6EQhfazqZBegf7vsjx0q/YU1itadlicUhHyMBocak+hWDX+8b1yfpwd8mRYpkWFWWfhza6oTmHYO9LBwqvyvEh63jxxtPBiN815nxfS3cKLok66G50uDIJ40zkUxwuD4Mg6jkfnCy/DS3wvDPbS62PLe/yXeydmd2GwO0n21JbCxlr31+9aW3gZfDikkGRxYfBGJvpSSCd6UxgsiGPRn8Igbw/wqLBs3089KgyOrcP6URg9d7C9sP1Fsuc+voLCXdt+6lVhMGlJHL2Q/LQnV1AYtPzDsQvFclYRJk+UIi5f+41s2nwRxy6MpuRW9+8hhSfPp7dt2WNozcv+6IUTcqtP9OyZXd8PhEk+2XUNbdVIdKbw9tdh1rG7Nj/c61bhtXErH9vp/poosnk82LnPWPQUMsYP0sJJYzcVfLjHAxUUsmgjKzR+X0xBIYtqchsXz1rH32N0CgpZKJscvD16G04RJYUsKejCqeGHQdQUipwujA0fiGoKGT+Sm2l9gzEiRYVCcj5Nu/9cJ0WFjNOT1I3ZU42qQskM/uBHoaBnNs3J96hUFTL6bDrzpDAkt9OcmY5KWWFCnmoMX/KVFfI5tZ2t2QuiusL47xb6v5f6f6bx/2ph+Fn6Ea74L97P2mo/CiUz71zb4PuNTNW7pzW1mVfDS1GqCunDsPRjFUOy8r33YxWDkVsxfbFQVMjPdOHCh/VSIVv09mFVXzDJbUTTy6UqCkVIXikC84ehgkLBZIGmr/cKCvlCehfY+M213xaGKb2c/8HwUiL7VaGIeN5xi7vtsxhjkxVy+ktHopCHm4p8W//N8BpNR2GRb9rVh6w6x70+M2T8PCMtVKD985c+FRq+sfZBa+HM/FGot9D0O8MbnYWGF2g+aSysbNhHdRYW8kfYRqOtcG1+NnOjq3DHrDgImbbCXWpLoKbC0ppXUFNhPPy7JPTRUTjt8cz6eNQXvi6tmMp8U154tGkPvVJcOK/tegGZ4sL5waoj8EZhYbHo9c0fY1NVuK5SK/sUFcZVzm2Zhjb8tnD9VNWRvXlMWvi6Js3jYn+eZcv0oe/CGpek8Pgue0wnvKRZ3naj7PM01kKh+1DoPhS6D4XuQ6H7UOg+FLoPhe5DoftQ6D4Uug+F7kOh+1Dovj9daPrRSEVEVRJ3QcutzXd2B6C/xdCTQAAAAAAAAAAAAAAAAAAAAACA//wDnPtjRLh3eP0AAAAASUVORK5CYII=',
        uri: 'https://www.picpay.com/site'
    },
    {
        company: 'Vivo',
        product: 'Vivo',
        image: 'data:image/jpeg;base64,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',
        uri: 'https://celular.vivo.com.br/'
    },
]

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
                            <Card.Header className="bg-white" as="h6">Anuncios</Card.Header>
                            <div id="container">
                                {data.map(item => (
                                    <PartnersModal
                                        company={item.company}
                                        product={item.product}
                                        image={item.image}
                                        uri={item.uri}
                                    />
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}