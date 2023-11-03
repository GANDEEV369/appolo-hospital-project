// import React from 'react';

// function HomePage({ onLogout }) {
//   const handleLogout = () => {
//     // Implement your logout logic here
//     // For example, clear the user's session and call onLogout to set isLoggedIn to false
//     onLogout();
//   };

//   return (
//     <div>
//       <h2>Welcome to the Home Page</h2>
//       <button type="button" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// }

// export default HomePage;

import React, { useState } from 'react';
import Header from './Header';
import MyCarousel from './Carousel';
import Services from './Services';
import Features from './Features';
import Last from './Last';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';

function HomePage() {
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
      // Perform login logic here, and set user details
      setUserDetails(user);
      setLoggedIn(true);
      closeLoginComponent();
    };
  
    const handleLogout = () => {
      // Perform logout logic here
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
}

export default HomePage;
// import React from 'react'
// import React, { useState } from 'react';
// import Header from './Header';
// import MyCarousel from './Carousel';
// import Services from './Services';
// import Features from './Features';
// import Last from './Last';
// import LoginComponent from './LoginComponent';
// import RegistrationComponent from './RegistrationComponent';
// export default function LoginOrRegister() {
//     const [isLoginComponentOpen, setLoginComponentOpen] = useState(false);
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
  
//     const handleLogin = (user) => {
//       // Perform login logic here, and set user details
//       setUserDetails(user);
//       setLoggedIn(true);
//       closeLoginComponent();
//     };
  
//     const handleLogout = () => {
//       // Perform logout logic here
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

