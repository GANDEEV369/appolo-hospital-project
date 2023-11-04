// src/RegistrationComponent.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from './redux/registrationActions';
// import './styles.css';


// const RegistrationComponent = () => {
//   const dispatch = useDispatch();
//   const registrationResult = useSelector((state) => state.registrationResult);
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
  
  
  

//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [batch, setBatch] = useState('');
//   const [salary, setSalary] = useState('');

//   const handleRegister = () => {
//     dispatch(register(id, name, batch, salary));
//     setRegistrationSuccess(true);
//   };

//   return (
//     <div className="auth-form">
//       <h2>Registration</h2>
//       <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <input type="text" placeholder="ConfirmPassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//       <input type="text" placeholder="Batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
//       <input type="text" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
//       <br></br>
//       <button onClick={handleRegister}>Register</button>
//       <pre>{JSON.stringify(registrationResult, null, 2)}</pre>
//       {registrationSuccess && (
//       <div className="success-message">Registration successful!</div>
//       )}
//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from './redux/registrationActions';
// import './styles.css';

// const RegistrationComponent = () => {
//   const dispatch = useDispatch();
//   const registrationResult = useSelector((state) => state.registrationResult);
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [confirmpassword, setConfirmPassword] = useState('');
//   const [batch, setBatch] = useState('');
//   const [salary, setSalary] = useState('');
//   const [isIdRegistered, setIsIdRegistered] = useState(false); // Add state to track if the ID is registered

//   // Function to check if an ID is already registered
//   const checkIfIdIsRegistered = (idToCheck) => {
//     // Replace this with your actual logic to check if the ID is registered
//     // You can fetch the list of registered IDs from your Redux store or an API
//     // For this example, I'm assuming you have an array of registeredIds
//     const registeredIds = ['existingId1', 'existingId2', 'existingId3'];

//     return registeredIds.includes(idToCheck);
//   };

//   const handleRegister = () => {
//     // Check if the ID is already registered
//     const isRegistered = checkIfIdIsRegistered(id);

//     if (isRegistered) {
//       // Handle the case where the ID is already registered
//       setIsIdRegistered(true);
//     } else {
//       // Dispatch the registration action
//       dispatch(register(id, name, batch, salary));
//       setRegistrationSuccess(true);
//       setIsIdRegistered(false); // Reset the registration status
//     }
//   };

//   return (
//     <div className="auth-form">
//       <h2>Registration</h2>
//       <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
//       {isIdRegistered && <div className="error-message">ID is already registered.</div>}
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       {/* <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} /> */}
//       <input type="text" placeholder="Batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
//       <input type="text" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
//       <br></br>
//       <button onClick={handleRegister}>Register</button>
//       <pre>{JSON.stringify(registrationResult, null, 2)}</pre>
//       {/* {password === confirmpassword && registrationSuccess && (
//         <div className="success-message">Registration successful!</div>
//       )} */}
//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../redux/registrationActions';
// import './styles.css';

// const RegistrationComponent = () => {
//   const dispatch = useDispatch();
//   const registrationResult = useSelector((state) => state.registrationResult);
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   // const [id, setId] = useState('');
//   // const [name, setName] = useState('');
//   // // const [password, setPassword] = useState('');
//   // // const [confirmpassword, setConfirmPassword] = useState('');
//   // const [batch, setBatch] = useState('');
//   // const [salary, setSalary] = useState('');
//   const [username, setUserName] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [isIdRegistered, setIsIdRegistered] = useState(false); // Add state to track if the ID is registered

//   // Function to check if an ID is already registered
//   const checkIfIdIsRegistered = (idToCheck) => {
//     // Replace this with your actual logic to check if the ID is registered
//     // You can fetch the list of registered IDs from your Redux store or an API
//     // For this example, I'm assuming you have an array of registeredIds
//     const registeredIds = ['existingId1', 'existingId2', 'existingId3'];

//     return registeredIds.includes(idToCheck);
//   };

//   const handleRegister = () => {
//     // Check if the ID is already registered
//     const isRegistered = checkIfIdIsRegistered(email);

//     if (isRegistered) {
//       // Handle the case where the ID is already registered
//       setIsIdRegistered(true);
//     } else {
//       // Dispatch the registration action
//       dispatch(register(username, name, email, password, confirmpassword));
//       setRegistrationSuccess(true);
//       setIsIdRegistered(false); // Reset the registration status
//     }
//   };

//   return (
//     <div className="auth-form">
//       <h2>Registration</h2>
//       {/* <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
//       {isIdRegistered && <div className="error-message">ID is already registered.</div>}
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//       <input type="text" placeholder="Batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
//       <input type="text" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} /> */}
//       <input type="text" placeholder='User Name' value={username} onChange={(e) => setUserName(e.target.value)} />
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//       <br></br>
//       <button onClick={handleRegister}>Register</button>
//       <pre>{JSON.stringify(registrationResult, null, 2)}</pre>
//       {/* {password === confirmpassword && registrationSuccess && (
//         <div className="success-message">Registration successful!</div>
//       )} */}
//     </div>
//   );
// };

// export default RegistrationComponent;// actual code
// import React, { useState } from 'react';

// const RegistrationComponent = ({ closeModal }) => {
//   const [username, setUsername] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = () => {
//     // Perform registration logic here
//     // Send registration data to the server
//     closeModal(); // Close the registration modal
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={closeModal}>
//           &times;
//         </span>
//         <h2>Register</h2>
//         <input
//           type="text"
//           placeholder="User Name"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Register</button>
//       </div>
//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../redux/registrationActions';
// import './styles.css';
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   Input,
//   Form,
//   Label,
//   FormGroup,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// const RegistrationComponent = () => {
//   const dispatch = useDispatch();
//   const registrationResult = useSelector((state) => state.registrationResult);
//   const [username, setUserName] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [isIdRegistered, setIsIdRegistered] = useState(false);

//   // Function to check if an ID is already registered
//   const checkIfIdIsRegistered = (idToCheck) => {
//     // Replace this with your actual logic to check if the ID is registered
//     // You can fetch the list of registered IDs from your Redux store or an API
//     // For this example, I'm assuming you have an array of registeredIds
//     const registeredIds = ['existingId1', 'existingId2', 'existingId3'];

//     return registeredIds.includes(idToCheck);
//   };

//   const handleRegister = () => {
//     // Check if the ID is already registered
//     const isRegistered = checkIfIdIsRegistered(email);

//     if (isRegistered) {
//       // Handle the case where the ID is already registered
//       setIsIdRegistered(true);
//       setRegistrationSuccess(false); // Reset the registration success status
//     } else {
//       // Dispatch the registration action
//       dispatch(register(username, name, email, password, confirmpassword));
//       setRegistrationSuccess(true);
//       setIsIdRegistered(false); // Reset the registration status
//     }
//   };

//   return (
//     <div className="auth-form">
//       <h2>Registration</h2>
//       <input type="text" placeholder='User Name' value={username} onChange={(e) => setUserName(e.target.value)} />
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//       <br></br>
//       <button onClick={handleRegister}>Register</button>
//       <pre>{JSON.stringify(registrationResult, null, 2)}</pre>
//       {isIdRegistered && <div className="error-message">Email is already registered.</div>}
//       {password === confirmpassword && registrationSuccess && (
//         <div className="success-message">Registration successful!</div>
//       )}
//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup, Label } from 'reactstrap';
// import { Link } from 'react-router-dom';

// const RegistrationComponent = () => {
//   const [modal, setModal] = useState(false);
//   const toggleModal = () => setModal(!modal);

//   const [username, setUserName] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [isIdRegistered, setIsIdRegistered] = useState(false);

//   const handleRegister = () => {
//     // You can add registration logic here

//     setRegistrationSuccess(true); // Set registration success status for demonstration
//     setIsIdRegistered(false); // Set registration status for demonstration
//   };

//   return (
//     <div>
//       <button color="primary" onClick={toggleModal}>
//         Register
//       </button>

//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Registration
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">User Name</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 value={username}
//                 placeholder="User Name"
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={email}
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={password}
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmpassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 name="confirmpassword"
//                 value={confirmpassword}
//                 placeholder="Confirm Password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button color="primary" onClick={handleRegister} className="custom-button">
//             Register
//           </Button>
//           <Link
//             to="/login"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Already have an account? Login
//           </Link>
//         </ModalFooter>
//       </Modal>

//       {registrationSuccess && (
//         <div>
//           <h3>Registration successful!</h3>
//         </div>
//       )}
//       {isIdRegistered && (
//         <div>
//           <h3>Email is already registered.</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState, useEffect } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup, Label } from 'reactstrap';
// import { Link } from 'react-router-dom';

// const RegistrationComponent = () => {
//   const [modal, setModal] = useState(true); // Set the modal to open by default
//   const toggleModal = () => setModal(!modal);
//   const [username, setUserName] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [isIdRegistered, setIsIdRegistered] = useState(false);

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleRegister = () => {
//     // You can add registration logic here
//     setRegistrationSuccess(true); // Set registration success status for demonstration
//     setIsIdRegistered(false); // Set registration status for demonstration
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Registration
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">User Name</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 value={username}
//                 placeholder="User Name"
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={email}
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={password}
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmpassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 name="confirmpassword"
//                 value={confirmpassword}
//                 placeholder="Confirm Password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button color="primary" onClick={handleRegister} className="custom-button">
//             Register
//           </Button>
//           <Link
//             to="/"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Already have an account? Login
//           </Link>
//         </ModalFooter>
//       </Modal>
//       {isIdRegistered && (
//         <div>
//           <h3>Email is already registered.</h3>
//         </div>
//       )}
//       {registrationSuccess && (
//         <div>
//           <h3>Registration successful!</h3>
//         </div>
//       )}
      
//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState, useEffect } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup, Label } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const RegistrationComponent = () => {
//   const [modal, setModal] = useState(true);
//   const toggleModal = () => setModal(!modal);
//   const [username, setUserName] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [isIdRegistered, setIsIdRegistered] = useState(false);

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleRegister = async () => {
//     // Check if username or email already exist
//     try {
//       const response = await axios.post('http://localhost:3005/register/check', { username, email });
//       if (response.data.message === "User already exists") {
//         setIsIdRegistered(true);
//         setRegistrationSuccess(false);
//         return;
//       }
//     } catch (error) {
//       console.error(error);
//     }

//     // Perform the registration if username or email doesn't exist
//     try {
//       const response = await axios.post('http://localhost:3005/register', { username, name, email, password, confirmpassword });
//       if (response.data.message === "Registration successful") {
//         setRegistrationSuccess(true);
//         setIsIdRegistered(false);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Registration
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">User Name</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 value={username}
//                 placeholder="User Name"
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={email}
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={password}
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmpassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 name="confirmpassword"
//                 value={confirmpassword}
//                 placeholder="Confirm Password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button color="primary" onClick={handleRegister} className="custom-button">
//             Register
//           </Button>
//           <Link
//             to="/"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Already have an account? Login
//           </Link>
//         </ModalFooter>
//       </Modal>

//       {isIdRegistered && (
//         <div>
//           <h3>Email or Username is already registered.</h3>
//         </div>
//       )}
//       {registrationSuccess && (
//         <div>
//           <h3>Registration successful!</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState, useEffect } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup, Label } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const RegistrationComponent = () => {
//   const [modal, setModal] = useState(true);
//   const toggleModal = () => setModal(!modal);
//   const [username, setUserName] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [isIdRegistered, setIsIdRegistered] = useState(false);

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleRegister = async () => {
//     // Check if username or email already exist
//     console.log(username);
//     try {
//       const response = await axios.post('http://localhost:3005/register/check', { username, email });
//       if (response.data.message === "User already exists") {
//         setIsIdRegistered(true);
//         setRegistrationSuccess(false);
//         return;
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     // Perform the registration if username or email doesn't exist
//     try {
//       const response = await axios.post('http://localhost:3005/register', { username, name, email, password, confirmpassword });
//       if (response.data.message === "Registration successful") {
//         setRegistrationSuccess(true);
//         setIsIdRegistered(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Registration
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">User Name</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 value={username}
//                 placeholder="User Name"
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={email}
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={password}
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmpassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 name="confirmpassword"
//                 value={confirmpassword}
//                 placeholder="Confirm Password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button color="primary" onClick={handleRegister} className="custom-button">
//             Register
//           </Button>
//           <Link
//             to="/login"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Already have an account? Login
//           </Link>
//         </ModalFooter>
//       </Modal>

//       {isIdRegistered && (
//         <div>
//           <h3>Email or Username is already registered.</h3>
//         </div>
//       )}
//       {registrationSuccess && (
//         <div>
//           <h3>Registration successful!</h3>
//         </div>
//       )}

//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState, useEffect } from 'react';// actual main code
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup, Label } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// const RegistrationComponent = () => {
//   const navigate = useNavigate();
//   const [modal, setModal] = useState(true);
//   const toggleModal = () => setModal(!modal);
//   const [username, setUserName] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [isIdRegistered, setIsIdRegistered] = useState(false);

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleRegister = async () => {
//     // Check if username or email already exist
//     try {
//       const response = await axios.post('http://localhost:3005/register', {
//         username,
//         name,
//         email,
//         password,
//         confirmpassword,
//       });

//       if (response.status === 200) {
//         setRegistrationSuccess(true);
//         setIsIdRegistered(false);
//         navigate('/login');
//       }
//     } catch (error) {
//       if (error.response.status === 400) {
//         setIsIdRegistered(true);
//         setRegistrationSuccess(false);
//       }
//     }
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Registration
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">User Name</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 value={username}
//                 placeholder="User Name"
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={email}
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={password}
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmpassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 name="confirmpassword"
//                 value={confirmpassword}
//                 placeholder="Confirm Password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button color="primary" onClick={handleRegister} className="custom-button">
//             Register
//           </Button>
//           <Link
//             to="/login"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Already have an account? Login
//           </Link>
//         </ModalFooter>
//       </Modal>

//       {isIdRegistered && (
//         <div>
//           <h3>Username or email already exists.</h3>
//         </div>
//       )}
//       {registrationSuccess && (
//         <div>
//           <h3>Registration successful!</h3>
          
          
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup, Label } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const RegistrationComponent = () => {
//   const [modal, setModal] = useState(true);
//   const [username, setUsername] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   // Password validation
//   const [isPasswordValid, setIsPasswordValid] = useState(false);
//   const [isPasswordMatching, setIsPasswordMatching] = useState(false);

//   const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

//   const validatePassword = (value) => {
//     setIsPasswordValid(passwordRegex.test(value));
//   };

//   const handleRegister = async () => {
//     // Check validations
//     const isUsernameValid = !/\s/.test(username);
//     const isEmailValid = email.includes('@');

//     // Check if password matches the regex
//     validatePassword(password);

//     // Check if passwords match
//     setIsPasswordMatching(password === confirmPassword);

//     if (isUsernameValid && isEmailValid && isPasswordValid && isPasswordMatching) {
//       try {
//         const response = await axios.post('http://localhost:3005/register', {
//           username,
//           name,
//           email,
//           password,
//           confirmpassword: confirmPassword,
//         });

//         if (response.status === 200) {
//           setRegistrationSuccess(true);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const getInputClassName = (isValid, value) => {
//     if (value === '' || (value && !isValid)) {
//       return 'form-control is-invalid';
//     }
//     return 'form-control is-valid';
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={() => setModal(!modal)} className="custom-modal">
//         <ModalHeader className="custom-modal-header">Registration</ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">User Name</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 value={username}
//                 className={getInputClassName(true, username)}
//                 placeholder="User Name"
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               {/\s/.test(username) && <div className="text-danger">Username cannot contain spaces.</div>}
//             </FormGroup>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={email}
//                 className={getInputClassName(/@/.test(email), email)}
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {!/@/.test(email) && <div className="text-danger">Invalid email address.</div>}
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={password}
//                 className={getInputClassName(isPasswordValid, password)}
//                 placeholder="Password"
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   validatePassword(e.target.value);
//                 }}
//               />
//               {!isPasswordValid && (
//                 <div className="text-danger">
//                   Password must be at least 8 characters and include one capital letter, one number, and one special character.
//                 </div>
//               )}
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmpassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 name="confirmpassword"
//                 value={confirmPassword}
//                 className={getInputClassName(isPasswordMatching, confirmPassword)}
//                 placeholder="Confirm Password"
//                 onChange={(e) => {
//                   setConfirmPassword(e.target.value);
//                   setIsPasswordMatching(password === e.target.value);
//                 }}
//               />
//               {!isPasswordMatching && <div className="text-danger">Passwords do not match.</div>}
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button color="primary" onClick={handleRegister} className="custom-button">
//             Register
//           </Button>
//           <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//             Already have an account? Login
//           </Link>
//         </ModalFooter>
//       </Modal>
//       {registrationSuccess && <div className="alert alert-success">Registration successful!</div>}
//     </div>
//   );
// };

// export default RegistrationComponent;
// import React, { useState } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup, Label } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const RegistrationComponent = () => {
//   const [modal, setModal] = useState(true);
//   const [username, setUsername] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   // Define variables for validation
//   const [isPasswordValid, setIsPasswordValid] = useState(true);
//   const [isPasswordMatching, setIsPasswordMatching] = useState(true);
//   const [isUsernameValid, setIsUsernameValid] = useState(true);
//   const [isEmailValid, setIsEmailValid] = useState(true);

//   // Password validation regex
//   const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

//   // Function to validate password
//   const validatePassword = (value) => {
//     setIsPasswordValid(passwordRegex.test(value));
//   };

//   const handleRegister = async () => {
//     // Check validations
//     setIsUsernameValid(!/\s/.test(username));
//     setIsEmailValid(email.includes('@'));
//     validatePassword(password);
//     setIsPasswordMatching(password === confirmPassword);

//     if (isUsernameValid && isEmailValid && isPasswordValid && isPasswordMatching) {
//       try {
//         const response = await axios.post('http://localhost:3005/register', {
//           username,
//           name,
//           email,
//           password,
//           confirmpassword: confirmPassword,
//         });

//         if (response.status === 200) {
//           setRegistrationSuccess(true);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const getInputClassName = (isValid, value) => {
//     if (value && !isValid) {
//       return 'form-control is-invalid';
//     }
//     return 'form-control';
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={() => setModal(!modal)} className="custom-modal">
//         <ModalHeader className="custom-modal-header">Registration</ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">User Name</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 value={username}
//                 className={getInputClassName(isUsernameValid, username)}
//                 placeholder="User Name"
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               {!isUsernameValid && /\s/.test(username) && <div className="text-danger">Username cannot contain spaces.</div>}
//             </FormGroup>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={email}
//                 className={getInputClassName(isEmailValid, email)}
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {!isEmailValid && !/@/.test(email) && <div className="text-danger">Invalid email address.</div>}
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={password}
//                 className={getInputClassName(isPasswordValid, password)}
//                 placeholder="Password"
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   validatePassword(e.target.value);
//                 }}
//               />
//               {!isPasswordValid && (
//                 <div className="text-danger">
//                   Password must be at least 8 characters and include one capital letter, one number, and one special character.
//                 </div>
//               )}
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmPassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 name="confirmpassword"
//                 value={confirmPassword}
//                 className={getInputClassName(isPasswordMatching, confirmPassword)}
//                 placeholder="Confirm Password"
//                 onChange={(e) => {
//                   setConfirmPassword(e.target.value);
//                   setIsPasswordMatching(password === e.target.value);
//                 }}
//               />
//               {!isPasswordMatching && <div className="text-danger">Passwords do not match.</div>}
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button color="primary" onClick={handleRegister} className="custom-button">
//             Register
//           </Button>
//           <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//             Already have an account? Login
//           </Link>
//         </ModalFooter>
//       </Modal>
//       {registrationSuccess && <div className="alert alert-success">Registration successful!</div>}
//     </div>
//   );
// };

// export default RegistrationComponent;//password validation is good

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationComponent = () => {
  const [modal, setModal] = useState(true);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordMatching, setIsPasswordMatching] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [existingUsernames, setExistingUsernames] = useState([]);
  const [suggestedUsernames, setSuggestedUsernames] = useState([]);

  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

  const checkUsernameAvailability = async (value) => {
    if (value) {
      try {
        const response = await axios.post('http://localhost:3005/check-username', {
          username: value,
        });

        if (response.status === 200) {
          setIsUsernameValid(true);
        }
      } catch (error) {
        setIsUsernameValid(false);
        // If the username is not available, suggest alternatives
        if (error.response.status === 400) {
          setExistingUsernames(error.response.data.existingUsernames);
        }
      }
    }
  };

  const checkEmailFormat = (value) => {
    setIsEmailValid(value.includes('@'));
  };

  const validatePassword = (value) => {
    setIsPasswordValid(passwordRegex.test(value));
  };

  const handleRegister = async () => {
    setIsUsernameValid(!/\s/.test(username));
    checkEmailFormat(email);
    validatePassword(password);
    setIsPasswordMatching(password === confirmPassword);

    if (isUsernameValid && isEmailValid && isPasswordValid && isPasswordMatching) {
      try {
        const response = await axios.post('http://localhost:3005/register', {
          username,
          name,
          email,
          password,
          confirmpassword: confirmPassword,
        });

        if (response.status === 200) {
          setRegistrationSuccess(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getInputClassName = (isValid, value) => {
    if (value && !isValid) {
      return 'form-control is-invalid';
    }
    return 'form-control';
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)} className="custom-modal">
        <ModalHeader className="custom-modal-header">Registration</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">User Name</Label>
              <Input
                type="text"
                name="username"
                value={username}
                className={getInputClassName(isUsernameValid, username)}
                placeholder="User Name"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setUsername(newValue);
                  checkUsernameAvailability(newValue);
                }}
              />
              {!isUsernameValid && !/\s/.test(username) && <div className="text-danger">Username not available.</div>}
              {suggestedUsernames.length > 0 && (
                <div className="text-danger">
                  Suggested usernames: {suggestedUsernames.join(', ')}
                </div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={email}
                className={getInputClassName(isEmailValid, email)}
                placeholder="Email"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setEmail(newValue);
                  checkEmailFormat(newValue);
                }}
              />
              {!isEmailValid && !email.includes('@') && <div className="text-danger">Invalid email address.</div>}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                value={password}
                className={getInputClassName(isPasswordValid, password)}
                placeholder="Password"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setPassword(newValue);
                  validatePassword(newValue);
                }}
              />
              {!isPasswordValid && (
                <div className="text-danger">
                  Password must be at least 8 characters and include one capital letter, one number, and one special character.
                </div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmpassword"
                value={confirmPassword}
                className={getInputClassName(isPasswordMatching, confirmPassword)}
                placeholder="Confirm Password"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setConfirmPassword(newValue);
                  setIsPasswordMatching(password === newValue);
                }}
              />
              {!isPasswordMatching && <div className="text-danger">Passwords do not match.</div>}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="custom-modal-footer">
          <Button color="primary" onClick={handleRegister} className="custom-button">
            Register
          </Button>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Already have an account? Login
          </Link>
        </ModalFooter>
      </Modal>
      {registrationSuccess && <div className="alert alert-success">Registration successful!</div>}
    </div>
  );
};

export default RegistrationComponent;// almost nice code

// import React, { useState, useEffect } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, FormGroup, Label } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const RegistrationComponent = () => {
//   const navigate = useNavigate();
//   const [modal, setModal] = useState(true);
//   const [username, setUsername] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   const [isPasswordValid, setIsPasswordValid] = useState(true);
//   const [isPasswordMatching, setIsPasswordMatching] = useState(true);
//   const [isUsernameValid, setIsUsernameValid] = useState(true);
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const [isIdRegistered, setIsIdRegistered] = useState(false);
//   const [suggestedUsernames, setSuggestedUsernames] = useState([]);

//   const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

//   const checkUsernameAvailability = async (value) => {
//     if (value) {
//       try {
//         const response = await axios.post('http://localhost:3005/check-username', {
//           username: value,
//         });

//         if (response.status === 200) {
//           setIsUsernameValid(true);
//         }
//       } catch (error) {
//         setIsUsernameValid(false);
//         if (error.response.status === 400) {
//           // If the username is not available, suggest alternatives
//           setSuggestedUsernames(error.response.data.suggestedUsernames);
//         } else {
//           setIsIdRegistered(true);
//         }
//       }
//     }
//   };

//   const checkEmailFormat = (value) => {
//     setIsEmailValid(value.includes('@'));
//   };

//   const validatePassword = (value) => {
//     setIsPasswordValid(passwordRegex.test(value));
//   };

//   const handleRegister = async () => {
//     setIsUsernameValid(!/\s/.test(username));
//     checkEmailFormat(email);
//     validatePassword(password);
//     setIsPasswordMatching(password === confirmPassword);

//     if (isUsernameValid && isEmailValid && isPasswordValid && isPasswordMatching) {
//       try {
//         const response = await axios.post('http://localhost:3005/register', {
//           username,
//           name,
//           email,
//           password,
//           confirmpassword: confirmPassword,
//         });

//         if (response.status === 200) {
//           setRegistrationSuccess(true);
//           setIsIdRegistered(false);
//           setSuggestedUsernames([]);
//           navigate('/login');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const getInputClassName = (isValid, value) => {
//     if (value && !isValid) {
//       return 'form-control is-invalid';
//     }
//     return 'form-control';
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={() => setModal(!modal)} className="custom-modal">
//         <ModalHeader className="custom-modal-header">Registration</ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">User Name</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 value={username}
//                 className={getInputClassName(isUsernameValid, username)}
//                 placeholder="User Name"
//                 onChange={(e) => {
//                   const newValue = e.target.value;
//                   setUsername(newValue);
//                   checkUsernameAvailability(newValue);
//                 }}
//               />
//               {!isUsernameValid && !/\s/.test(username) && (
//                 <div className="text-danger">
//                   {isIdRegistered ? 'User already exists.' : 'Username not available.'}
//                 </div>
//               )}
//               {suggestedUsernames.length > 0 && (
//                 <div className="text-danger">
//                   Suggested usernames: {suggestedUsernames.join(', ')}
//                 </div>
//               )}
//             </FormGroup>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={name}
//                 placeholder="Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={email}
//                 className={getInputClassName(isEmailValid, email)}
//                 placeholder="Email"
//                 onChange={(e) => {
//                   const newValue = e.target.value;
//                   setEmail(newValue);
//                   checkEmailFormat(newValue);
//                 }}
//               />
//               {!isEmailValid && !email.includes('@') && (
//                 <div className="text-danger">Invalid email address.</div>
//               )}
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={password}
//                 className={getInputClassName(isPasswordValid, password)}
//                 placeholder="Password"
//                 onChange={(e) => {
//                   const newValue = e.target.value;
//                   setPassword(newValue);
//                   validatePassword(newValue);
//                 }}
//               />
//               {!isPasswordValid && (
//                 <div className="text-danger">
//                   Password must be at least 8 characters and include one capital letter, one number, and one special character.
//                 </div>
//               )}
//             </FormGroup>
//             <FormGroup>
//               <Label for="confirmPassword">Confirm Password</Label>
//               <Input
//                 type="password"
//                 name="confirmpassword"
//                 value={confirmPassword}
//                 className={getInputClassName(isPasswordMatching, confirmPassword)}
//                 placeholder="Confirm Password"
//                 onChange={(e) => {
//                   const newValue = e.target.value;
//                   setConfirmPassword(newValue);
//                   setIsPasswordMatching(password === newValue);
//                 }}
//               />
//               {!isPasswordMatching && <div className="text-danger">Passwords do not match.</div>}
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button color="primary" onClick={handleRegister} className="custom-button">
//             Register
//           </Button>
//           <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//             Already have an account? Login
//           </Link>
//         </ModalFooter>
//       </Modal>
//       {registrationSuccess && <div className="alert alert-success">Registration successful!</div>}
//     </div>
//   );
// };

// export default RegistrationComponent;//working