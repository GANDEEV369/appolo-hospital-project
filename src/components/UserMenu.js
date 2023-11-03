// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// function UserMenu({ userDetails, handleLogout }) {
//   return (
//     <div className="user-menu">
//       <div className="user-icon">
//         <FontAwesomeIcon icon={faUser} size="2x" /> {/* User icon */}
//       </div>
//       <div className="user-dropdown">
//         <div className="user-details">
//           <p>Username: {userDetails.username}</p>
//           <p>Name: {userDetails.name}</p>
//           <p>Email: {userDetails.email}</p>
//         </div>
//         <button onClick={handleLogout}>Sign Out</button>
//       </div>
//     </div>
//   );
// }

// export default UserMenu;
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={faUser} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && (
//         <div className="user-dropdown">
//           <ul>
//             <li>
//               <strong>Username:</strong> {userDetails.username}
//             </li>
//             <li>
//               <strong>Name:</strong> {userDetails.name}
//             </li>
//             <li>
//               <strong>Email:</strong> {userDetails.email}
//             </li>
//             <li>
//               <button onClick={handleLogout}>Sign Out</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserIcon;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import "bootstrap/dist/css/bootstrap.min.css";
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

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={faUser} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && (
//         <div className="user-dropdown">
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem onClick={handleLogout}>Sign Out</DropdownItem>
//           </DropdownMenu>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserIcon;
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={faUser} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem onClick={handleLogout}>Sign Out</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;
// import React, { useState } from 'react';//UserMenu.js
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={faUser} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem onClick={handleLogout}>Sign Out</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;
// import logo from './logo.svg';
// import user from './images/user.png';
// import me from './images/me (3).jpg'
// import edit from './images/edit.png';
// import inbox from './images/envelope.png';
// import settings from './images/settings.png';
// import help from './images/question.png';
// import logout from './images/log-out.png'
// import './UserMenu.css'
// import '../index.css'

// import React, {useState, useEffect, useRef} from 'react';

// function UserIcon() {

//   const [open, setOpen] = useState(false);

//   let menuRef = useRef();

//   useEffect(() => {
//     let handler = (e)=>{
//       if(!menuRef.current.contains(e.target)){
//         setOpen(false);
//         console.log(menuRef.current);
//       }      
//     };

//     document.addEventListener("mousedown", handler);
    

//     return() =>{
//       document.removeEventListener("mousedown", handler);
//     }

//   });

//   return (
//     <div className="App">
//       <div className='menu-container' ref={menuRef}>
//         <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
//           <img src={me}></img>
//         </div>

//         <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
//           <h3>Gandeev<br/><span>Website Designer</span></h3>
//           <ul>
//             <DropdownItem img = {user} text = {"My Profile"}/>
//             <DropdownItem img = {edit} text = {"Edit Profile"}/>
//             <DropdownItem img = {inbox} text = {"Inbox"}/>
//             <DropdownItem img = {settings} text = {"Settings"}/>
//             <DropdownItem img = {help} text = {"Helps"}/>
//             <DropdownItem img = {logout} text = {"Logout"}/>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function DropdownItem(props){
//   return(
//     <li className = 'dropdownItem'>
//       <img src={props.img}></img>
//       <a> {props.text} </a>
//     </li>
//   );
// }

// export default UserIcon;
// import React, { useState } from 'react';//main code
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={faUser} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem onClick={handleLogout}>Sign Out</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={faUser} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem onClick={handleLogout}>Sign Out</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;//main icon
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Button } from "reactstrap";

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={faUser} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             {/* <DropdownItem onClick={handleLogout}>Sign Out</DropdownItem> */}
//             <Button onClick={handleLogout}>Sign Out</Button>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;// original original code
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faUserMd, faUserShield } from "@fortawesome/free-solid-svg-icons";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";

// function UserIcon({ userDetails, handleLogout, userType }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // const icon =
//   //   userType === "admin"
//   //     ?(<FontAwesomeIcon icon={faUserShield} size="2x" onClick={toggleDropdown} />)// Admin user icon
//   //     : userType === "doctor"
//   //     ? (<FontAwesomeIcon icon={faUserMd} size="2x" onClick={toggleDropdown} />)
//   //     : (<FontAwesomeIcon icon={faUser} size="2x" onClick={toggleDropdown} />)
//   const icon =
//     userType === "admin"
//       ? faUserShield // Admin user icon
//       : userType === "doctor"
//       ? faUserMd // Doctor user icon
//       : faUser;
//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={icon} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <Button onClick={handleLogout}>Sign Out</Button>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faUserMd, faUserShield } from "@fortawesome/free-solid-svg-icons";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const icon = userDetails.userType === "admin" ? faUserShield : userDetails.userType === "doctor" ? faUserMd : faUser;
//   console.log(userDetails)
//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={icon} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <Button onClick={handleLogout}>Sign Out</Button>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;// main main original code
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faUserMd, faUserShield } from "@fortawesome/free-solid-svg-icons";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const icon = userDetails.userType === "admin" ? faUserShield : userDetails.userType === "doctor" ? faUserMd : faUser;

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={icon} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && userDetails.user && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.user.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.user.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.user.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <Button onClick={handleLogout}>Sign Out</Button>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faUserMd, faUserShield } from "@fortawesome/free-solid-svg-icons";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Determine the icon based on userType
//   let icon = faUser;
//   if (userDetails.userType === "admin") {
//     icon = faUserShield;
//   } else if (userDetails.userType === "doctor") {
//     icon = faUserMd;
//   }

//   console.log("userDetails:", userDetails); // Debugging: Log userDetails

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={icon} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && userDetails.user && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.user.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.user.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.user.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <Button onClick={handleLogout}>Sign Out</Button>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faUserMd, faUserShield } from "@fortawesome/free-solid-svg-icons";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";

// function UserIcon({ userDetails, handleLogout }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

//   // Check if userDetails and userDetails.userType are defined
//   if (!userDetails || !userDetails.userType) {
//     console.error("userDetails or userDetails.userType is not defined");
//     return null;
//   }

//   // Determine the icon based on userType
//   let icon = faUser;
//   if (userDetails.userType === "admin") {
//     icon = faUserShield;
//   } else if (userDetails.userType === "doctor") {
//     icon = faUserMd;
//   }

//   console.log("userDetails:", userDetails); // Debugging: Log userDetails

//   return (
//     <div className="user-icon">
//       <FontAwesomeIcon icon={icon} size="2x" onClick={toggleDropdown} />
//       {dropdownOpen && userDetails.user && (
//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle nav caret>
//             User Details
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <strong>Username:</strong> {userDetails.user.username}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Name:</strong> {userDetails.user.name}
//             </DropdownItem>
//             <DropdownItem>
//               <strong>Email:</strong> {userDetails.user.email}
//             </DropdownItem>
//             <DropdownItem divider />
//             <Button onClick={handleLogout}>Sign Out</Button>
//           </DropdownMenu>
//         </Dropdown>
//       )}
//     </div>
//   );
// }

// export default UserIcon;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserMd, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";

function UserIcon({ userDetails, handleLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  // Check if userDetails and userDetails.userType are defined
  if (!userDetails || !userDetails.userType || !userDetails[userDetails.userType]) {
    console.error(`userDetails or userDetails.${userDetails.userType} is not defined`);
    return null;
  }

  // Determine the icon based on userType
  let icon = faUser;
  if (userDetails.userType === "admin") {
    icon = faUserShield;
  } else if (userDetails.userType === "doctor") {
    icon = faUserMd;
  }

  // console.log("userDetails:", userDetails); // Debugging: Log userDetails 

  return (
    <div className="user-icon">
      <FontAwesomeIcon icon={icon} size="2x" onClick={toggleDropdown} />
      {dropdownOpen && (
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle nav caret>
            User Details
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <strong>Username:</strong> {userDetails[userDetails.userType].username}
            </DropdownItem>
            <DropdownItem>
              <strong>Name:</strong> {userDetails[userDetails.userType].name}
            </DropdownItem>
            <DropdownItem>
              <strong>Email:</strong> {userDetails[userDetails.userType].email}
            </DropdownItem>
            
            <DropdownItem divider />
            
            <Button onClick={handleLogout}>Sign Out</Button>
          </DropdownMenu>
        </Dropdown>
      )}
      
    </div>
  );
}


export default UserIcon;//icon which worked
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faUserMd, faUserShield, faCogs } from "@fortawesome/free-solid-svg-icons";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";

// // Define a custom hook to toggle a boolean state
// const useToggle = (initialState) => {
//   const [state, setState] = useState(initialState);
//   const toggleState = () => setState((prevState) => !prevState);
//   return [state, toggleState];
// };

// // Define a custom hook to get the user icon based on the user type
// const getUserIcon = (userType) => {
//   switch (userType) {
//     case "admin":
//       return faUserShield;
//     case "doctor":
//       return faUserMd;
//     default:
//       return faUser;
//   }
// };

// function UserIcon({ userDetails, handleLogout }) {
//   // Destructure the properties from userDetails
//   const { userType, [userType]: user } = userDetails;

//   // Use a custom hook to toggle the dropdown menus
//   const [dropdownOpen, toggleDropdown] = useToggle(false);
//   const [manageDropdownOpen, toggleManageDropdown] = useToggle(false);

//   return (
//     <div className="user-icon">
//       {user && userType ? (
//         <>
//           <FontAwesomeIcon icon={getUserIcon(userType)} size="2x" onClick={toggleDropdown} />
//           <DropdownMenuComponent dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} user={user} handleLogout={handleLogout} />
//           <AdminComponent userType={userType} manageDropdownOpen={manageDropdownOpen} toggleManageDropdown={toggleManageDropdown} />
//         </>
//       ) : null}
//     </div>
//   );
// }

// const DropdownMenuComponent = ({ dropdownOpen, toggleDropdown, user, handleLogout }) => (
//   dropdownOpen && (
//     <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//       <DropdownToggle nav caret> User Details </DropdownToggle>
//       <DropdownMenu>
//         <UserInfo user={user} />
//         <Button onClick={handleLogout}>Sign Out</Button>
//       </DropdownMenu>
//     </Dropdown>
//   )
// );

// const UserInfo = ({ user }) => (
//   <>
//     <UserInfoItem label="Username" value={user.username} />
//     <UserInfoItem label="Name" value={user.name} />
//     <UserInfoItem label="Email" value={user.email} />
//     <DropdownItem divider />
//   </>
// );

// const UserInfoItem = ({ label, value }) => (
//   <DropdownItem>
//     <strong>{label}:</strong> {value}
//   </DropdownItem>
// );

// const AdminComponent = ({ userType, manageDropdownOpen, toggleManageDropdown }) => (
//   userType === "admin" && (
//     <div>
//       <FontAwesomeIcon icon={faCogs} size="2x" onClick={toggleManageDropdown} />
//       {manageDropdownOpen && (
//         <ManageAccountsComponent manageDropdownOpen={manageDropdownOpen} toggleManageDropdown={toggleManageDropdown} />
//       )}
//     </div>
//   )
// );

// const ManageAccountsComponent = ({ manageDropdownOpen, toggleManageDropdown }) => (
//   <Dropdown isOpen={manageDropdownOpen} toggle={toggleManageDropdown}>
//     <DropdownToggle nav caret> Manage Accounts </DropdownToggle>
//     <DropdownMenu>
//       <Button color="link" onClick={handleManageDoctorAccounts}>Manage Doctor Accounts</Button>
//       <Button color="link" onClick={handleManageUserAccounts}>Manage User Accounts</Button>
//     </DropdownMenu>
//   </Dropdown>
// );

// export default UserIcon;


