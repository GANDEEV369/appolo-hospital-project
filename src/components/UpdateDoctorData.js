// import React, { useState, useEffect } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function UpdateDoctorData({ isOpen, toggle, selectedDoctor, senddata }) {
//   const [formData, setFormData] = useState(selectedDoctor);

  
//   useEffect(() => {
//     setFormData(selectedDoctor);
//   }, [selectedDoctor]);

//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = () => {
//     // Call the senddata function to update the data in the backend
//     senddata(formData);

//     // Close the modal
//     toggle();
//   };

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Update Doctor Data</ModalHeader>
//       <ModalBody>
//         <Form>
//           <FormGroup>
//             <Label for="name">Name</Label>
//             <Input type="text" name="name" id="name" value={selectedDoctor.formData.name || ''} onChange={handleInput} />
//           </FormGroup>
//           <FormGroup>
//             <Label for="phonenumber">Phone Number</Label>
//             <Input type="tel" name="phonenumber" id="phonenumber" value={selectedDoctor.formData.phonenumber || ''} onChange={handleInput} />
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">Email</Label>
//             <Input type="email" name="email" id="email" value={selectedDoctor.formData.email || ''} onChange={handleInput} />
//           </FormGroup>
//           <FormGroup>
//             <Label for="city">City</Label>
//             <Input type="select" name="city" id="city" value={selectedDoctor.formData.city || ''} onChange={handleInput} >
//                   <option value="">Please Select</option>
//                   <option value="Hyderabad">Hyderabad</option>
//                   <option value="Mumbai">Mumbai</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Bangalore">Bangalore</option>
//                   <option value="Kolkata">Kolkata</option>
//                   <option value="Chennai">Chennai</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="age">Age</Label>
//             <Input type="select" name="age" id="age" value={selectedDoctor.formData.age || ''} onChange={handleInput} >
//                   <option value="">Please Select</option>
//                   <option value="0-10yrs">0-10yrs</option>
//                   <option value="10-18yrs">10-18yrs</option>
//                   <option value="18-26yrs">18-26yrs</option>
//                   <option value="26-40yrs">26-40yrs</option>
//                   <option value="40+">40+</option>
//             </Input>
//           </FormGroup>
//         </Form>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={handleSubmit}>
//           Submit
//         </Button>{' '}
//         <Button color="secondary" onClick={toggle}>
//           Cancel
//         </Button>
//       </ModalFooter>
//     </Modal>
//   );
// }

// export default UpdateDoctorData;
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateDoctorData({ isOpen, toggle, selectedDoctor, senddata }) {
  const [formData, setFormData] = useState(selectedDoctor);

  useEffect(() => {
    setFormData(selectedDoctor);
  }, [selectedDoctor]);

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
      <ModalHeader toggle={toggle}>Update Doctor Data</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" id="username" value={selectedDoctor.username || ''} onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={selectedDoctor.name || ''} onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value={selectedDoctor.email || ''} onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label for="specialization">Specialization</Label>
            <Input type="text" name="specialization" id="specialization" value={selectedDoctor.specialization || ''} onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" value={selectedDoctor.password || ''} onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label for="confirmpassword">Confirm Password</Label>
            <Input type="password" name="confirmpassword" id="confirmpassword" value={selectedDoctor.confirmpassword || ''} onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label for="doctorid">Doctor ID</Label>
            <Input type="text" name="doctorid" id="doctorid" value={selectedDoctor.doctorid || ''} onChange={handleInput} />
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

export default UpdateDoctorData;
