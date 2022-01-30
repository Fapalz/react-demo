import React, { useState } from 'react';
import Chat from './Chat';
import Modal from '../Modal';
import '../../assets/styles/chat-widget.scss'

const ChatWidget = () => {
  const [modal, setModal] = useState<boolean>(false)
  const closeModal = () => {
    setModal(false)
  }

  return (
    <div>
      <button className='chat-widget-button' onClick={()=>setModal(!modal)}>+</button>
      <Modal visible={modal} onClose={closeModal}>
        <Chat></Chat>
      </Modal>
    </div>
  );
};

export default ChatWidget;