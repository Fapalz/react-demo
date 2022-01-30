import React, { FC, useEffect } from 'react';
import '../assets/styles/modal.scss'

interface ModalProps {
  visible: Boolean,
  overlay?: Boolean
  onClose: Function
}

const Modal:FC<ModalProps> = ({children, visible, onClose, overlay = true,  ...props}) => {
  
  

  useEffect(() => {

    const onKey = (e: KeyboardEvent) => {
      const isEsp = e.key === 'Escape' || e.key === 'Esc'
      if(isEsp) {
        onClose()
      }
    }

    if(visible) {
      document.addEventListener('keydown', onKey)
    }

    return () => {
      document.removeEventListener('keydown', onKey)
    }
  },[visible, onClose])

  const onClickOverlay = () => {
    onClose()
  }

  return (
    <div className={`modal ${visible ? 'modal--is-open' : ''}` } {...props}>
      <div className='modal__content'>
        <div className='modal__header'></div>
        <div className='modal__body'>{children}</div>
        <div className='modal__footer'></div>
        
      </div>
      { overlay && 
        <div className='modal__overlay' onClick={onClickOverlay}></div>
      }
      
    </div>
  );
};

export default Modal;