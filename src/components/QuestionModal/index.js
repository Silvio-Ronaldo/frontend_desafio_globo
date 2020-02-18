import React, { useState } from 'react';
import Modal from 'react-modal';
import QRCode from 'qrcode.react';
import { MdCameraAlt } from 'react-icons/md';
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
export default function QuestionModal({ questionary, type }) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState('');

  async function handleQRCode(qrcodeID) {

    const uri = await api.get(`/generateQRCode/${type}/${qrcodeID}`);
    setCode(JSON.stringify(uri.data));
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
      <center>
        <MdCameraAlt size={25} color="black" onClick={() => handleQRCode(questionary.qrcodeID)} />
      </center>
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
