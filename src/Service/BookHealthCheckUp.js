// import React, { useState, useContext } from "react";
// import { AuthContext } from "../components/AuthContext";
// const BookHealthCheckUp = () => {
//   const { userDetails, isLoggedIn } = useContext(AuthContext);

//   const [name, setName] = useState(isLoggedIn ? userDetails.name : "");
//   const [email, setEmail] = useState(isLoggedIn ? userDetails.email : "");
//   // const [phone, setPhone] = useState(isLoggedIn ? userDetails.phone : "");
//   const [submitted, setSubmitted] = useState(false);
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [time, setTime] = useState("");
//   const [healthCheck, setHealthCheck] = useState("");
//   const [message, setMessage] = useState("");

//   const submitForm = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url("https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg?w=2000")`,
//         backgroundSize: "cover",
//         margin: 0,
//         padding: "30px",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundPosition: "center",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <img
//         className="logo"
//         src="https://e1.pxfuel.com/desktop-wallpaper/178/954/desktop-wallpaper-clipart-hospital-blue-hospital-logo.jpg"
//         alt="logo"
//         style={{
//           position: "fixed",
//           bottom: "605px",
//           left: "20px",
//           width: "50px",
//           height: "50px",
//         }}
//       />
//       <div
//         className="container"
//         style={{
//           maxWidth: "400px",
//           backgroundColor: "gainsboro",
//           padding: "50px",
//           marginTop: "auto",
//           marginBottom: "auto",
//           marginLeft: "auto",
//           marginRight: "auto",
//           borderRadius: "5px",
//           boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
//           width: "150vw",
//         }}
//       >
//         <h1 style={{ textAlign: "center" }}>Booking Health Check-up</h1>
//         {submitted ? (
//           <div className="response" style={{ marginTop: "20px", textAlign: "center", color: "green" }}>
//             Thank you, {name}! Your health check-up has been booked successfully.
//           </div>
//         ) : (
//           <form
//             id="booking-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               submitForm();
//             }}
//           >
//             <div className="form-group">
//               <label for="name" style={{ fontWeight: "bold", display: "block" }}>
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label for="email" style={{ fontWeight: "bold", display: "block" }}>
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label for="phone" style={{ fontWeight: "bold", display: "block" }}>
//                 Phone:
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label
//                 for="appointment-date"
//                 style={{ fontWeight: "bold", display: "block" }}
//               >
//                 Appointment Date:
//               </label>
//               <input
//                 type="date"
//                 id="appointment-date"
//                 name="appointment-date"
//                 required
//                 value={appointmentDate}
//                 onChange={(e) => setAppointmentDate(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label for="time" style={{ fontWeight: "bold", display: "block" }}>
//                 Select Time:
//               </label>
//               <input
//                 type="time"
//                 id="time"
//                 name="time"
//                 required
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label
//                 for="healthcheck"
//                 style={{ fontWeight: "bold", display: "block" }}
//               >
//                 Select Health Checkup:
//               </label>
//               <select
//                 id="healthcheck"
//                 name="healthcheck"
//                 required
//                 value={healthCheck}
//                 onChange={(e) => setHealthCheck(e.target.value)}
//               >
//                 <option value="">Select a health checkup</option>
//                 <option value="general">General Checkup</option>
//                 <option value="blood">Blood Test</option>
//                 <option value="xray">X-Ray</option>
//                 <option value="MRI">MRI</option>
//                 <option value="CT Scan">CT Scan</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label
//                 for="message"
//                 style={{ fontWeight: "bold", display: "block" }}
//               >
//                 Additional Message:
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Enter any additional message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               style={{
//                 backgroundColor: "#25907e",
//                 color: "white",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//                 width: "100%",
//                 fontSize: "16px",
//               }}
//             >
//               Book Now
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookHealthCheckUp;
// import React, { useState, useContext, useEffect } from "react";
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Label, Input, FormGroup } from "reactstrap";
// import { AuthContext } from "../components/AuthContext";

// const countries = [
//   { code: "+91", name: "India" },
//   { code: "+1", name: "United States" },
//   // Add more countries here
// ];

// const BookHealthCheckUp = () => {
//   const { userDetails, isLoggedIn } = useContext(AuthContext);

//   const [modal, setModal] = useState(true); // Show the modal directly
//   const toggle = () => setModal(!modal);

//   const [name, setName] = useState(isLoggedIn ? userDetails.name : "");
//   const [email, setEmail] = useState(isLoggedIn ? userDetails.email : "");
//   const [phone, setPhone] = useState(isLoggedIn ? userDetails.phone : "");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [time, setTime] = useState("");
//   const [healthCheck, setHealthCheck] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (isLoggedIn) {
//       // Pre-fill the name and email if the user is logged in
//       setName(userDetails.name);
//       setEmail(userDetails.email);
//     }
//   }, [isLoggedIn, userDetails]);

//   const submitForm = () => {
//     // Handle form submission logic here
//     // You can use the form data, like name, email, phone, etc.
//     // Once the form is submitted, you can set the 'submitted' state to true
//   };

//   return (
//     <Modal isOpen={modal} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Booking Health Check-up</ModalHeader>
//       <ModalBody>
//         <Form onSubmit={submitForm}>
//           <FormGroup>
//             <Label for="country">Country:</Label>
//             <Input
//               type="select"
//               id="country"
//               name="country"
//               required
//               onChange={(e) => {
//                 const selectedCountryCode = e.target.value;
//                 setPhone(selectedCountryCode);
//               }}
//             >
//               {countries.map((country) => (
//                 <option key={country.code} value={country.code}>
//                   {`${country.code} (${country.name})`}
//                 </option>
//               ))}
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="phone">Phone:</Label>
//             <Input
//               type="text"
//               id="phone"
//               name="phone"
//               placeholder="Enter your phone number"
//               required
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="name">Name:</Label>
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">Email:</Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="appointmentDate">Appointment Date:</Label>
//             <Input
//               type="date"
//               id="appointmentDate"
//               name="appointmentDate"
//               required
//               value={appointmentDate}
//               onChange={(e) => setAppointmentDate(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="time">Select Time:</Label>
//             <Input
//               type="time"
//               id="time"
//               name="time"
//               required
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="healthCheck">Select Health Checkup:</Label>
//             <Input
//               type="select"
//               id="healthCheck"
//               name="healthCheck"
//               required
//               value={healthCheck}
//               onChange={(e) => setHealthCheck(e.target.value)}
//             >
//               <option value="">Select a health checkup</option>
//               <option value="general">General Checkup</option>
//               <option value="blood">Blood Test</option>
//               <option value="xray">X-Ray</option>
//               <option value="MRI">MRI</option>
//               <option value="CT Scan">CT Scan</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="message">Additional Message:</Label>
//             <Input
//               type="textarea"
//               id="message"
//               name="message"
//               placeholder="Enter any additional message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </FormGroup>
//         </Form>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={submitForm}>
//           Book Now
//         </Button>
//         <Button color="secondary" onClick={toggle}>
//           Cancel
//         </Button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default BookHealthCheckUp;//actual code 



// import React, { useState } from "react";

// const BookHealthCheckUp = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [time, setTime] = useState("");
//   const [healthCheck, setHealthCheck] = useState("");
//   const [message, setMessage] = useState("");

//   const submitForm = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url("https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg?w=2000")`,
//         backgroundSize: "cover",
//         margin: 0,
//         padding: "30px",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundPosition: "center",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <img
//         className="logo"
//         src="https://e1.pxfuel.com/desktop-wallpaper/178/954/desktop-wallpaper-clipart-hospital-blue-hospital-logo.jpg"
//         alt="logo"
//         style={{
//           position: "fixed",
//           bottom: "605px",
//           left: "20px",
//           width: "50px",
//           height: "50px",
//         }}
//       />
//       <div
//         className="container"
//         style={{
//           maxWidth: "400px",
//           backgroundColor: "gainsboro",
//           padding: "50px",
//           marginTop: "auto",
//           marginBottom: "auto",
//           marginLeft: "auto",
//           marginRight: "auto",
//           borderRadius: "5px",
//           boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
//           width: "150vw",
//         }}
//       >
//         <h1 style={{ textAlign: "center" }}>Booking Health Check-up</h1>
//         {submitted ? (
//           <div className="response" style={{ marginTop: "20px", textAlign: "center", color: "green" }}>
//             Thank you, {name}! Your health check-up has been booked successfully.
//           </div>
//         ) : (
//           <form
//             id="booking-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               submitForm();
//             }}
//           >
//             <div className="form-group">
//               <label htmlFor="name" style={{ fontWeight: "bold", display: "block" }}>
//                 Full Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your full name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email" style={{ fontWeight: "bold", display: "block" }}>
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone" style={{ fontWeight: "bold", display: "block" }}>
//                 Phone:
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label
//                 htmlFor="appointment-date"
//                 style={{ fontWeight: "bold", display: "block" }}
//               >
//                 Appointment Date:
//               </label>
//               <input
//                 type="date"
//                 id="appointment-date"
//                 name="appointment-date"
//                 required
//                 value={appointmentDate}
//                 onChange={(e) => setAppointmentDate(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="time" style={{ fontWeight: "bold", display: "block" }}>
//                 Select Time:
//               </label>
//               <input
//                 type="time"
//                 id="time"
//                 name="time"
//                 required
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label
//                 htmlFor="healthcheck"
//                 style={{ fontWeight: "bold", display: "block" }}
//               >
//                 Select Health Checkup:
//               </label>
//               <select
//                 id="healthcheck"
//                 name="healthcheck"
//                 required
//                 value={healthCheck}
//                 onChange={(e) => setHealthCheck(e.target.value)}
//               >
//                 <option value="">Select a health checkup</option>
//                 <option value="general">General Checkup</option>
//                 <option value="blood">Blood Test</option>
//                 <option value="xray">X-Ray</option>
//                 <option value="MRI">MRI</option>
//                 <option value="CT Scan">CT Scan</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label
//                 htmlFor="message"
//                 style={{ fontWeight: "bold", display: "block" }}
//               >
//                 Additional Message:
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Enter any additional message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               style={{
//                 backgroundColor: "#25907e",
//                 color: "white",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//                 width: "100%",
//                 fontSize: "16px",
//               }}
//             >
//               Book Now
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookHealthCheckUp;
// import React, { useState } from "react";
// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
// } from "reactstrap";
// import medicalcheckup from '../images/medicalcheckup.jpg';
// const modalStyles = {
//   background: `url(${medicalcheckup})`,
//   backgroundSize: "cover",
// };
// const BookHealthCheckUp = () => {
//   const [showModal, setShowModal] = useState(true); // Show the modal by default
//   const [submitted, setSubmitted] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [time, setTime] = useState("");
//   const [healthCheck, setHealthCheck] = useState("");
//   const [message, setMessage] = useState("");

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const submitForm = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div>
//       <Modal isOpen={showModal} toggle={handleCloseModal}>
//         <ModalHeader toggle={handleCloseModal}>Booking Health Check-up</ModalHeader>
//         <ModalBody>
//           {submitted ? (
//             <div className="response" style={{ textAlign: "center", color: "green" }}>
//               Thank you, {name}! Your health check-up has been booked successfully.
//             </div>
//           ) : (
//             <Form id="booking-form" onSubmit={(e) => e.preventDefault()}>
//               <FormGroup>
//                 <Label for="name">Full Name:</Label>
//                 <Input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter your full name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="email">Email:</Label>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="phone">Phone:</Label>
//                 <Input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="appointmentDate">Appointment Date:</Label>
//                 <Input
//                   type="date"
//                   id="appointmentDate"
//                   name="appointmentDate"
//                   value={appointmentDate}
//                   onChange={(e) => setAppointmentDate(e.target.value)}
//                   required
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="time">Select Time:</Label>
//                 <Input
//                   type="time"
//                   id="time"
//                   name="time"
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                   required
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="healthCheck">Select Health Checkup:</Label>
//                 <Input
//                   type="select"
//                   id="healthCheck"
//                   name="healthCheck"
//                   value={healthCheck}
//                   onChange={(e) => setHealthCheck(e.target.value)}
//                   required
//                 >
//                   <option value="">Select a health checkup</option>
//                   <option value="general">General Checkup</option>
//                   <option value="blood">Blood Test</option>
//                   <option value="xray">X-Ray</option>
//                   <option value="MRI">MRI</option>
//                   <option value="CT Scan">CT Scan</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="message">Additional Message:</Label>
//                 <Input
//                   type="textarea"
//                   id="message"
//                   name="message"
//                   placeholder="Enter any additional message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//               </FormGroup>
//               <Button color="success" onClick={submitForm} style={{ width: "100%" }}>
//                 Book Now
//               </Button>
//             </Form>
//           )}
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// };

// export default BookHealthCheckUp;
// import React, { useState, useContext, useEffect } from "react";
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Label, Input, FormGroup } from "reactstrap";
// import { AuthContext } from "../components/AuthContext";

// const countries = [
//   { code: "+91", name: "India" },
//   { code: "+1", name: "United States" },
//   // Add more countries here
// ];

// const BookHealthCheckUp = () => {
//   const { userDetails, isLoggedIn } = useContext(AuthContext);

//   const [modal, setModal] = useState(true);
//   const toggle = () => setModal(!modal);

//   const [name, setName] = useState(isLoggedIn ? userDetails.name : "");
//   const [email, setEmail] = useState(isLoggedIn ? userDetails.email : "");
//   const [phone, setPhone] = useState(isLoggedIn ? userDetails.phone : "");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [time, setTime] = useState("");
//   const [healthCheck, setHealthCheck] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (isLoggedIn) {
//       // Pre-fill the name, email, and phone if the user is logged in
//       setName(userDetails.name);
//       setEmail(userDetails.email);
//       setPhone(userDetails.phone);
//     }
//   }, [isLoggedIn, userDetails]);

//   const submitForm = () => {
//     // Handle form submission logic here
//     // You can use the form data, like name, email, phone, etc.
//     // Once the form is submitted, you can set the 'submitted' state to true
//   };

//   return (
//     <Modal isOpen={modal} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Booking Health Check-up</ModalHeader>
//       <ModalBody>
//         <Form onSubmit={submitForm}>
//           <FormGroup>
//             <Label for="country">Country:</Label>
//             <Input
//               type="select"
//               id="country"
//               name="country"
//               required
//               onChange={(e) => {
//                 const selectedCountryCode = e.target.value;
//                 setPhone(selectedCountryCode);
//               }}
//             >
//               {countries.map((country) => (
//                 <option key={country.code} value={country.code}>
//                   {`${country.code} (${country.name})`}
//                 </option>
//               ))}
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="phone">Phone:</Label>
//             <Input
//               type="text"
//               id="phone"
//               name="phone"
//               placeholder="Enter your phone number"
//               required
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="name">Name:</Label>
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="email">Email:</Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="appointmentDate">Appointment Date:</Label>
//             <Input
//               type="date"
//               id="appointmentDate"
//               name="appointmentDate"
//               required
//               value={appointmentDate}
//               onChange={(e) => setAppointmentDate(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="time">Select Time:</Label>
//             <Input
//               type="time"
//               id="time"
//               name="time"
//               required
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="healthCheck">Select Health Checkup:</Label>
//             <Input
//               type="select"
//               id="healthCheck"
//               name="healthCheck"
//               required
//               value={healthCheck}
//               onChange={(e) => setHealthCheck(e.target.value)}
//             >
//               <option value="">Select a health checkup</option>
//               <option value="general">General Checkup</option>
//               <option value="blood">Blood Test</option>
//               <option value="xray">X-Ray</option>
//               <option value="MRI">MRI</option>
//               <option value="CT Scan">CT Scan</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="message">Additional Message:</Label>
//             <Input
//               type="textarea"
//               id="message"
//               name="message"
//               placeholder="Enter any additional message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </FormGroup>
//         </Form>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={submitForm}>
//           Book Now
//         </Button>
//         <Button color="secondary" onClick={toggle}>
//           Cancel
//         </Button>
//       </ModalFooter>
//     </Modal>
//   );
// };

// export default BookHealthCheckUp;
import React, { useState, useContext, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Label, Input, FormGroup } from "reactstrap";
import { AuthContext } from "../components/AuthContext";
import axios from 'axios';
const countries = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  // Add more countries here
];

const BookHealthCheckUp = () => {
  const { userDetails, isLoggedIn } = useContext(AuthContext);

  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState(isLoggedIn ? userDetails[userDetails.userType].name : "");
  const [email, setEmail] = useState(isLoggedIn ? userDetails[userDetails.userType].email : "");
  const [phonenumber, setPhone] = useState(isLoggedIn ? userDetails.phone : "");
  const [countrycode, setCountryCode] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  
  const [time, setTime] = useState("");
  const [healthCheck, setHealthCheck] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      // Pre-fill the name, email, and phone if the user is logged in
      setName(userDetails.name);
      setEmail(userDetails.email);
      setPhone(userDetails.phone);
    }
  }, [isLoggedIn, userDetails]);

  const submitForm = async(event) => {
    // Handle form submission logic here
    // You can use the form data, like name, email, phone, etc.
    // Once the form is submitted, you can set the 'submitted' state to true
    try {
      // Create an object with the form data
      const formData = {
        countrycode,
        phonenumber,
        name,
        email,
        appointmentDate,
        time,
        healthCheck,
        message,

      };

      // Send the form data to your Express server
      const response = await axios.post("http://localhost:3005/bookhealthcheckup", formData);

      if (response.data.result) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const styles = {
    // Your styles here
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Booking Health Check-up</ModalHeader>
      <ModalBody>
      {submitted ? (
            <h2 style={styles.submittedText}>
              Thank you! Your appointment has been booked.
            </h2>
          ) : (
        <Form onSubmit={submitForm}>
          <FormGroup>
            <Label for="country">Country:</Label>
            <Input
              type="select"
              id="country"
              name="country"
              required
              onChange={(e) => {
                const selectedCountryCode = e.target.value;
                setCountryCode(selectedCountryCode);
              }}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {`${country.code} (${country.name})`}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone:</Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              value={phonenumber}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="appointmentDate">Appointment Date:</Label>
            <Input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              required
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="time">Select Time:</Label>
            <Input
              type="time"
              id="time"
              name="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="healthCheck">Select Health Checkup:</Label>
            <Input
              type="select"
              id="healthCheck"
              name="healthCheck"
              required
              value={healthCheck}
              onChange={(e) => setHealthCheck(e.target.value)}
            >
              <option value="">Select a health checkup</option>
              <option value="general">General Checkup</option>
              <option value="blood">Blood Test</option>
              <option value="xray">X-Ray</option>
              <option value="MRI">MRI</option>
              <option value="CT Scan">CT Scan</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="message">Additional Message:</Label>
            <Input
              type="textarea"
              id="message"
              name="message"
              placeholder="Enter any additional message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormGroup>
        </Form>
          )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submitForm}>
          Book Now
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default BookHealthCheckUp;


