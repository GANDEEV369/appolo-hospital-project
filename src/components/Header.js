// import React, { useState } from "react";// actual main code
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {Link} from 'react-router-dom';
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,

// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import "../App.css";
// import UserIcon from './UserMenu';

// function Header( isLoggedIn,
//     userDetails,
//     openLoginModal,
//     openRegisterModal,
//     handleLogout) {
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>{" "}
//           {/* Add a span with margin for spacing */}
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             {/* <div>
//              <button className="my-2 my-sm-0" onClick={openLoginModal}>
//                Login
//              </button>

//              <button className="my-2 my-sm-0" onClick={openRegisterModal}>
//                Register
//              </button>
//            </div> */}
//            <div style={{ justifyContent: "space-around" }}>
//                 <Link to="/login">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Register
//                   </Button>
//                 </Link>
//               </div>
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 // If the user is logged in, show the user icon and dropdown menu
//                 <UserIcon
//                   userDetails={userDetails}
//                   handleLogout={handleLogout}
//                 />
//               ) : (
//                 // If the user is not logged in, show the "Login" and "Register" buttons
//                 <div>
//                   <button className="my-2 my-sm-0" onClick={openLoginModal}>
//                     Login
//                   </button>

//                   <button className="my-2 my-sm-0" onClick={openRegisterModal}>
//                     Register
//                   </button>
//                 </div>
//               )}
//             </div>
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" />
//               <Button color="success" className="my-2 my-sm-0" type="submit">
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import UserIcon from "./UserMenu"; // Import the UserIcon component
// import "bootstrap/dist/css/bootstrap.min.css";
// function Header({
//   isLoggedIn,
//   handleLogout,
//   openLoginModal,
//   openRegisterModal,
// }) {
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });
//   const [userDetails, setUserDetails] = useState({});
//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>{" "}
//           {/* Add a span with margin for spacing */}
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       {/* Your code for the top section with social icons and links */}
//       {/* ... (unchanged) */}

//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>

//             {/* Your code for Centers of Excellence, Health Information, International Patient, and Hospitals dropdowns */}
//             {/* ... (unchanged) */}
//             {/* <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 // If the user is logged in, show the UserIcon and Sign Out button
//                 <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//               ) : (
//                 // If the user is not logged in, show the "Login" and "Register" buttons
//                 <div>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </div>
//               )}
//             </div> */}
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 <UserIcon
//                   userDetails={userDetails}
//                   handleLogout={handleLogout}
//                 />
//               ) : (
//                 <div>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" />
//               <Button color="success" className="my-2 my-sm-0" type="submit">
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;
// import React,{useState} from "react";//present code
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import UserIcon from "./UserMenu"; // Import the UserIcon component
// import "bootstrap/dist/css/bootstrap.min.css";

// function Header({ isLoggedIn, userDetails, handleLogout, openLoginModal, openRegisterModal }) {
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       {/* Top section with social icons and links */}
//       <div className="container1" style={{ display: "flex", height: "25px", backgroundColor: "rgb(174, 48, 174)", justifyContent: "space-between", textAlign: "center" }}>
//         <p className="header1 ml-10" style={{ justifyContent: "center", textAlign: "center", marginLeft: "5px" }}>
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span> {/* Add a span with margin for spacing */}
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p className="header2 mr-5" style={{ justifyContent: "center", textAlign: "center", paddingRight: "20px", marginRight: "5px" }}>
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>

//       {/* Navigation menu */}
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             {/* Dropdowns */}
//             <Dropdown nav isOpen={dropdownsOpen.centersOfExcellence} toggle={() => toggleDropdown("centersOfExcellence")}>
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown nav isOpen={dropdownsOpen.healthInformation} toggle={() => toggleDropdown("healthInformation")}>
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown nav isOpen={dropdownsOpen.internationalPatient} toggle={() => toggleDropdown("internationalPatient")}>
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown nav isOpen={dropdownsOpen.hospitals} toggle={() => toggleDropdown("hospitals")}>
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>

//             {/* User icon or login/register buttons based on login state */}
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//               ) : (
//                 <div>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </Nav>

//           {/* Search bar */}
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" />
//               <Button color="success" className="my-2 my-sm-0" type="submit">
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import UserIcon from "./UserMenu"; // Import the UserIcon component

//   // ... Existing code ...
//   function Header( isLoggedIn,
//     userDetails,
//     openLoginModal,
//     openRegisterModal,
//     handleLogout) {
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   return (
//     <header

//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>{" "}
//           {/* Add a span with margin for spacing */}
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             {/* ... Existing code ... */}
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 // If the user is logged in, show the UserIcon and Sign Out button
//                 <UserIcon
//                   userDetails={userDetails}
//                   handleLogout={handleLogout}
//                 />
//               ) : (
//                 // If the user is not logged in, show the "Login" and "Register" buttons
//                 <>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </>
//               )}
//             </div>
//           </Nav>
//           {/* ... Existing code ... */}
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" />
//               <Button color="success" className="my-2 my-sm-0" type="submit">
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//present
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
//   // faHospital,
//   // faHeartbeat,
//   // faGlobe,
// } from "@fortawesome/free-brands-svg-icons";
// // import {
// //   faFacebook,
// //   faInstagram,
// //   faTwitter,
// //   faYoutube,
// //   faHospital,
// //   faHeartbeat,
// //   faGlobe,
// // }from "@fortawesome/free-solid-svg-icons";
// import UserIcon from "./UserMenu";

// function Header({
//   isLoggedIn,
//   userDetails,
//   openLoginModal,
//   openRegisterModal,
//   handleLogout,
// }) {
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Center 1</DropdownItem>
//                 <DropdownItem href="#">Center 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Centers</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Info 1</DropdownItem>
//                 <DropdownItem href="#">Info 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Health Info</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Option 1</DropdownItem>
//                 <DropdownItem href="#">Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All International Patients</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 <UserIcon
//                   userDetails={userDetails}
//                   handleLogout={handleLogout}
//                 />
//               ) : (
//                 // <div>
//                 //   <Button className="my-2 my-sm-0" onClick={openLoginModal}>
//                 //     Login
//                 //   </Button>
//                 //   <Button className="my-2 my-sm-0" onClick={openRegisterModal}>
//                 //     Register
//                 //   </Button>
//                 // </div>
//                 <div style={{ justifyContent: "space-around" }}>
//                   {isLoggedIn ? (
//                 <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//                   ):(
//                   <div>
//                     <Link to="/login">
//                       <Button color="success" className="my-2 my-sm-0">
//                         Login
//                       </Button>
//                     </Link>
//                     <Link to="/signup">
//                       <Button color="success" className="my-2 my-sm-0">
//                         Register
//                       </Button>
//                     </Link>
//                   </div>
//                   )}
//                 </div>
//         )}
//       </div>
//     </Nav>
//     <Form inline="true">
//       <FormGroup className="my-2 my-lg-0 d-flex">
//         <Input type="text" placeholder="Search" className="mr-2" />
//         <Button color="success" className="my-2 my-sm-0" type="submit">
//           Search
//         </Button>
//       </FormGroup>
//     </Form>
//   </Navbar>
// </div>
//     </header>
//   );
// }
// export default Header;

// import React, { useState, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import UserIcon from "./UserMenu";
// import { AuthContext } from "./AuthContext"; // Import the AuthContext
// import GastroenterologyDepartment from './Gastrology';
// import CardiologyDepartment from './Cardiology';
// import GynecologyDepartment from './Gynecology';
// import DermatologyDepartment from './Dermatology';
// import OphthalmologyDepartment from './Ophtamology';
// import PalmanologyDepartment from './Pulmonology';
// import PlasticSurgeryPage from './PlasticSurgery';
// import PsychiatryPage from './Psychiatry';
// import DentistDepartment from './Dentistry';
// import ENTDepartment from './ENT';
// const specialtyRoutes = [
//   {
//     title: "Cardiology",
//     link: "/cardiology",
//     component: <CardiologyDepartment />,
//   },
//   {
//     title: "Gastroenterology",
//     link: "/gastrology",
//     component: <GastroenterologyDepartment />,
//   },
//   {
//     title: "Gynecology",
//     link: "/gynecology",
//     component: <GynecologyDepartment />,
//   },
//   {
//     title: "Dermatology",
//     link: "/dermatology",
//     component: <DermatologyDepartment />,
//   },
//   {
//     title: "Ophthalmology",
//     link: "/ophtamology",
//     component: <OphthalmologyDepartment />,
//   },
//   {
//     title: "Pulmonology",
//     link: "/pulmanology",
//     component: <PalmanologyDepartment />,
//   },
//   {
//     title: "Plastic Surgery",
//     link: "/plastic-surgery",
//     component: <PlasticSurgeryPage />,
//   },
//   {
//     title: "Psychiatry",
//     link: "/psychiatry",
//     component: <PsychiatryPage />,
//   },
//   {
//     title: "Dentistry",
//     link: "/dentistry",
//     component: <DentistDepartment />,
//   },
//   {
//     title: "ENT (Ear, Nose, Throat)",
//     link: "/ENT",
//     component: <ENTDepartment />,
//   },
// ];
// function Header() {
//   const { isLoggedIn, userDetails, handleLogout } = useContext(AuthContext); // Use the AuthContext
//   const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
//   const [searchResults, setSearchResults] = useState([]); // State to hold search results
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });
//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };
//   // const handleSearch = () => {
//   //   // Filter specialties based on the search query
//   //   const filteredResults = specialtyRoutes.filter((specialty) =>
//   //     specialty.title.toLowerCase().includes(searchQuery.toLowerCase())
//   //   );

//   //   setSearchResults(filteredResults);
//   // };
//   const handleSearch = () => {
//     // Filter specialties based on the search query
//     const filteredResults = specialtyRoutes.filter((specialty) =>
//       specialty.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     setSearchResults(filteredResults);
//   };
//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       {/* ... rest of your component ... */}
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>{" "}
//           {/* Add a span with margin for spacing */}
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             {/* ... Existing code ... */}
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             {/* <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 <UserIcon
//                   userDetails={userDetails}
//                   handleLogout={handleLogout}
//                 />
//               ) : (
//                 <div>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </div>
//               )}
//             </div> */}
//             {/* {isLoggedIn ? (
//               <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//             ) : (
//               <div>
//                 <Link to="/login">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Register
//                   </Button>
//                 </Link>
//               </div>
//             )} */}
//             {/* ... rest of your component ... */}
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" value={searchQuery}                 onChange={(e) => setSearchQuery(e.target.value)} />
//               <Button color="success" className="my-2 my-sm-0" type="submit"onClick={handleSearch}>
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//           {searchResults.length > 0 && (
//             <div className="search-results">
//               <ul>
//                 {searchResults.map((result, index) => (
//                   <li key={index}>
//                     <Link to={result.link}>{result.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {isLoggedIn ? (
//               <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//             ) : (
//               <div style={{display:"flex", justifyContent:"space-between",width:"150px"}}>
//                 <Link to="/login">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Register
//                   </Button>
//                 </Link>
//               </div>
//             )}
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;//original code

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import UserIcon from "./UserMenu";

// function Header({
//   isLoggedIn,
//   userDetails,
//   openLoginModal,
//   openRegisterModal,
//   handleLogout,
// }) {
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Center 1</DropdownItem>
//                 <DropdownItem href="#">Center 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Centers</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Info 1</DropdownItem>
//                 <DropdownItem href="#">Info 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Health Info</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Option 1</DropdownItem>
//                 <DropdownItem href="#">Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All International Patients</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 <UserIcon
//                   userDetails={userDetails}
//                   handleLogout={handleLogout}
//                 />
//               ) : (
//                 <div>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" />
//               <Button color="success" className="my-2 my-sm-0" type="submit">
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import GastroenterologyDepartment from './Gastrology';
// import CardiologyDepartment from './Cardiology';
// import GynecologyDepartment from './Gynecology';
// import DermatologyDepartment from './Dermatology';
// import OphthalmologyDepartment from './Ophtamology';
// import PalmanologyDepartment from './Pulmonology';
// import PlasticSurgeryPage from './PlasticSurgery';
// import PsychiatryPage from './Psychiatry';
// import DentistDepartment from './Dentistry';
// import ENTDepartment from './ENT';
// import UserIcon from "./UserMenu";

// function Header({ isLoggedIn, userDetails, handleLogout }) {
//   // const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
//   // const [searchResults, setSearchResults] = useState([]); // State to hold search results
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Center 1</DropdownItem>
//                 <DropdownItem href="#">Center 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Centers</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Info 1</DropdownItem>
//                 <DropdownItem href="#">Info 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Health Info</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Option 1</DropdownItem>
//                 <DropdownItem href="#">Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All International Patients</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//               ) : (
//                 <div>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" />
//               <Button color="success" className="my-2 my-sm-0" type="submit">
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;// without search engine actual code
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import GastroenterologyDepartment from './Gastrology';
// import CardiologyDepartment from './Cardiology';
// import GynecologyDepartment from './Gynecology';
// import DermatologyDepartment from './Dermatology';
// import OphthalmologyDepartment from './Ophtamology';
// import PalmanologyDepartment from './Pulmonology';
// import PlasticSurgeryPage from './PlasticSurgery';
// import PsychiatryPage from './Psychiatry';
// import DentistDepartment from './Dentistry';
// import ENTDepartment from './ENT';
// import UserIcon from "./UserMenu";

// const specialtyRoutes = [
//   {
//     title: "Cardiology",
//     link: "/cardiology",
//     component: <CardiologyDepartment />,
//   },
//   {
//     title: "Gastroenterology",
//     link: "/gastrology",
//     component: <GastroenterologyDepartment />,
//   },
//   {
//     title: "Gynecology",
//     link: "/gynecology",
//     component: <GynecologyDepartment />,
//   },
//   {
//     title: "Dermatology",
//     link: "/dermatology",
//     component: <DermatologyDepartment />,
//   },
//   {
//     title: "Ophthalmology",
//     link: "/ophtamology",
//     component: <OphthalmologyDepartment />,
//   },
//   {
//     title: "Pulmonology",
//     link: "/pulmanology",
//     component: <PalmanologyDepartment />,
//   },
//   {
//     title: "Plastic Surgery",
//     link: "/plastic-surgery",
//     component: <PlasticSurgeryPage />,
//   },
//   {
//     title: "Psychiatry",
//     link: "/psychiatry",
//     component: <PsychiatryPage />,
//   },
//   {
//     title: "Dentistry",
//     link: "/dentistry",
//     component: <DentistDepartment />,
//   },
//   {
//     title: "ENT (Ear, Nose, Throat)",
//     link: "/ENT",
//     component: <ENTDepartment />,
//   },
// ];

// function Header({ isLoggedIn, userDetails, handleLogout }) {
//   const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
//   const [searchResults, setSearchResults] = useState([]); // State to hold search results
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   const handleSearch = () => {
//     // Filter specialties based on the search query
//     const filteredResults = specialtyRoutes.filter((specialty) =>
//       specialty.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     setSearchResults(filteredResults);
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Center 1</DropdownItem>
//                 <DropdownItem href="#">Center 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Centers</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Info 1</DropdownItem>
//                 <DropdownItem href="#">Info 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Health Info</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Option 1</DropdownItem>
//                 <DropdownItem href="#">Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All International Patients</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//               ) : (
//                 <div>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input
//                 type="text"
//                 placeholder="Search"
//                 className="mr-2"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Button
//                 color="success"
//                 className="my-2 my-sm-0"
//                 type="button"
//                 onClick={handleSearch}
//               >
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//           {searchResults.length > 0 && (
//             <div className="search-results">
//               <ul>
//                 {searchResults.map((result, index) => (
//                   <li key={index}>
//                     <Link to={result.link}>{result.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import GastroenterologyDepartment from './Gastrology';
// import CardiologyDepartment from './Cardiology';
// import GynecologyDepartment from './Gynecology';
// import DermatologyDepartment from './Dermatology';
// import OphthalmologyDepartment from './Ophtamology';
// import PalmanologyDepartment from './Pulmonology';
// import PlasticSurgeryPage from './PlasticSurgery';
// import PsychiatryPage from './Psychiatry';
// import DentistDepartment from './Dentistry';
// import ENTDepartment from './ENT';
// import UserIcon from "./UserMenu";

// const specialtyRoutes = [
//   {
//     title: "Cardiology",
//     link: "/cardiology",
//     component: <CardiologyDepartment />,
//   },
//   {
//     title: "Gastroenterology",
//     link: "/gastrology",
//     component: <GastroenterologyDepartment />,
//   },
//   {
//     title: "Gynecology",
//     link: "/gynecology",
//     component: <GynecologyDepartment />,
//   },
//   {
//     title: "Dermatology",
//     link: "/dermatology",
//     component: <DermatologyDepartment />,
//   },
//   {
//     title: "Ophthalmology",
//     link: "/ophtamology",
//     component: <OphthalmologyDepartment />,
//   },
//   {
//     title: "Pulmonology",
//     link: "/pulmanology",
//     component: <PalmanologyDepartment />,
//   },
//   {
//     title: "Plastic Surgery",
//     link: "/plastic-surgery",
//     component: <PlasticSurgeryPage />,
//   },
//   {
//     title: "Psychiatry",
//     link: "/psychiatry",
//     component: <PsychiatryPage />,
//   },
//   {
//     title: "Dentistry",
//     link: "/dentistry",
//     component: <DentistDepartment />,
//   },
//   {
//     title: "ENT (Ear, Nose, Throat)",
//     link: "/ENT",
//     component: <ENTDepartment />,
//   },
// ];

// function Header({ isLoggedIn, userDetails, handleLogout }) {
//   const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
//   const [searchResults, setSearchResults] = useState([]); // State to hold search results
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });
//   const [searchResultsVisible, setSearchResultsVisible] = useState(false); // State to control the visibility of search results

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   const handleSearch = () => {
//     // Filter specialties based on the search query
//     const filteredResults = specialtyRoutes.filter((specialty) =>
//       specialty.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     setSearchResults(filteredResults);
//     setSearchResultsVisible(true); // Show search results
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Center 1</DropdownItem>
//                 <DropdownItem href="#">Center 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Centers</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Info 1</DropdownItem>
//                 <DropdownItem href="#">Info 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All Health Info</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Option 1</DropdownItem>
//                 <DropdownItem href="#">Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">All International Patients</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//               ) : (
//                 <div>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input
//                 type="text"
//                 placeholder="Search"
//                 className="mr-2"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Button
//                 color="success"
//                 className="my-2 my-sm-0"
//                 type="button"
//                 onClick={handleSearch}
//               >
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//           {searchResultsVisible && (
//             <div className="search-results">
//               <ul>
//                 {searchResults.map((result, index) => (
//                   <li key={index}>
//                     <Link to={result.link}>{result.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import UserIcon from "./UserMenu";
// import "bootstrap/dist/css/bootstrap.min.css";
// function Header({ isLoggedIn, userDetails, handleLogout }) {

//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           {isLoggedIn ? (
//             <UserIcon isLoggedIn={isLoggedIn} userDetails={userDetails} handleLogout={handleLogout} />
//           ) : (
//             <ul>
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//               <li>
//                 <Link to="/signup">Register</Link>
//               </li>
//             </ul>
//           )}

//           <li>
//             <Link to="/book-appointment">Book Appointment</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from 'react-router-dom';
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,

// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
//    // Import the user icon
// } from "@fortawesome/free-brands-svg-icons";
// import "../App.css";
// import UserIcon from './UserMenu';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// function Header({ isLoggedIn, userDetails, openLoginModal, openRegisterModal, handleLogout }) {
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>{" "}
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" />
//               <Button color="success" className="my-2 my-sm-0" type="submit">
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//           <div style={{ justifyContent: "space-around" }}>
//             {isLoggedIn ? (
//               <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//             ) : (
//               <div>
//                 <Link to="/login">
//                   <FontAwesomeIcon icon={faUser} size="2x" onClick={openLoginModal} />
//                 </Link>
//                 <Link to="/signup">
//                   <FontAwesomeIcon icon={faUser} size="2x" onClick={openRegisterModal} />
//                 </Link>
//               </div>
//             )}
//           </div>
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// // import { Link , useHistory} from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";

// import "./header.css"; // Assuming you have a separate CSS file
// import UserMenu from "./UserMenu";

// function Header(
//   isLoggedIn,
//   userDetails,
//   openLoginModal,
//   openRegisterModal,
//   handleLogout
// ) {
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });
//   // const goToLogin = () => {
//   //   window.location.href = '/login'; // Navigates to the /login route
//   // };

//   // const goToRegister = () => {
//   //   window.location.href = '/register'; // Navigates to the /register route
//   // };
//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   return (
//     <header style={headerStyles}>
//       <div className="container1" style={containerStyles}>
//         <p className="header1 ml-5" style={socialStyles}>
//           <FontAwesomeIcon icon={faFacebook} /> |
//           <FontAwesomeIcon icon={faInstagram} /> |
//           <FontAwesomeIcon icon={faTwitter} /> |
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p className="header2 mr-5" style={infoStyles}>
//           <i>Privacy Policy</i> | <i>Disclaimer</i> | <i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             {/* <div style={{justifyContent:"space-around"}}>
//             <Link  to="/login"  className="my-2 my-sm-0" >
//                 Login
//             </Link>

//             <Link to="/signup" className="my-2 my-sm-0">
//                 Register
//             </Link>
//             </div> */}
//             {/* <div style={{ display:"flex",justifyContent: "space-around" }}>
//               <button className="my-2 my-sm-0" onClick={goToLogin}>
//                 Login
//               </button>

//               <button className="my-2 my-sm-0" onClick={goToRegister}>
//                 Register
//               </button>
//             </div> */}
//             {/* <div style={{ justifyContent: 'space-around' }}>
//         {isLoggedIn ? ( // If the user is logged in, show the user icon and dropdown menu
//           <UserMenu userDetails={userDetails} handleLogout={handleLogout} />
//         ) : (
//           // If the user is not logged in, show the "Login" and "Register" buttons
//           <div>
//             <button className="my-2 my-sm-0" onClick={openLoginModal}>
//               Login
//             </button>

//             <button className="my-2 my-sm-0" onClick={openRegisterModal}>
//               Register
//             </button>
//           </div>
//         )}
//       </div> */}
//             <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 // If the user is logged in, show the user icon and dropdown menu
//                 <UserMenu
//                   userDetails={userDetails}
//                   handleLogout={handleLogout}
//                 />
//               ) : (
//                 // If the user is not logged in, show the "Login" and "Register" buttons
//                 <div>
//                   <button className="my-2 my-sm-0" onClick={openLoginModal}>
//                     Login
//                   </button>

//                   <button className="my-2 my-sm-0" onClick={openRegisterModal}>
//                     Register
//                   </button>
//                 </div>
//               )}
//             </div>
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" />
//               <Button color="success" className="my-2 my-sm-0" type="submit">
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// const headerStyles = {
//   position: "fixed",
//   zIndex: 10,
//   height: "auto",
//   width: "100%",
//   left: 0,
//   right: 0,
//   top: 0,
// };

// const containerStyles = {
//   display: "flex",
//   height: "25px",
//   backgroundColor: "rgb(174, 48, 174)",
//   justifyContent: "space-between",
//   textAlign: "center",
// };

// const socialStyles = {
//   justifyContent: "center",
//   textAlign: "center",
// };

// const infoStyles = {
//   justifyContent: "center",
//   textAlign: "center",
//   paddingRight: "20px",
// };

// export default Header; //actual code
// ###########################################
// ###########################################
// import React, { useState, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import UserIcon from "./UserMenu";
// import { AuthContext } from "./AuthContext";
// import GastroenterologyDepartment from './Gastrology';
// import CardiologyDepartment from './Cardiology';
// import GynecologyDepartment from './Gynecology';
// import DermatologyDepartment from './Dermatology';
// import OphthalmologyDepartment from './Ophtamology';
// import PalmanologyDepartment from './Pulmonology';
// import PlasticSurgeryPage from './PlasticSurgery';
// import PsychiatryPage from './Psychiatry';
// import DentistDepartment from './Dentistry';
// import ENTDepartment from './ENT';

// const specialtyRoutes = [
//   {
//     title: "Cardiology",
//     link: "/cardiology",
//     component: <CardiologyDepartment />,
//   },
//   {
//     title: "Gastroenterology",
//     link: "/gastrology",
//     component: <GastroenterologyDepartment />,
//   },
//   {
//     title: "Gynecology",
//     link: "/gynecology",
//     component: <GynecologyDepartment />,
//   },
//   {
//     title: "Dermatology",
//     link: "/dermatology",
//     component: <DermatologyDepartment />,
//   },
//   {
//     title: "Ophthalmology",
//     link: "/ophtamology",
//     component: <OphthalmologyDepartment />,
//   },
//   {
//     title: "Pulmonology",
//     link: "/pulmanology",
//     component: <PalmanologyDepartment />,
//   },
//   {
//     title: "Plastic Surgery",
//     link: "/plastic-surgery",
//     component: <PlasticSurgeryPage />,
//   },
//   {
//     title: "Psychiatry",
//     link: "/psychiatry",
//     component: <PsychiatryPage />,
//   },
//   {
//     title: "Dentistry",
//     link: "/dentistry",
//     component: <DentistDepartment />,
//   },
//   {
//     title: "ENT (Ear, Nose, Throat)",
//     link: "/ENT",
//     component: <ENTDepartment />,
//   },
// ];

// function Header() {
//   const { isLoggedIn, userDetails, handleLogout } = useContext(AuthContext);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   const handleSearch = () => {
//     const filteredResults = specialtyRoutes.filter((specialty) =>
//       specialty.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     setSearchResults(filteredResults);
//   };

//   return (
//     <header style={{ position: "fixed", zIndex: 10, height: "auto", width: "100%", left: 0, right: 0, top: 0 }}>
//       <div className="container1" style={{ display: "flex", height: "25px", backgroundColor: "rgb(174, 48, 174)", justifyContent: "space-between", textAlign: "center" }}>
//         <p className="header1 ml-10" style={{ justifyContent: "center", textAlign: "center", marginLeft: "5px" }}>
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p className="header2 mr-5" style={{ justifyContent: "center", textAlign: "center", paddingRight: "20px", marginRight: "5px" }}>
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//         <Nav className="mr-auto">
//           <Dropdown nav isOpen={dropdownsOpen.centersOfExcellence} toggle={() => toggleDropdown("centersOfExcellence")}>
//             <DropdownToggle nav caret>
//               Centers of Excellence
//             </DropdownToggle>
//             <DropdownMenu>
//               <DropdownItem href="#">Action</DropdownItem>
//               <DropdownItem href="#">Another action</DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem href="#">Something else here</DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//           <Dropdown nav isOpen={dropdownsOpen.healthInformation} toggle={() => toggleDropdown("healthInformation")}>
//             <DropdownToggle nav caret>
//               Health Information
//             </DropdownToggle>
//             <DropdownMenu>
//               <DropdownItem href="#">Action</DropdownItem>
//               <DropdownItem href="#">Another action</DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem href="#">Something else here</DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//           <Dropdown nav isOpen={dropdownsOpen.internationalPatient} toggle={() => toggleDropdown("internationalPatient")}>
//             <DropdownToggle nav caret>
//               International Patient
//             </DropdownToggle>
//             <DropdownMenu>
//               <DropdownItem href="#">Action</DropdownItem>
//               <DropdownItem href="#">Another action</DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem href="#">Something else here</DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//           <Dropdown nav isOpen={dropdownsOpen.hospitals} toggle={() => toggleDropdown("hospitals")}>
//             <DropdownToggle nav caret>
//               Hospitals
//             </DropdownToggle>
//             <DropdownMenu>
//               <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                 Action
//               </DropdownItem>
//               <DropdownItem href="#">Another action</DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem href="#">Something else here</DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//         </Nav>
//         <Form inline>
//           <FormGroup className="my-2 my-lg-0 d-flex">
//             <Input type="text" placeholder="Search" className="mr-2" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
//             <Button color="success" className="my-2 my-sm-0" type="button" onClick={handleSearch}>
//               Search
//             </Button>
//           </FormGroup>
//         </Form>
//         {searchResults.length > 0 && (
//           <div className="search-results">
//             <ul>
//               {searchResults.map((result, index) => (
//                 <li key={index}>
//                   <Link to={result.link}>{result.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {isLoggedIn ? (
//           <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//         ) : (
//           <div style={{ display: "flex", justifyContent: "space-between", width: "150px" }}>
//             <Link to="/login">
//               <Button color="success" className="my-2 my-sm-0">
//                 Login

//             </Button>
//             </Link>
//             <Link to="/signup">
//               <Button color="success" className="my-2 my-sm-0">
//                 Register

//             </Button>
//             </Link>
//           </div>
//         )}
//       </Navbar>
//     </header>
//   );
// }

// export default Header;
// import React, { useState, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import UserIcon from "./UserMenu";
// import { AuthContext } from "./AuthContext"; // Import the AuthContext
// import GastroenterologyDepartment from './Gastrology';
// import CardiologyDepartment from './Cardiology';
// import GynecologyDepartment from './Gynecology';
// import DermatologyDepartment from './Dermatology';
// import OphthalmologyDepartment from './Ophtamology';
// import PalmanologyDepartment from './Pulmonology';
// import PlasticSurgeryPage from './PlasticSurgery';
// import PsychiatryPage from './Psychiatry';
// import DentistDepartment from './Dentistry';
// import ENTDepartment from './ENT';
// const specialtyRoutes = [
//   {
//     title: "Cardiology",
//     link: "/cardiology",
//     component: <CardiologyDepartment />,
//   },
//   {
//     title: "Gastroenterology",
//     link: "/gastrology",
//     component: <GastroenterologyDepartment />,
//   },
//   {
//     title: "Gynecology",
//     link: "/gynecology",
//     component: <GynecologyDepartment />,
//   },
//   {
//     title: "Dermatology",
//     link: "/dermatology",
//     component: <DermatologyDepartment />,
//   },
//   {
//     title: "Ophthalmology",
//     link: "/ophtamology",
//     component: <OphthalmologyDepartment />,
//   },
//   {
//     title: "Pulmonology",
//     link: "/pulmanology",
//     component: <PalmanologyDepartment />,
//   },
//   {
//     title: "Plastic Surgery",
//     link: "/plastic-surgery",
//     component: <PlasticSurgeryPage />,
//   },
//   {
//     title: "Psychiatry",
//     link: "/psychiatry",
//     component: <PsychiatryPage />,
//   },
//   {
//     title: "Dentistry",
//     link: "/dentistry",
//     component: <DentistDepartment />,
//   },
//   {
//     title: "ENT (Ear, Nose, Throat)",
//     link: "/ENT",
//     component: <ENTDepartment />,
//   },
// ];
// function Header() {
//   const { isLoggedIn, userDetails, handleLogout } = useContext(AuthContext); // Use the AuthContext
//   const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
//   const [searchResults, setSearchResults] = useState([]); // State to hold search results
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });
//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };
//   // const handleSearch = () => {
//   //   // Filter specialties based on the search query
//   //   const filteredResults = specialtyRoutes.filter((specialty) =>
//   //     specialty.title.toLowerCase().includes(searchQuery.toLowerCase())
//   //   );

//   //   setSearchResults(filteredResults);
//   // };
//   const handleSearch = () => {
//     // Filter specialties based on the search query
//     const filteredResults = specialtyRoutes.filter((specialty) =>
//       specialty.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     setSearchResults(filteredResults);
//   };
//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: "10",
//         height: "auto",
//         width: "100%",
//         left: "0",
//         right: "0",
//         top: "0",
//       }}
//     >
//       {/* ... rest of your component ... */}
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>{" "}
//           {/* Add a span with margin for spacing */}
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             {/* ... Existing code ... */}
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             {/* <div style={{ justifyContent: "space-around" }}>
//               {isLoggedIn ? (
//                 <UserIcon
//                   userDetails={userDetails}
//                   handleLogout={handleLogout}
//                 />
//               ) : (
//                 <div>
//                   <Link to="/login">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Login
//                     </Button>
//                   </Link>
//                   <Link to="/signup">
//                     <Button color="success" className="my-2 my-sm-0">
//                       Register
//                     </Button>
//                   </Link>
//                 </div>
//               )}
//             </div> */}
//             {/* {isLoggedIn ? (
//               <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//             ) : (
//               <div>
//                 <Link to="/login">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Register
//                   </Button>
//                 </Link>
//               </div>
//             )} */}
//             {/* ... rest of your component ... */}
//           </Nav>
//           <Form inline="true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input type="text" placeholder="Search" className="mr-2" value={searchQuery}                 onChange={(e) => setSearchQuery(e.target.value)} />
//               <Button color="success" className="my-2 my-sm-0" type="submit"onClick={handleSearch}>
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//           {searchResults.length > 0 && (
//             <div className="search-results">
//               <ul>
//                 {searchResults.map((result, index) => (
//                   <li key={index}>
//                     <Link to={result.link}>{result.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {isLoggedIn ? (
//               <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//             ) : (
//               <div style={{display:"flex", justifyContent:"space-between",width:"150px"}}>
//                 <Link to="/login">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button color="success" className="my-2 my-sm-0">
//                     Register
//                   </Button>
//                 </Link>
//               </div>
//             )}
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;//original code
// import React, { useState, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Form,
//   Input,
//   Button,
//   FormGroup,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import UserIcon from "./UserMenu";
// import { AuthContext } from "./AuthContext";
// import GastroenterologyDepartment from "./Gastrology";
// import CardiologyDepartment from "./Cardiology";
// import GynecologyDepartment from "./Gynecology";
// import DermatologyDepartment from "./Dermatology";
// import OphthalmologyDepartment from "./Ophtamology";
// import PalmanologyDepartment from "./Pulmonology";
// import PlasticSurgeryPage from "./PlasticSurgery";
// import PsychiatryPage from "./Psychiatry";
// import DentistDepartment from "./Dentistry";
// import ENTDepartment from "./ENT";

// const specialtyRoutes = [
//   {
//     title: "Cardiology",
//     link: "/cardiology",
//     component: <CardiologyDepartment />,
//   },
//   {
//     title: "Gastroenterology",
//     link: "/gastrology",
//     component: <GastroenterologyDepartment />,
//   },
//   {
//     title: "Gynecology",
//     link: "/gynecology",
//     component: <GynecologyDepartment />,
//   },
//   {
//     title: "Dermatology",
//     link: "/dermatology",
//     component: <DermatologyDepartment />,
//   },
//   {
//     title: "Ophthalmology",
//     link: "/ophtamology",
//     component: <OphthalmologyDepartment />,
//   },
//   {
//     title: "Pulmonology",
//     link: "/pulmanology",
//     component: <PalmanologyDepartment />,
//   },
//   {
//     title: "Plastic Surgery",
//     link: "/plastic-surgery",
//     component: <PlasticSurgeryPage />,
//   },
//   {
//     title: "Psychiatry",
//     link: "/psychiatry",
//     component: <PsychiatryPage />,
//   },
//   {
//     title: "Dentistry",
//     link: "/dentistry",
//     component: <DentistDepartment />,
//   },
//   {
//     title: "ENT (Ear, Nose, Throat)",
//     link: "/ENT",
//     component: <ENTDepartment />,
//   },
// ];

// function Header() {
//   const { isLoggedIn, userDetails, isAdmin,isDoctor, handleLogout } =
//     useContext(AuthContext);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSearchResults, setShowSearchResults] = useState(false); // State to control search results visibility
//   const [dropdownsOpen, setDropdownsOpen] = useState({
//     centersOfExcellence: false,
//     healthInformation: false,
//     internationalPatient: false,
//     hospitals: false,
//   });

//   const toggleDropdown = (dropdownName) => {
//     setDropdownsOpen({
//       ...dropdownsOpen,
//       [dropdownName]: !dropdownsOpen[dropdownName],
//     });
//   };

//   const handleSearch = () => {
//     const filteredResults = specialtyRoutes.filter((specialty) =>
//       specialty.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     setSearchResults(filteredResults);
//     setShowSearchResults(true); // Display search results
//   };

//   // Close search results when a user clicks on a search result
//   const handleSearchResultClick = () => {
//     setShowSearchResults(false);
//   };

//   return (
//     <header
//       style={{
//         position: "fixed",
//         zIndex: 10,
//         height: "auto",
//         width: "100%",
//         left: 0,
//         right: 0,
//         top: 0,
//       }}
//     >
//       <div
//         className="container1"
//         style={{
//           display: "flex",
//           height: "25px",
//           backgroundColor: "rgb(174, 48, 174)",
//           justifyContent: "space-between",
//           textAlign: "center",
//         }}
//       >
//         <p
//           className="header1 ml-10"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             marginLeft: "5px",
//           }}
//         >
//           <FontAwesomeIcon icon={faFacebook} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faInstagram} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faTwitter} />
//           <span className="mx-1">|</span>
//           <FontAwesomeIcon icon={faYoutube} />
//         </p>
//         <p
//           className="header2 mr-5"
//           style={{
//             justifyContent: "center",
//             textAlign: "center",
//             paddingRight: "20px",
//             marginRight: "5px",
//           }}
//         >
//           <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
//         </p>
//       </div>
//       <div>
//         <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
//           <Nav className="mr-auto">
//             {/* Dropdown menus and other navigation items */}
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.centersOfExcellence}
//               toggle={() => toggleDropdown("centersOfExcellence")}
//             >
//               <DropdownToggle nav caret>
//                 Centers of Excellence
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.healthInformation}
//               toggle={() => toggleDropdown("healthInformation")}
//             >
//               <DropdownToggle nav caret>
//                 Health Information
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.internationalPatient}
//               toggle={() => toggleDropdown("internationalPatient")}
//             >
//               <DropdownToggle nav caret>
//                 International Patient
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="#">Action</DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             <Dropdown
//               nav
//               isOpen={dropdownsOpen.hospitals}
//               toggle={() => toggleDropdown("hospitals")}
//             >
//               <DropdownToggle nav caret>
//                 Hospitals
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
//                   Action
//                 </DropdownItem>
//                 <DropdownItem href="#">Another action</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//             {isAdmin && (
//               <Dropdown
//                 nav
//                 isOpen={dropdownsOpen.admin}
//                 toggle={() => toggleDropdown("admin")}
//               >
//                 <DropdownToggle nav caret>
//                   Admin
//                 </DropdownToggle>
//                 <DropdownMenu>
//                   <DropdownItem href="#">View Doctors</DropdownItem>
//                   <DropdownItem href="#">View Users</DropdownItem>
//                   <DropdownItem href="#">View Appointments</DropdownItem>
//                 </DropdownMenu>
//               </Dropdown>
//             )}
//             {isDoctor && (
//               <Dropdown
//                 nav
//                 isOpen={dropdownsOpen.doctor}
//                 toggle={() => toggleDropdown("doctor")}
//               >
//                 <DropdownToggle nav caret>
//                   Doctor
//                 </DropdownToggle>
//                 <DropdownMenu>
//                   <DropdownItem href="#">View Appointments</DropdownItem>
//                 </DropdownMenu>
//               </Dropdown>
//             )}
//           </Nav>
//           <Form inline = "true">
//             <FormGroup className="my-2 my-lg-0 d-flex">
//               <Input
//                 type="text"
//                 placeholder="Search"
//                 className="mr-2"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Button
//                 color="success"
//                 className="my-2 my-sm-0"
//                 type="button"
//                 onClick={handleSearch}
//               >
//                 Search
//               </Button>
//             </FormGroup>
//           </Form>
//           {showSearchResults && ( // Display search results when showSearchResults is true
//             <div className="search-results">
//               <ul>
//                 {searchResults.map((result, index) => (
//                   <li key={index} onClick={handleSearchResultClick}>
//                     <Link to={result.link}>{result.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {isLoggedIn ? (
//             <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
//           ) : (
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 width: "150px",
//               }}
//             >
//               <Link to="/login">
//                 <Button color="success" className="my-2 my-sm-0">
//                   Login
//                 </Button>
//               </Link>
//               <Link to="/signup">
//                 <Button color="success" className="my-2 my-sm-0">
//                   Register
//                 </Button>
//               </Link>
//             </div>
//           )}
//         </Navbar>
//       </div>
//     </header>
//   );
// }

// export default Header;
import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  Button,
  FormGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import UserIcon from "./UserMenu";
import { AuthContext } from "./AuthContext";
import GastroenterologyDepartment from "./Gastrology";
import CardiologyDepartment from "./Cardiology";
import GynecologyDepartment from "./Gynecology";
import DermatologyDepartment from "./Dermatology";
import OphthalmologyDepartment from "./Ophtamology";
import PalmanologyDepartment from "./Pulmonology";
import PlasticSurgeryPage from "./PlasticSurgery";
import PsychiatryPage from "./Psychiatry";
import DentistDepartment from "./Dentistry";
import ENTDepartment from "./ENT";
import AppointmentsList from "./AppointmentsList";
import ContactForm from "./ContactForm";
import FindHospital from "../Service/FindHospital";

const specialtyRoutes = [
  {
    title: "Find Hospital",
    link: "/find-hospital",
    component: <FindHospital/>,
  },
  {
    title: "Cardiology",
    link: "/cardiology",
    component: <CardiologyDepartment />,
  },
  {
    title: "Gastroenterology",
    link: "/gastrology",
    component: <GastroenterologyDepartment />,
  },
  {
    title: "Gynecology",
    link: "/gynecology",
    component: <GynecologyDepartment />,
  },
  {
    title: "Dermatology",
    link: "/dermatology",
    component: <DermatologyDepartment />,
  },
  {
    title: "Ophthalmology",
    link: "/ophtamology",
    component: <OphthalmologyDepartment />,
  },
  {
    title: "Pulmonology",
    link: "/pulmanology",
    component: <PalmanologyDepartment />,
  },
  {
    title: "Plastic Surgery",
    link: "/plastic-surgery",
    component: <PlasticSurgeryPage />,
  },
  {
    title: "Psychiatry",
    link: "/psychiatry",
    component: <PsychiatryPage />,
  },
  {
    title: "Dentistry",
    link: "/dentistry",
    component: <DentistDepartment />,
  },
  {
    title: "ENT (Ear, Nose, Throat)",
    link: "/ENT",
    component: <ENTDepartment />,
  },
  {
    title: "View Appointments",
    link: "/appointments",
    component: <AppointmentsList />,
  },
  {
    title: "Plan Your Trip",
    link: "/plan-your-trip",
    component: <ContactForm />,
  },
];

function Header() {
  const { isLoggedIn, userDetails, isAdmin, isDoctor, handleLogout } =
    useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [dropdownsOpen, setDropdownsOpen] = useState({
    centersOfExcellence: false,
    healthInformation: false,
    internationalPatient: false,
    hospitals: false,
    admin: false,
    doctor: false,
  });

  const toggleDropdown = (dropdownName) => {
    setDropdownsOpen({
      ...dropdownsOpen,
      [dropdownName]: !dropdownsOpen[dropdownName],
    });
  };

  const handleSearch = () => {
    const filteredResults = specialtyRoutes.filter((specialty) =>
      specialty.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
    setShowSearchResults(true);
  };

  const handleSearchResultClick = () => {
    setShowSearchResults(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        zIndex: 10,
        height: "auto",
        width: "100%",
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <div
        className="container1"
        style={{
          display: "flex",
          height: "25px",
          backgroundColor: "rgb(174, 48, 174)",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <p
          className="header1 ml-10"
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginLeft: "5px",
          }}
        >
          <FontAwesomeIcon icon={faFacebook} />
          <span className="mx-1">|</span>
          <FontAwesomeIcon icon={faInstagram} />
          <span className="mx-1">|</span>
          <FontAwesomeIcon icon={faTwitter} />
          <span className="mx-1">|</span>
          <FontAwesomeIcon icon={faYoutube} />
        </p>
        <p
          className="header2 mr-5"
          style={{
            justifyContent: "center",
            textAlign: "center",
            paddingRight: "20px",
            marginRight: "5px",
          }}
        >
          <i>Privacy Policy</i>|<i>Disclaimer</i>|<i>Contact</i>
        </p>
      </div>
      <div>
        <Navbar color="light" light expand="lg" style={{ width: "100%" }}>
          <Nav className="mr-auto">
            <Dropdown
              nav
              isOpen={dropdownsOpen.centersOfExcellence}
              toggle={() => toggleDropdown("centersOfExcellence")}
            >
              <DropdownToggle nav caret>
                Centers of Excellence
              </DropdownToggle>
              <DropdownMenu>
              <Link to='/cardiology' className="pg_widget" id="COE_Cardiology">
                <DropdownItem href="#">Cardiology</DropdownItem></Link>
                <Link to='/gastrology' className="pg_widget" id="COE_Gastroenterology">
                <DropdownItem href="#">Gastroenterology</DropdownItem></Link>
                <Link to='/gynecology' className="pg_widget" id="COE_Gynecology">
                <DropdownItem href="#">Gynecology</DropdownItem></Link>
                <Link to='/dermatology' className="pg_widget" id="COE_Dermatology">
                <DropdownItem href="#">Dermatology</DropdownItem></Link>
                <Link to='/ophtamology' className="pg_widget" id="COE_Ophthalmology">
                <DropdownItem href="#">Ophtamology</DropdownItem></Link>
                <Link to='/pulmanology' className="pg_widget" id="COE_Pulmonology">
                <DropdownItem href="#">Pulmonology</DropdownItem></Link>
                <Link to='/plastic-surgery' className="pg_widget" id="COE_Plasticsurgery">
                <DropdownItem href="#">Plastic Surgery</DropdownItem></Link>
                <Link to='/psychiatry' className="pg_widget" id="COE_Psychiatry">
                <DropdownItem href="#">Psychiatry</DropdownItem></Link>
                <Link to='/dentistry' className="pg_widget" id="COE_Dentistry">
                <DropdownItem href="#">Dentistry</DropdownItem></Link>
                <Link to='/ENT' className="pg_widget" id="COE_ENT">
                <DropdownItem href="#">ENT</DropdownItem></Link>
              </DropdownMenu>
            </Dropdown>
            <Dropdown
              nav
              isOpen={dropdownsOpen.healthInformation}
              toggle={() => toggleDropdown("healthInformation")}
            >
              <DropdownToggle nav caret>
                Health Information
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#">Diseases and Condition</DropdownItem>
                <DropdownItem href="#">Tests and Procedures</DropdownItem>
                <DropdownItem href="#">Medical Glosarry Decoded</DropdownItem>
                <DropdownItem href="#">Understanding Investigation</DropdownItem>
                
              </DropdownMenu>
            </Dropdown>
            <Dropdown
              nav
              isOpen={dropdownsOpen.internationalPatient}
              toggle={() => toggleDropdown("internationalPatient")}
            >
              <DropdownToggle nav caret>
                International Patient
              </DropdownToggle>
              <DropdownMenu>
                <Link to='/plan-your-trip'>
                <DropdownItem href="#">Plan Your Trip</DropdownItem>
                </Link>
                <DropdownItem href="#">Online Consultation</DropdownItem>
                <DropdownItem href="#">Visa</DropdownItem>
                <DropdownItem href="#">Apollo Insurance</DropdownItem>
                
              </DropdownMenu>
            </Dropdown>
            <Dropdown
              nav
              isOpen={dropdownsOpen.hospitals}
              toggle={() => toggleDropdown("hospitals")}
            >
              <DropdownToggle nav caret>
                Hospitals
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="https://www.youtube.com/results?search_query=apollohospitals+react+project+">
                  Apollo
                </DropdownItem>
                <Link to="/find-hospital">
                <DropdownItem href="#">Hyderabad</DropdownItem></Link>
                <Link to="/find-hospital">
                <DropdownItem href="#">Bangalore</DropdownItem></Link>
                <Link to="/find-hospital">
                <DropdownItem href="#">Delhi</DropdownItem></Link>
                <Link to="/find-hospital">
                <DropdownItem href="#">Chennai</DropdownItem></Link>
                <Link to="/find-hospital">
                <DropdownItem href="#">Mumbai</DropdownItem></Link>
                <Link to="/find-hospital">
                <DropdownItem href="#">Kolkata</DropdownItem></Link>
                
              </DropdownMenu>
            </Dropdown>
            {isAdmin && (
              <Dropdown
                nav
                isOpen={dropdownsOpen.admin}
                toggle={() => toggleDropdown("admin")}
              >
                <DropdownToggle nav caret>
                  Admin
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">View Doctors</DropdownItem>
                  <DropdownItem href="#">View Users</DropdownItem>
                  <DropdownItem href="#">View Appointments</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
            {isDoctor && (
              <Dropdown
                nav
                isOpen={dropdownsOpen.doctor}
                toggle={() => toggleDropdown("doctor")}
              >
                <DropdownToggle nav caret>
                  Doctor
                </DropdownToggle>
                <DropdownMenu>
                  <Link to="/appointments">
                    <DropdownItem >View Appointments</DropdownItem>
                  </Link>
                </DropdownMenu>
              </Dropdown>
            )}
          </Nav>
          <Form inline="true">
            <FormGroup className="my-2 my-lg-0 d-flex">
              <Input
                type="text"
                placeholder="Search"
                className="mr-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                color="success"
                className="my-2 my-sm-0"
                type="button"
                onClick={handleSearch}
              >
                Search
              </Button>
            </FormGroup>
          </Form>
          {showSearchResults && (
            <div className="search-results">
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} onClick={handleSearchResultClick}>
                    <Link to={result.link}>{result.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isLoggedIn ? (
            <UserIcon userDetails={userDetails} handleLogout={handleLogout} />
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
              }}
            >
              <Link to="/login">
                <Button color="success" className="my-2 my-sm-0">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button color="success" className="my-2 my-sm-0">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
