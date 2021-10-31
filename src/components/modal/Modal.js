import React from 'react';

import './Modal.css';

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
            <h5 className='modal-title'>{singleLaunch.mission_name}</h5>
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
            <p>A Paragraph</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-primary'>
              Save changes
            </button>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
