import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function DeleteEmployerAccount() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleClose = () => setShowConfirmation(false);
  const handleShow = () => setShowConfirmation(true);

  const deleteAccount = () => {
    // TODO: Implement the logic to delete the account from the backend
    console.log('Account deletion initiated');
    handleClose();
    // Redirect or update UI after deletion
  };

  return (
    <div className="container bg-white rounded text-center">
      <h1>Delete Employer Account</h1>
      <Button variant="danger" onClick={handleShow}>
        Delete Account
      </Button>

      <Modal show={showConfirmation} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Account Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your account? This action cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteAccount}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteEmployerAccount;

