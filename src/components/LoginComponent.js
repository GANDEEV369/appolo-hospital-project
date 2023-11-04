// // src/LoginComponent.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './redux/loginActions';
// import './styles.css';

// const LoginComponent = () => {
//   const dispatch = useDispatch();
//   const loginResult = useSelector((state) => state.loginResult);

//   const [name, setName] = useState('');
//   const [salary, setSalary] = useState('');

//   const handleLogin = () => {
//     dispatch(login(name, salary));
//   };

//   return (
//     <div className="auth-form">
//       <h2>Login</h2>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="text" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//       <pre>{JSON.stringify(loginResult, null, 2)}</pre>
//     </div>
//   );
// };

// export default LoginComponent;
// Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css'; // Import the CSS file

// const Login = () => {
//   const [id, setId] = useState('');
//   const [result, setResult] = useState(null);
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [loginError, setLoginError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/login/${id}`);
//       setResult(response.data);
//       setLoginSuccess(true);
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setResult(null);
//       setLoginSuccess(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <label htmlFor="id">Employee ID:</label>
//       <input
//         type="text"
//         id="id"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>

//       {result && (
//         <div>
//           <h3>Login Result:</h3>
//           <pre>{JSON.stringify(result, null, 2)}</pre>
//         </div>
//       )}
//       {loginSuccess && (
//       <div className="success-message">Login successful!</div>
//       )}
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [id, setId] = useState('');
//   const [result, setResult] = useState(null);
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [loginError, setLoginError] = useState(false);

//   //
//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/login/${id}`);
//       if (response.data.message === "Login successful") {
//         setResult(response.data);
//         setLoginSuccess(true);
//         setLoginError('');
//       } else {
//         // Set the login error message for non-existent ID
//         setLoginError('Login failed - ID not found');
//         setLoginSuccess(false);
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setResult(null);
//       setLoginSuccess(false);
//       setLoginError('');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <label htmlFor="id">Employee ID:</label>
//       <input
//         type="number"
//         id="id"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>

//       {/* Display login error message in a message box */}
//       {loginError && (
//         <div className="error-message">{loginError}</div>
//       )}

//       {/* Display success message if login was successful */}
//       {loginSuccess && (
//         <div className="success-message">Login successful!</div>
//       )}

//       {result && (
//         <div>
//           <h3>Login Result:</h3>
//           <pre>{JSON.stringify(result, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setLoginResult } from './redux/actions';

// const Login = () => {
//   const [id, setId] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/login/${id}`);
//       if (response.data.message === '1 document found') {
//         dispatch(setLoginResult(response.data.data));
//       } else {
//         alert('Login failed - ID not found');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [id, setId] = useState('');
//   const [employee, setEmployee] = useState(null);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/login/${id}`);
//       setEmployee(response.data);
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//       {employee && (
//         <div>
//           <h3>Employee Details:</h3>
//           <pre>{JSON.stringify(employee, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
//##########################################################################################
//######################################################################################################
// import React, { useState } from 'react';
// import axios from 'axios';
// const LoginComponent = () => {

//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   // const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/login/${username}/${password}/`);
//       if (response.data) {
//         setMessage('Login successful');
//       } else {
//         setMessage('Login unsuccessful');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };
//   return (
//     <div className='auth-form'>

//       {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
//       <input type="text" placeholder='User Name' value={username} onChange={(e) => setUserName(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

//       {/* <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
//       <br></br>
//       <button onClick={handleLogin}>Login</button>
//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };
// export default LoginComponent;//actual code
// import React, { useState } from 'react';
// import {Link} from 'react-router-dom'
// // // import LoginComponent from '../../../reduxlearning/src/LoginComponent';

// const LoginComponent = ({ closeModal, handleLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = () => {
//     // Perform login logic, and if successful, call handleLogin with user details
//     const user = { username, name: 'User Name' }; // Replace with actual user data
//     handleLogin(user);
//   };

//   return (
//     <div className="modal">
//       <h1>hii</h1>
//       <div className="modal-content">
//         <span className="close" onClick={closeModal}>
//           &times;
//         </span>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Login</button>
//       </div>
//       <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Create Account</Link>
//     </div>
//   );
// };

// export default LoginComponent;
// import React, { useState } from "react";
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
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const LoginComponent = () => {
//   const [modal, setModal] = useState(false);
//   const toggleModal = () => setModal(!modal);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate(); // Get the navigation function

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3005/login/${username}/${password}/`
//       );
//       if (response.data) {
//         setMessage("Login successful");
//         navigate("/home"); // Redirect to the homepage
//       } else {
//         setMessage("Login unsuccessful");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div>
//       <button color="primary" onClick={toggleModal}>
//         Login
//       </button>

//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Login
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input type="password" name="password"placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//             </FormGroup>
//           </Form>
//           {/* <Input
//             type="text"
//             placeholder="User Name"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           /> */}
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button
//             color="primary"
//             onClick={handleLogin}
//             className="custom-button"
//           >
//             Login
//           </Button>
//           <Link
//             to="/signup"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Create Account
//           </Link>
//         </ModalFooter>
//       </Modal>

//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginComponent;
// import React, { useState, useEffect } from "react";//main actual code
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
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginComponent = () => {
//   const [modal, setModal] = useState(true); // Set the modal to open by default
//   const toggleModal = () => setModal(!modal);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate(); // Get the navigation function

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3005/login/${username}/${password}/`
//       );
//       if (response.data) {
//         setMessage("Login successful");
//         navigate("/home"); // Redirect to the homepage
//       } else {
//         setMessage("Login unsuccessful");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Login
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button
//             color="primary"
//             onClick={handleLogin}
//             className="custom-button"
//           >
//             Login
//           </Button>
//           <Link
//             to="/signup"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Create Account
//           </Link>
//         </ModalFooter>
//       </Modal>

//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginComponent;
// import React, { useState, useEffect } from "react";//experiment
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
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import UserIcon from "./UserMenu"; // Import the UserIcon component
// import Header from "./Header";
// import './LoginComponent.css';

// const LoginComponent = () => {
//   const [modal, setModal] = useState(true);
//   const toggleModal = () => setModal(!modal);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
//   // const navigate = useNavigate();
//   // const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3005/login/${username}/${password}/`
//       );
//       if (response.data) {
//         setUserDetails(response.data);
//         setIsLoggedIn(true);
//         setMessage("Login successful");
//         // navigate('/home')
//       } else {
//         setMessage("Login unsuccessful");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setMessage("");
//     setUserDetails({});
//   };

//   if (location.pathname === "/home") {
//     return null;
//   }

//   return (
//     <div>
//       <Header/>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Login
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           {isLoggedIn ? (
//             <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//           ) : (
//             <Button color="primary" onClick={handleLogin} className="custom-button">
//               Login
//             </Button>
//           )}
//           {!isLoggedIn && (
//             <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//               Create Account
//             </Link>
//           )}
//         </ModalFooter>
//       </Modal>
//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginComponent;
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";//present
// import axios from "axios";
// import UserIcon from "./UserMenu";
// import Header from "./Header";
// import './LoginComponent.css';
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
// const LoginComponent = () => {
//   const [modal, setModal] = useState(true);
//   const toggleModal = () => setModal(!modal);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
//   const location = useLocation();

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   useEffect(() => {
//     // Check the user's login state when the component mounts
//     checkLoginState();
//   }, []);

//   const checkLoginState = async () => {
//     // You may want to check the user's login status here
//     // For example, if the user's login token is stored in a cookie or local storage,
//     // you can check it here to determine if the user is logged in or not.
//     // If the user is logged in, set isLoggedIn and userDetails accordingly.
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3005/login/${username}/${password}/`
//       );
//       if (response.data) {
//         setUserDetails(response.data);
//         setIsLoggedIn(true);
//         setMessage("Login successful");
//       } else {
//         setMessage("Login unsuccessful");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setMessage("");
//     setUserDetails({});
//   };

//   return (
//     <div>
//       <Header/>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Login
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           {isLoggedIn ? (
//             <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//           ) : (
//             <Button color="primary" onClick={handleLogin} className="custom-button">
//               Login
//             </Button>
//           )}
//           {!isLoggedIn && !location.pathname.includes('/home') && (
//             <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//               Create Account
//             </Link>
//           )}
//         </ModalFooter>
//       </Modal>
//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginComponent;


// import React, { useState, useEffect } from "react";
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
// import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import userBG from "../images/userlogin.jpg"
// // import userBG from "../images/userlogin.jpg";
// import './LoginComponent.css';

// const LoginComponent = () => {
//   const [modal, setModal] = useState(true); // Set the modal to open by default
//   const toggleModal = () => setModal(!modal);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation(); // Get the current location

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3005/login/${username}/${password}/`
//       );
//       if (response.data) {
//         setMessage("Login successful");
//         navigate("/home"); // Redirect to the homepage
//       } else {
//         setMessage("Login unsuccessful");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   // Check if the current route is the home page ("/home") and don't render the login form
//   if (location.pathname === "/home") {
//     return null;
//   }

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal}  className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Login
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           <Button
//             color="primary"
//             onClick={handleLogin}
//             className="custom-button"
//           >
//             Login
//           </Button>
//           <Link
//             to="/signup"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Create Account
//           </Link>
//         </ModalFooter>
//       </Modal>

//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };
// // custom-modal {
// //   background-image: url('path/to/your-background-image.jpg');
// //   background-size: cover; /* Adjust as needed */
// //   background-position: center; /* Adjust as needed */
// //   /* Other styles for the modal container */
// // }

// export default LoginComponent;
// import React, { useState, useEffect } from "react";
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
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import UserIcon from "./UserMenu"; // Import the UserIcon component

// import './LoginComponent.css';

// const LoginComponent = () => {
//   const [modal, setModal] = useState(true);
//   const toggleModal = () => setModal(!modal);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({});

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3005/login/${username}/${password}/`
//       );
//       if (response.data) {
//         setUserDetails(response.data);
//         setIsLoggedIn(true);
//         navigate("/home");
//         setMessage("Login successful");
//       } else {
//         setMessage("Login unsuccessful");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setMessage("");
//     setUserDetails({});
//   };

//   if (location.pathname === "/home") {
//     return null;
//   }

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Login
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           {isLoggedIn ? (
//             <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//           ) : (
//             <Button color="primary" onClick={handleLogin} className="custom-button">
//               Login
//             </Button>
//           )}
//           {!isLoggedIn && (
//             <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//               Create Account
//             </Link>
//           )}
//         </ModalFooter>
//       </Modal>
//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginComponent;
// import React, { useState, useEffect } from "react";//actual code with message box
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
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import UserIcon from "./UserMenu"; // Import the UserIcon component

// import './LoginComponent.css';

// const LoginComponent = () => {
//   const [modal, setModal] = useState(true);
//   const toggleModal = () => setModal(!modal);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({});

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3005/login/${username}/${password}/`
//       );
//       if (response.data) {
//         setUserDetails(response.data);
//         setIsLoggedIn(true);
//         navigate("/");
//         // setMessage("Login successful");
//         alert("Login successful");
//       } else {
//         // setMessage("Login unsuccessful");
//         alert("Login successful");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     // setMessage("");
//     // alert("");
//     setUserDetails({});
//   };

//   if (location.pathname === "/") {
//     return null;
//   }

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Login
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           {isLoggedIn ? (
//             <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//           ) : (
//             <Button color="primary" onClick={handleLogin} className="custom-button">
//               Login
//             </Button>
//           )}
//           {!isLoggedIn && (
//             <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//               Register
//             </Link>
//           )}
//         </ModalFooter>
//       </Modal>
//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginComponent;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function LoginComponent({ handleLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLoginClick = () => {
//     // Simulate a successful login
//     const user = { username: "john_doe", name: "John Doe", email: "john@example.com" };
//     handleLogin(user);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLoginClick}>Login</button>
//       <Link to="/signup">Register</Link>
//     </div>
//   );
// }

// export default LoginComponent;
// import React, { useState, useEffect } from "react";//present
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
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import UserIcon from "./UserMenu"; // Import the UserIcon component

// import './LoginComponent.css';

// const LoginComponent = () => {
//   const [modal, setModal] = useState(true);
//   const toggleModal = () => setModal(!modal);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
  
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // You can add any initial logic here
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3005/login/${username}/${password}/`
//       );
//       if (response.data) {
//         setUserDetails(response.data);
//         setIsLoggedIn(true);
//         setMessage("Login successful");

//       } else {
//         setMessage("Login unsuccessful");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setMessage("");
//     setUserDetails({});
//   };

//   if (location.pathname === "/home") {
//     return null;
//   }

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Login
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           {isLoggedIn ? (
//             <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//           ) : (
//             <Button color="primary" onClick={handleLogin} className="custom-button">
//               Login
//             </Button>
//           )}
//           {!isLoggedIn && (
//             <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//               Create Account
//             </Link>
//           )}
//         </ModalFooter>
//       </Modal>
//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginComponent;
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Form,
  Label,
  FormGroup,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from './AuthContext'; // Import the AuthContext
import UserIcon from "./UserMenu";
// import { useLocation } from 'react-router-dom';
const LoginComponent = () => {
  const { isLoggedIn, setIsLoggedIn,setIsAdmin, setIsDoctor, userDetails, setUserDetails } = useContext(AuthContext); // Use the AuthContext
  const location = useLocation();
  const [modal, setModal] = useState(true);
  const toggleModal = () => setModal(!modal);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // You can add any initial logic here
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3005/login/${username}/${password}/`
      );
      if (response.data) {
        setUserDetails(response.data);// actual line
        // setUserDetails({ ...response.data, userType: response.data.userType });  
        setIsLoggedIn(true);
        setIsAdmin(response.data.userType === 'admin');
        setIsDoctor(response.data.userType === 'doctor');
        setMessage("Login successful");
        navigate("/");
      } else {
        setMessage("Login unsuccessful");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMessage("");
    setUserDetails({});
  };

  if (location.pathname === "/home") {
    return null;
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
        <ModalHeader toggle={toggleModal} className="custom-modal-header">
          Login
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="custom-modal-footer">
          {isLoggedIn ? (
            <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
          ) : (
            <Button color="primary" onClick={handleLogin} className="custom-button">
              Login
            </Button>
          )}
          {!isLoggedIn && (
            <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
              Create Account
            </Link>
          )}
        </ModalFooter>
      </Modal>
      {message && (
        <div>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;//correct code

// import React, { useState, useContext } from "react"; //rough waste code
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, Form, Label, FormGroup } from "reactstrap";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from './AuthContext';
// import UserIcon from "./UserMenu";
// const LoginComponent = () => {
//   const { isLoggedIn, setIsLoggedIn, } = useContext(AuthContext);
//   const location = useLocation();
//   const [modal, setModal] = useState(true);
//   const toggleModal = () => setModal(!modal);
//   const [userDetails, setUserDetails] = useState({});
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [userType, setUserType] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3005/login/${username}/${password}`);
//       if (response.data.userType === "user") {
//         setUserDetails(response.data.user);
//         setIsLoggedIn(true);
//         setUserType("user");
//         setMessage("User login successful");
//       } else if (response.data.userType === "doctor") {
//         setUserDetails(response.data.user);
//         setIsLoggedIn(true);
//         setUserType("doctor");
//         setMessage("Doctor login successful");
//       } else if (response.data.userType === "admin") {
//         setUserType("admin");
//         setMessage("Admin login successful");
//       } else {
//         setUserType("");
//         setMessage("Login unsuccessful");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       setMessage("Error logging in");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setMessage("");
//     setUserType("");
//   };

//   if (location.pathname === "/home") {
//     return null;
//   }

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
//         <ModalHeader toggle={toggleModal} className="custom-modal-header">
//           Login
//         </ModalHeader>
//         <ModalBody>
//           <Form>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="User Name"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter className="custom-modal-footer">
//           {isLoggedIn ? (
//             <div>
//               <p>Welcome, {userDetails.name}</p>
//               {userType === "doctor" && <p>You are a doctor.</p>}
//               {userType === "admin" && <p>You are an admin.</p>}
//               <Button color="primary" onClick={handleLogout} className="custom-button">
//                 Logout
//               </Button>
//             </div>
//           ) : (
//             <Button color="primary" onClick={handleLogin} className="custom-button">
//               Login
//             </Button>
//           )}
//           {!isLoggedIn && (
//             <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//               Create Account
//             </Link>
//           )}
//                     {/* {isLoggedIn ? (
//             <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//           ) : (
//             <Button color="primary" onClick={handleLogin} className="custom-button">
//               Login
//             </Button>
//           )}
//           {!isLoggedIn && (
//             <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//               Create Account
//             </Link>
//           )} */}
//         </ModalFooter>
//       </Modal>
//       {message && (
//         <div>
//           <h3>{message}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginComponent;
