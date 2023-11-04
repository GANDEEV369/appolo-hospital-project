// import React, { useState } from "react";

// const BookAppointment = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const submitForm = (event) => {
//     event.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         margin: 0,
//         padding: "20px",
//         backgroundRepeat: "no-repeat",
//         backgroundImage: "url('/images/doc left1.jpg')",
//         backgroundPosition: "right",
//         backgroundSize: "60% 90%",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "rgb(145, 205, 227)",
//           width: "450px",
//           padding: "50px",
//           margin: "40px",
//         }}
//       >
//         <h3>Fill the form & get a</h3>
//         <h1 style={{ color: "#5348f3" }}>call back in 15 mins</h1>
//         {submitted ? (
//           <h2 style={{ color: "#5348f3" }}>
//             Thank you! Your appointment has been booked.
//           </h2>
//         ) : (
//           <form onSubmit={submitForm}>
//             <label htmlFor="name">Full Name</label>
//             <input type="text" id="name" required />

//             <label htmlFor="phone">Phone Number</label>
//             <input type="tel" id="phone" required />

//             <label htmlFor="Email">Email</label>
//             <input type="email" id="Email" required />

//             <label htmlFor="city">City</label>
//             <select id="city" required>
//               <option value="">Please Select</option>
//               <option value="Mumbai">Mumbai</option>
//               <option value="Delhi">Delhi</option>
//               <option value="Bangalore">Bangalore</option>
//               <option value="Kolkata">Kolkata</option>
//               <option value="Chennai">Chennai</option>
//             </select>
//             <label htmlFor="age">Age</label>
//             <select id="age" required>
//               <option value="">Please Select</option>
//               <option value="0-10yrs">0-10yrs</option>
//               <option value="10-18yrs">10-18yrs</option>
//               <option value="18-26yrs">18-26yrs</option>
//               <option value="26-40yrs">26-40yrs</option>
//               <option value="40+">40+</option>
//             </select>
//             <input
//               type="submit"
//               value="Book appointment"
//               style={{
//                 backgroundColor: "#4CAF50",
//                 color: "white",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             />
//           </form>
//         )}
//         <p>
//           *I agree that Medico 24|7 representatives can contact me over call,
//           SMS, and WhatsApp. I understand that this will override the DND
//           status on my mobile number.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;
// import React, { useState } from "react";
// import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, } from "reactstrap";

// const BookAppointment = () => {
//   const [modal, setModal] = useState(true);
//   const toggle = () => setModal(!modal);

//   const [submitted, setSubmitted] = useState(false);
//   const [agreeChecked, setAgreeChecked] = useState(false);

//   const submitForm = (event) => {
//     event.preventDefault();

//     if (!agreeChecked) {
//       // Handle the case where the checkbox is not checked
//       alert("Please agree to the terms and conditions.");
//     } else {
//       // Checkbox is checked, proceed with form submission
//       setSubmitted(true);
//     }
//   };

//   const styles = {
//     modalContainer: {
//       backgroundColor: "rgb(145, 205, 227)",
//       width: "450px",
//       padding: "50px",
//       margin: "40px",
//     },
//     headerText: {
//       color: "#5348f3",
//     },
//     submittedText: {
//       color: "#5348f3",
//     },
//     submitButton: {
//       backgroundColor: "#4CAF50",
//       color: "white",
//       padding: "10px 20px",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//     },
//     checkboxLabel: {
//       fontWeight: "normal",
//     },
//     mandatoryCheckboxLabel: {
//       fontWeight: "bold",
//       color: "red",
//     },
//     mandatoryCheckboxContainer: {
//       display: "flex",
//       alignItems: "center",
//       marginTop: "10px",
//     },
//   };

//   return (
//     <div >
//       {/* <Button color="primary" onClick={toggle}>
//         Book Appointment
//       </Button> */}
//       <Modal isOpen={modal} toggle={() => setModal(!modal)} style={styles.modalStyle} >
//         <ModalHeader toggle={toggle} style={styles.headerText}>
//           Fill the form & get a call back in 15 mins
//         </ModalHeader>
//         <ModalBody>
//           {submitted ? (
//             <h2 style={styles.submittedText}>
//               Thank you! Your appointment has been booked.
//             </h2>
//           ) : (
//             <Form onSubmit={submitForm}>
//               <FormGroup>
//                 <Label for="name"> Name</Label>
//                 <Input type="text" id="name" required />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="phone">Phone Number</Label>
//                 <Input type="tel" id="phone" required />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="Email">Email</Label>
//                 <Input type="email" id="Email" required />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="city">City</Label>
//                 <Input type="select" id="city" required>
//                   <option value="">Please Select</option>
//                   <option value="Hyderabad">Hyderabad</option>
//                   <option value="Mumbai">Mumbai</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Bangalore">Bangalore</option>
//                   <option value="Kolkata">Kolkata</option>
//                   <option value="Chennai">Chennai</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="age">Age</Label>
//                 <Input type="select" id="age" required>
//                   <option value="">Please Select</option>
//                   <option value="0-10yrs">0-10yrs</option>
//                   <option value="10-18yrs">10-18yrs</option>
//                   <option value="18-26yrs">18-26yrs</option>
//                   <option value="26-40yrs">26-40yrs</option>
//                   <option value="40+">40+</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup check style={styles.mandatoryCheckboxContainer}>
//                 <Input
//                   type="checkbox"
//                   id="agreeCheckbox"
//                   checked={agreeChecked}
//                   onChange={() => setAgreeChecked(!agreeChecked)}
//                   required
//                 />
//                 <Label for="agreeCheckbox" style={styles.mandatoryCheckboxLabel}>
//                   *I agree that Medico 24|7 representatives can contact me over
//                   call, SMS, and WhatsApp. I understand that this will override
//                   the DND status on my mobile number.
//                 </Label>
//               </FormGroup>
//               <Button type="submit" style={styles.submitButton}>
//                 Book appointment
//               </Button>
//             </Form>
//           )}
//         </ModalBody>
//         <ModalFooter>
//           <p>
//             {/* Add other terms and conditions */}
//           </p>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default BookAppointment;
// import React, { useState, useContext, useEffect } from "react";
// import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from "reactstrap";
// import { AuthContext } from "../components/AuthContext"; // Adjust the path

// const BookAppointment = () => {
//   const { userDetails } = useContext(AuthContext);

//   const [modal, setModal] = useState(true);
//   const toggle = () => setModal(!modal);

//   const [submitted, setSubmitted] = useState(false);
//   const [agreeChecked, setAgreeChecked] = useState(false);
//   const [city, setCity] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     // Pre-fill name and email with user details when userDetails change
//     if (userDetails) {
//       setName(userDetails.name || "");
//       setEmail(userDetails.email || "");
//     }
//   }, [userDetails]);

//   const submitForm = (event) => {
//     event.preventDefault();

//     if (!agreeChecked) {
//       alert("Please agree to the terms and conditions.");
//     } else {
//       setSubmitted(true);
//     }
//   };

//   const styles = {
//     // Your styles here
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={() => setModal(!modal)} style={styles.modalStyle}>
//         <ModalHeader toggle={toggle} style={styles.headerText}>
//           Fill the form & get a call back in 15 mins
//         </ModalHeader>
//         <ModalBody>
//           {submitted ? (
//             <h2 style={styles.submittedText}>
//               Thank you! Your appointment has been booked.
//             </h2>
//           ) : (
//             <Form onSubmit={submitForm}>
//               <FormGroup>
//                 <Label for="name">Name</Label>
//                 <Input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="phone">Phone Number</Label>
//                 <Input type="tel" id="phone" required />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="Email">Email</Label>
//                 <Input type="email" id="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="city">City</Label>
//                 <Input type="select" id="city" value={city} onChange={(e) => setCity(e.target.value)} required>
//                   <option value="">Please Select</option>
//                   <option value="Hyderabad">Hyderabad</option>
//                   <option value="Mumbai">Mumbai</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Bangalore">Bangalore</option>
//                   <option value="Kolkata">Kolkata</option>
//                   <option value="Chennai">Chennai</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="age">Age</Label>
//                 <Input type="select" id="age" required>
//                   <option value="">Please Select</option>
//                   <option value="0-10yrs">0-10yrs</option>
//                   <option value="10-18yrs">10-18yrs</option>
//                   <option value="18-26yrs">18-26yrs</option>
//                   <option value="26-40yrs">26-40yrs</option>
//                   <option value="40+">40+</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup check style={styles.mandatoryCheckboxContainer}>
//                 <Input
//                   type="checkbox"
//                   id="agreeCheckbox"
//                   checked={agreeChecked}
//                   onChange={() => setAgreeChecked(!agreeChecked)}
//                   required
//                 />
//                 <Label for="agreeCheckbox" style={styles.mandatoryCheckboxLabel}>
//                   *I agree that Medico 24|7 representatives can contact me over
//                   call, SMS, and WhatsApp. I understand that this will override
//                   the DND status on my mobile number.
//                  </Label>
//               </FormGroup>
//               <Button type="submit" style={styles.submitButton}>
//                 Book appointment
//               </Button>
//             </Form>
//           )}
//         </ModalBody>
//         <ModalFooter>
//           <p>
//             {/* Add other terms and conditions */}
//           </p>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default BookAppointment;
// import React, { useState, useContext, useEffect } from "react";
// import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from "reactstrap";
// import { AuthContext } from "../components/AuthContext"; // Adjust the path

// const BookAppointment = () => {
//   const { userDetails } = useContext(AuthContext);

//   const [modal, setModal] = useState(true);
//   const toggle = () => setModal(!modal);

//   const [submitted, setSubmitted] = useState(false);
//   const [agreeChecked, setAgreeChecked] = useState(false);

//   // Initialize the fields with user details if available
//   const [name, setName] = useState(userDetails?.name || "");
//   const [email, setEmail] = useState(userDetails?.email || "");
//   const [city, setCity] = useState("");

//   useEffect(() => {
//     // Pre-fill name and email with user details when userDetails change
//     if (userDetails) {
//       setName(userDetails.name || "");
//       setEmail(userDetails.email || "");
//     }
//   }, [userDetails]);

//   const submitForm = (event) => {
//     event.preventDefault();

//     if (!agreeChecked) {
//       alert("Please agree to the terms and conditions.");
//     } else {
//       setSubmitted(true);
//     }
//   };

//   const styles = {
//     // Your styles here
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggle} style={styles.modalStyle}>
//         <ModalHeader toggle={toggle} style={styles.headerText}>
//           Fill the form & get a call back in 15 mins
//         </ModalHeader>
//         <ModalBody>
//           {submitted ? (
//             <h2 style={styles.submittedText}>
//               Thank you! Your appointment has been booked.
//             </h2>
//           ) : (
//             <Form onSubmit={submitForm}>
//               <FormGroup>
//                 <Label for="name">Name</Label>
//                 <Input
//                   type="text"
//                   id="name"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="phone">Phone Number</Label>
//                 <Input type="tel" id="phone" required />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="Email">Email</Label>
//                 <Input
//                   type="email"
//                   id="Email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="city">City</Label>
//                 <Input
//                   type="select"
//                   id="city"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   required
//                 >
//                   <option value="">Please Select</option>
//                   <option value="Hyderabad">Hyderabad</option>
//                   <option value="Mumbai">Mumbai</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Bangalore">Bangalore</option>
//                   <option value="Kolkata">Kolkata</option>
//                   <option value="Chennai">Chennai</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="age">Age</Label>
//                 <Input type="select" id="age" required>
//                   <option value="">Please Select</option>
//                   <option value="0-10yrs">0-10yrs</option>
//                   <option value="10-18yrs">10-18yrs</option>
//                   <option value="18-26yrs">18-26yrs</option>
//                   <option value="26-40yrs">26-40yrs</option>
//                   <option value="40+">40+</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup check style={styles.mandatoryCheckboxContainer}>
//                 <Input
//                   type="checkbox"
//                   id="agreeCheckbox"
//                   checked={agreeChecked}
//                   onChange={() => setAgreeChecked(!agreeChecked)}
//                   required
//                 />
//                 <Label for="agreeCheckbox" style={styles.mandatoryCheckboxLabel}>
//                   *I agree that Medico 24|7 representatives can contact me over
//                   call, SMS, and WhatsApp. I understand that this will override
//                   the DND status on my mobile number.
//                 </Label>
//               </FormGroup>
//               <Button type="submit" style={styles.submitButton}>
//                 Book appointment
//               </Button>
//             </Form>
//           )}
//         </ModalBody>
//         <ModalFooter>
//           <p>
//             {/* Add other terms and conditions */}
//           </p>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default BookAppointment;

// import React, { useState, useContext, useEffect } from "react";
// import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from "reactstrap";
// import { AuthContext } from "../components/AuthContext"; // Adjust the path

// const BookAppointment = () => {
//   const { userDetails } = useContext(AuthContext);

//   const [modal, setModal] = useState(true);
//   const toggle = () => setModal(!modal);

//   const [submitted, setSubmitted] = useState(false);
//   const [agreeChecked, setAgreeChecked] = useState(false);

//   // Initialize the fields with user details if available
//   const [name, setName] = useState(userDetails?.name || "");
//   const [email, setEmail] = useState(userDetails?.email || "");
//   const [city, setCity] = useState("");

//   useEffect(() => {
//     // Pre-fill name and email with user details when userDetails change
//     if (userDetails) {
//       setName(userDetails.name || "");
//       setEmail(userDetails.email || "");
//     }
//   }, [userDetails]);

//   const submitForm = (event) => {
//     event.preventDefault();

//     if (!agreeChecked) {
//       alert("Please agree to the terms and conditions.");
//     } else {
//       setSubmitted(true);
//     }
//   };

//   const styles = {
//     // Your styles here
//   };

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggle} style={styles.modalStyle}>
//         <ModalHeader toggle={toggle} style={styles.headerText}>
//           Fill the form & get a call back in 15 mins
//         </ModalHeader>
//         <ModalBody>
//           {submitted ? (
//             <h2 style={styles.submittedText}>
//               Thank you! Your appointment has been booked.
//             </h2>
//           ) : (
//             <Form onSubmit={submitForm}>
//               <FormGroup>
//                 <Label for="name">Name</Label>
//                 <Input
//                   type="text"
//                   id="name"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="phone">Phone Number</Label>
//                 <Input type="tel" id="phone" required />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="Email">Email</Label>
//                 <Input
//                   type="email"
//                   id="Email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="city">City</Label>
//                 <Input
//                   type="select"
//                   id="city"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   required
//                 >
//                   <option value="">Please Select</option>
//                   <option value="Hyderabad">Hyderabad</option>
//                   <option value="Mumbai">Mumbai</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Bangalore">Bangalore</option>
//                   <option value="Kolkata">Kolkata</option>
//                   <option value="Chennai">Chennai</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="age">Age</Label>
//                 <Input type="select" id="age" required>
//                   <option value="">Please Select</option>
//                   <option value="0-10yrs">0-10yrs</option>
//                   <option value="10-18yrs">10-18yrs</option>
//                   <option value="18-26yrs">18-26yrs</option>
//                   <option value="26-40yrs">26-40yrs</option>
//                   <option value="40+">40+</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup check style={styles.mandatoryCheckboxContainer}>
//                 <Input
//                   type="checkbox"
//                   id="agreeCheckbox"
//                   checked={agreeChecked}
//                   onChange={() => setAgreeChecked(!agreeChecked)}
//                   required
//                 />
//                 <Label for="agreeCheckbox" style={styles.mandatoryCheckboxLabel}>
//                   *I agree that Medico 24|7 representatives can contact me over
//                   call, SMS, and WhatsApp. I understand that this will override
//                   the DND status on my mobile number.
//                 </Label>
//               </FormGroup>
//               <Button type="submit" style={styles.submitButton}>
//                 Book appointment
//               </Button>
//             </Form>
//           )}
//         </ModalBody>
//         <ModalFooter>
//           <p>
//             {/* Add other terms and conditions */}
//           </p>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default BookAppointment;
import React, { useState, useContext, useEffect } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from "reactstrap";
import { AuthContext } from "../components/AuthContext"; // Import the AuthContext
import { useLocation } from "react-router-dom";
import axios from "axios";
const BookAppointment = () => {
  const { userDetails } = useContext(AuthContext);
  const location = useLocation();
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  const [submitted, setSubmitted] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phonenumber, setPhoneNumber]=useState("");
  const [age, setAge]=useState("");
  useEffect(() => {
    // Pre-fill name and email with user details when userDetails change
    if (userDetails&& userDetails[userDetails.userType]) {
      // setName(userDetails.name || "");
      // setEmail(userDetails.email || "");
      setName(userDetails[userDetails.userType].name || "");
      setEmail(userDetails[userDetails.userType].email || "");
    }
    
    // Pre-fill the city field from the URL query parameters
    const params = new URLSearchParams(location.search);
    const cityFromQuery = params.get("city");
    if (cityFromQuery) {
      setCity(cityFromQuery);
    }
  }, [userDetails, location]);

  const submitForm = async(event) => {
    event.preventDefault();
    if (!agreeChecked) {
      alert("Please agree to the terms and conditions.");
    } else {
      try {
        // Create an object with the form data
        const formData = {
          name,
          phonenumber,
          email,
          city,
          age,
          agreeChecked,
        };

        // Send the form data to your Express server
        const response = await axios.post("http://localhost:3005/bookappointment", formData);

        if (response.data.result) {
          setSubmitted(true);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

    

  const styles = {
    // Your styles here
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} style={styles.modalStyle}>
        <ModalHeader toggle={toggle} style={styles.headerText}>
          Fill the form & get a call back in 15 mins
        </ModalHeader>
        <ModalBody>
          {submitted ? (
            <h2 style={styles.submittedText}>
              Thank you! Your appointment has been booked.
            </h2>
          ) : (
            <Form onSubmit={submitForm}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input type="tel" id="phone" required onChange={(e) => setPhoneNumber(e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  id="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="select"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                >
                  <option value="">Please Select</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input type="select" id="age" required  onChange={(e) => setAge(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="0-10yrs">0-10yrs</option>
                  <option value="10-18yrs">10-18yrs</option>
                  <option value="18-26yrs">18-26yrs</option>
                  <option value="26-40yrs">26-40yrs</option>
                  <option value="40+">40+</option>
                </Input>
              </FormGroup>
              <FormGroup check style={styles.mandatoryCheckboxContainer}>
                <Input
                  type="checkbox"
                  id="agreeCheckbox"
                  checked={agreeChecked}
                  onChange={() => setAgreeChecked(!agreeChecked)}
                  required
                />
                <Label for="agreeCheckbox" style={styles.mandatoryCheckboxLabel}>
                  *I agree that Medico 24|7 representatives can contact me over
                  call, SMS, and WhatsApp. I understand that this will override
                  the DND status on my mobile number.
                </Label>
              </FormGroup>
              <Button type="submit" style={styles.submitButton}>
                Book appointment
              </Button>
            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          <p>
            {/* Add other terms and conditions */}
          </p>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BookAppointment;
