// import React, { useState } from 'react';//session storage
// export const AuthContext = React.createContext();
// export const AuthProvider = ({ children}) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserDetails({});
//   };
//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails, handleLogout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// import React, { useState } from 'react';

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({});

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserDetails({});
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails, handleLogout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// import React, { useState, useEffect } from 'react';// local storage

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({});

//   // Load login status from localStorage when component mounts
//   useEffect(() => {
//     const savedIsLoggedIn = localStorage.getItem('isLoggedIn');
//     const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

//     if (savedIsLoggedIn && savedUserDetails) {
//       setIsLoggedIn(savedIsLoggedIn === 'true');
//       setUserDetails(savedUserDetails);
//     }
//   }, []);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserDetails({});
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userDetails');
//   };

//   const handleLogin = (user) => {
//     setIsLoggedIn(true);
//     setUserDetails(user);
//     localStorage.setItem('isLoggedIn', 'true');
//     localStorage.setItem('userDetails', JSON.stringify(user));
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, userDetails, handleLogin, handleLogout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// import React, { useState } from 'react';

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
  
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserDetails({});
//   };
  
//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails, handleLogout }}>
//       {children}
//     </AuthContext.Provider>
    
//   );
// };
import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserDetails({});
    setIsAdmin(false); // Reset isAdmin when logging out
    setIsDoctor(false); // Reset isDoctor when logging out
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails, isAdmin, setIsAdmin, isDoctor, setIsDoctor, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
