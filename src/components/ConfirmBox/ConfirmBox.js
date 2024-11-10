import React from 'react';

const ConfirmBox = ({ isOpen, message, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h5>{message}</h5>
        <div className='row' style={styles.modal}>
          <div className='col-sm-1 col-md-1'></div>
          <div className='col-sm-4 col-md-4'>
            <button style={styles.button} onClick={onConfirm}>Có</button>
          </div>
          <div className='col-sm-2 col-md-2'></div>
          <div className='col-sm-4 col-md-4'>
            <button style={styles.button} onClick={onClose}>Không</button>
          </div>
          <div className='col-sm-1 col-md-1'></div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    // width: '40%'
  },
  button: {
    width: '100%',
    border: '0px',
    backgroundColor: 'rgb(6, 159, 72)',
    color: '#fff'
  }
};

export default ConfirmBox;
