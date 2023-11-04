import React, { useState, useEffect } from 'react';//main code
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function UpdatePatientData({ isOpen, toggle, selectedPatient, senddata }) {
  const [formData, setFormData] = useState(selectedPatient);

  useEffect(() => {
    setFormData(selectedPatient);
  }, [selectedPatient]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Call the senddata function to update the data in the backend
    senddata(formData);

    // Close the modal
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Patient Appointment Data</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" id="username" value={formData.username || ''} onChange={handleInput}/>
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={formData.name || ''} onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value={formData.email || ''} readOnly />
          </FormGroup>
          
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Submit
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default UpdatePatientData;