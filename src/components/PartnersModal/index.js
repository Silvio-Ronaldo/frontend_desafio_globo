import React, { useState } from 'react';
import Modal from 'react-modal';
import { Image } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { Company, Product } from './styles';
import api from '../../services/api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px'
  },
  overlay: {
    position: `fixed`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 2
  }
};
export default function PartnersModal({ company, product, image, uri }) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState('');

  async function handleQRCode() {
    setCode(uri);
    openModal();
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Image className="mx-auto teste" src={image} onClick={() => handleQRCode()} style={{ borderRadius: 10 }} />
      <Company>{company}</Company>
      <Product>{product}</Product>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <QRCode value={code} />
      </Modal>
    </div>
  );
}
