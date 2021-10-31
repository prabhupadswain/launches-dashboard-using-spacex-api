import React from 'react';

import './Modal.css';
import ModalParagraph from './ModalParagraph';
import ModalHeader from './ModalHeader';

const Modal = (props) => {
  const singleLaunch = props.launchRecord;

  function closeHandler() {
    props.onClose();
  }

  return (
    <div className='modal' tabindex='-1' role='dialog'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <div className='modal-title'>
              <ModalHeader singleLaunch={singleLaunch} />
            </div>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={closeHandler}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <ModalParagraph singleLaunch={singleLaunch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
