
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function UpdateData({ isOpen, toggle, selectedEmployee, senddata }) {
  const [formData, setFormData] = useState(selectedEmployee);

  useEffect(() => {
    setFormData(selectedEmployee);
  }, [selectedEmployee]);

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
      <ModalHeader toggle={toggle}>Update Employee Data</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="id">ID</Label>
            <Input type="text" name="id" id="id" value={formData.id || ''} readOnly />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value={formData.name | ''} onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label for="batch">Batch</Label>
            <Input type="text" name="batch" id="batch" value={formData.batch || ''} onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label for="salary">Salary</Label>
            <Input type="text" name="salary" id="salary" value={formData.salary || ''} onChange={handleInput} />
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

export default UpdateData;


// import React,{useState} from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import {Form,FormGroup,Label,Input} from'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// //actual code1
// function UpdateData() {
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);
//   const handleInput = (event)=>{
//     const {name,value} = event.target
//     setFormData({
//       ...formData,
//       [name]:value
//     })
//     console.log(formData);
//   }
//   const [formData,setFormData] = useState({
//     id:'',
//     name: '',
//     batch:'',
//     salary:'',
//     // id: employee.id,
//     // name: employee.name,
//     // batch: employee.batch,
//     // salary: employee.salary,
//   })

//   return (
// <div>
// <Button color="danger" onClick={toggle}>
//         Update
//       </Button>

//       <Modal isOpen={modal} toggle={toggle} >
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//         <FormGroup>
//     <Label
//       for="id"
//       hidden
//     >
//       Id
//     </Label>
//     {' '}
//     <Input
//       id="id"
//       name="id"
//       value={formData.id}
//       placeholder="Id"
//       type="text"
//       onChange = {handleInput}
//     />
//     </FormGroup>
//     <FormGroup>
//     <Label
//       for="name"
//       hidden
//     >
//       Name
//     </Label>

//     <Input
//       id="name"
//       name="name"
//       value={formData.name}
//       placeholder="Name"
//       type="text"
//       onChange={handleInput}
//     />
//     </FormGroup>
//     <FormGroup>
//     <Label
//       for="batch"
//       hidden
//     >
//       Batch
//     </Label>

//     <Input
//       id="batch"
//       name="batch"
//       value={formData.batch}
//       placeholder="Batch"
//       type="text"
//       onChange={handleInput}
//     />
//   </FormGroup>
//   <FormGroup>
//     <Label
//       for="salary"
//       hidden
//     >
//       Salary
//     </Label>

//     <Input
//       id="salary"
//       name="salary"
//       value ={formData.salary}
//       placeholder="Salary"
//       type="text"
//       onChange = {handleInput}
//     />
//   </FormGroup>
//   <FormGroup>
//     <Button>
//     Submit
//   </Button>
//   </FormGroup>

//         </ModalBody>
//         <ModalFooter>

//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//       <Form>

//   {' '}

// </Form>
//     </div>
//   );
// }
// export default UpdateData;
// import React, { useState, useEffect } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { Form, FormGroup, Label, Input } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// function UpdateData({ senddata, selectedEmployee, toggle }) {
//   const [modal, setModal] = useState(true);

//   const [formData, setFormData] = useState(selectedEmployee || {});

//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = () => {
//     senddata(formData);
//     toggle(); // Close the modal
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Update Employee Data</ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="id" hidden>
//                 Id
//               </Label>
//               <Input
//                 id="id"
//                 name="id"
//                 value={formData.id || ""}
//                 placeholder="Id"
//                 type="number"
//                 onChange={handleInput}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="name" hidden>
//                 Name
//               </Label>
//               <Input
//                 id="name"
//                 name="name"
//                 value={formData.name || ""}
//                 placeholder="Name"
//                 type="text"
//                 onChange={handleInput}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="batch" hidden>
//                 Batch
//               </Label>
//               <Input
//                 id="batch"
//                 name="batch"
//                 value={formData.batch || ""}
//                 placeholder="Batch"
//                 type="number"
//                 onChange={handleInput}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="salary" hidden>
//                 Salary
//               </Label>
//               <Input
//                 id="salary"
//                 name="salary"
//                 value={formData.salary || ""}
//                 placeholder="Salary"
//                 type="number"
//                 onChange={handleInput}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handleSubmit}>
//             Submit
//           </Button>{" "}
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// export default UpdateData;
// import React, { useState } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { Form, FormGroup, Label, Input } from "reactstrap";
// function Updatedata(props) {
//   const { senddata } = props;
//   const [modal, setModal] = useState(false);
//   const [formdata, setFormdata] = useState({
//     id: "",
//     name: "",
//     salary: "",
//   });
//   const toggle = () => setModal(!modal);
//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setFormdata({
//       ...formdata,
//       [name]: value,
//     });
//     console.log(formdata);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     senddata(formdata);
//     toggle();
//   };
//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>
//         Click Me
//       </Button>
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           <Form onSubmit={handleSubmit}>
//             <FormGroup>
//               <Label for="Id" hidden>
//                 Id
//               </Label>
//               <Input
//                 id="id"
//                 name="id"
//                 value={formdata.id}
//                 placeholder="Id"
//                 type="text"
//                 required
//                 onChange={handleInput}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="name" hidden>
//                 name
//               </Label>
//               <Input
//                 id="name"
//                 name="name"
//                 value={formdata.name}
//                 placeholder="Name"
//                 type="text"
//                 required
//                 onChange={handleInput}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="batch" hidden>
//                 Batch
//               </Label>
//               <Input
//                 id="batch"
//                 name="batch"
//                 value={formdata.batch}
//                 placeholder="Batch"
//                 type="text"
//                 required
//                 onChange={handleInput}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="salary" hidden>
//                 salary
//               </Label>
//               <Input
//                 id="salary"
//                 name="salary"
//                 value={formdata.salary}
//                 placeholder="Salary"
//                 type="text"
//                 onChange={handleInput}
//                 required
//               />
//             </FormGroup>
//             <Button type="submit" color="primary">
//               Submit
//             </Button>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }
// export default Updatedata;
// import React, { useState } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { Form, FormGroup, Label, Input } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function UpdateData({ senddata }) {
//   const [modal, setModal] = useState(false);
//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     batch: '',
//     salary: '',
//   });

//   const toggle = () => setModal(!modal);

//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = () => {
//     senddata(formData); // Send the data to the parent component for further processing
//     toggle(); // Close the modal
//   };

//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>
//         Update
//       </Button>

//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Update Employee</ModalHeader>
//         <ModalBody>
//           <FormGroup>
//             <Label for="id">Id</Label>
//             <Input
//               id="id"
//               name="id"
//               value={formData.id}
//               placeholder="Id"
//               type="text"
//               onChange={handleInput}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="name">Name</Label>
//             <Input
//               id="name"
//               name="name"
//               value={formData.name}
//               placeholder="Name"
//               type="text"
//               onChange={handleInput}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="batch">Batch</Label>
//             <Input
//               id="batch"
//               name="batch"
//               value={formData.batch}
//               placeholder="Batch"
//               type="text"
//               onChange={handleInput}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="salary">Salary</Label>
//             <Input
//               id="salary"
//               name="salary"
//               value={formData.salary}
//               placeholder="Salary"
//               type="text"
//               onChange={handleInput}
//             />
//           </FormGroup>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={handleSubmit}>
//             Submit
//           </Button>
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// export default UpdateData;
