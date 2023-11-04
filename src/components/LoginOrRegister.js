// import React, { useState } from 'react';
// import Header from './Header';
// import MyCarousel from './Carousel';
// import Services from './Services';
// import Features from './Features';
// import Last from './Last';
// import LoginComponent from './LoginComponent';
// import RegistrationComponent from './RegistrationComponent';
// export default function LoginOrRegister() {
//     const [isLoginComponentOpen, setLoginComponentOpen] = useState(true);
//     const [isRegistrationComponentOpen, setRegistrationComponentOpen] = useState(false);
//     const [isLoggedIn, setLoggedIn] = useState(false);
//     const [userDetails, setUserDetails] = useState({}); // Store user details when logged in
  
//     const openLoginComponent = () => {
//       setLoginComponentOpen(true);
//     };
  
//     const closeLoginComponent = () => {
//       setLoginComponentOpen(false);
//     };
  
//     const openRegistrationComponent = () => {
//       setRegistrationComponentOpen(true);
//     };
  
//     const closeRegistrationComponent = () => {
//       setRegistrationComponentOpen(false);
//     };
  
//     // const handleLogin = (user) => {
//     //   // Perform login logic here, and set user details
//     //   setUserDetails(user);
//     //   setLoggedIn(true);
//     //   closeLoginComponent();
//     // };
//     // const handleLogin = (user) => {
//     //   // Perform login logic here
//     //   setUserDetails(user);
//     //   setLoggedIn(true);
//     //   setLoginComponentOpen(false); // Close the login modal
//     // };
    
  
//     // const handleLogout = () => {
//     //   // Perform logout logic here
//     //   setLoggedIn(false);
//     // };
//     const handleLogin = (user) => {
//       // Perform login logic here
//       setUserDetails(user);
//       setLoggedIn(true);
//       setLoginComponentOpen(false); // Close the login modal
//     };
  
//     const handleLogout = () => {
//       // Perform logout logic here
//       setUserDetails({}); // Clear user details
//       setLoggedIn(false);
//     };
//   return (
//     <div className="App">
//       <Header
//         isLoggedIn={isLoggedIn}
//         userDetails={userDetails}
//         openLoginModal={openLoginComponent}
//         openRegisterModal={openRegistrationComponent}
//         handleLogout={handleLogout}
//       />
//       <MyCarousel />
//       <Services />
//       <Features />
//       <Last />

//       {isLoginComponentOpen && (
//         <LoginComponent
//           closeModal={closeLoginComponent}
//           handleLogin={handleLogin}
//         />
//       )}

//       {isRegistrationComponentOpen && (
//         <RegistrationComponent
//           closeModal={closeRegistrationComponent}
//         />
//       )}
//     </div>
//   )
// }
// import React, { useState } from 'react';
// import Header from './Header';
// import MyCarousel from './Carousel';
// import Services from './Services';
// import Features from './Features';
// import Last from './Last';
// import LoginComponent from './LoginComponent';
// import RegistrationComponent from './RegistrationComponent';

// export default function LoginOrRegister() {
//   const [isLoginComponentOpen, setLoginComponentOpen] = useState(false);
//   const [isRegistrationComponentOpen, setRegistrationComponentOpen] = useState(false);
//   const [isLoggedIn, setLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({}); // Store user details when logged in

//   const openLoginComponent = () => {
//     setLoginComponentOpen(true);
//   };

//   const closeLoginComponent = () => {
//     setLoginComponentOpen(false);
//   };

//   const openRegistrationComponent = () => {
//     setRegistrationComponentOpen(true);
//   };

//   const closeRegistrationComponent = () => {
//     setRegistrationComponentOpen(false);
//   };

//   const handleLogin = (user) => {
//     // Perform login logic here
//     setUserDetails(user);
//     setLoggedIn(true);
//     setLoginComponentOpen(false); // Close the login modal
//   };

//   const handleLogout = () => {
//     // Perform logout logic here
//     setUserDetails({}); // Clear user details
//     setLoggedIn(false);
//   };

//   return (
//     <div className="App">
//       <Header
//         isLoggedIn={isLoggedIn}
//         userDetails={userDetails}
//         openLoginModal={openLoginComponent}
//         openRegisterModal={openRegistrationComponent}
//         handleLogout={handleLogout}
//         toggleLoginForm={openLoginComponent} // Pass the function to toggle login form
//       />
//       <MyCarousel />
//       <Services />
//       <Features />
//       <Last />

//       {isLoginComponentOpen && (
//         <LoginComponent
//           closeModal={closeLoginComponent}
//           handleLogin={handleLogin}
//         />
//       )}

//       {isRegistrationComponentOpen && (
//         <RegistrationComponent
//           closeModal={closeRegistrationComponent}
//         />
//       )}
//     </div>
//   );
// }
// import React, { useState, createContext } from "react";
// import "../App.css";
// import Header from "./Header";
// import MyCarousel from "./Carousel";
// import Services from "./Services";
// import Features from "./Features";
// import Last from "./Last";
// import LoginComponent from "./LoginComponent";
// import RegistrationComponent from "./RegistrationComponent";
// export const UserContext = createContext(); 
// export default function LoginOrRegister() {
  
//   const [isLoginComponentOpen, setLoginComponentOpen] = useState(false);
//   const [isRegistrationComponentOpen, setRegistrationComponentOpen] = useState(false);
//   const [isLoggedIn, setLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({}); // Store user details when logged in

//   const openLoginComponent = () => {
//     setLoginComponentOpen(true);
//   };

//   const closeLoginComponent = () => {
//     setLoginComponentOpen(false);
//   };

//   const openRegistrationComponent = () => {
//     setRegistrationComponentOpen(true);
//   };

//   const closeRegistrationComponent = () => {
//     setRegistrationComponentOpen(false);
//   };

//   const handleLogin = (user) => {
//     // Perform login logic here
//     setUserDetails(user);
//     setLoggedIn(true);
//     setLoginComponentOpen(false); // Close the login modal
//   };

//   const handleLogout = () => {
//     // Perform logout logic here
//     setUserDetails({}); // Clear user details
//     setLoggedIn(false);
//   };

//   return (
//     <div className="App">
//       <Header
//         isLoggedIn={isLoggedIn}
//         userDetails={userDetails}
//         openLoginModal={openLoginComponent}
//         openRegisterModal={openRegistrationComponent}
//         handleLogout={handleLogout}
//         toggleLoginForm={openLoginComponent} // Pass the function to toggle login form
//       />
//       <MyCarousel />
//       <Services />
//       <Features />
//       <Last />

//       {isLoginComponentOpen && (
//         <LoginComponent
//           closeModal={closeLoginComponent}
//           handleLogin={handleLogin}
//         />
//       )}

//       {isRegistrationComponentOpen && (
//         <RegistrationComponent
//           closeModal={closeRegistrationComponent}
//         />
//       )}
//     </div>
//   );
// }//original 1
import React, { useState, createContext } from "react";
import "../App.css";
import Header from "./Header";
import MyCarousel from "./Carousel";
import Services from "./Services";
import Features from "./Features";
import Last from "./Last";
import LoginComponent from "./LoginComponent";
import RegistrationComponent from "./RegistrationComponent";

import 'bootstrap/dist/css/bootstrap.min.css';
export const UserContext = createContext();

const LoginOrRegister = () => {
  const [isLoginComponentOpen, setLoginComponentOpen] = useState(false);
  const [isRegistrationComponentOpen, setRegistrationComponentOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({}); // Store user details when logged in

  const openLoginComponent = () => {
    setLoginComponentOpen(true);
  };

  const closeLoginComponent = () => {
    setLoginComponentOpen(false);
  };

  const openRegistrationComponent = () => {
    setRegistrationComponentOpen(true);
  };

  const closeRegistrationComponent = () => {
    setRegistrationComponentOpen(false);
  };

  const handleLogin = (user) => {
    // Perform login logic here
    setUserDetails(user);
    setLoggedIn(true);
    setLoginComponentOpen(false); // Close the login modal
  };

  const handleLogout = () => {
    // Perform logout logic here
    setUserDetails({}); // Clear user details
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        userDetails={userDetails}
        openLoginModal={openLoginComponent}
        openRegisterModal={openRegistrationComponent}
        handleLogout={handleLogout}
        toggleLoginForm={openLoginComponent} // Pass the function to toggle login form
      />
      <MyCarousel />
      <Services />
      <Features />
      <Last />

      {isLoginComponentOpen && (
        <LoginComponent
          closeModal={closeLoginComponent}
          handleLogin={handleLogin}
        />
      )}

      {isRegistrationComponentOpen && (
        <RegistrationComponent
          closeModal={closeRegistrationComponent}
        />
      )}
    </div>
  );
};

export default LoginOrRegister;
