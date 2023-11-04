// import React from 'react'// main code
// import Header from './components/Header'
// import MyCarousel from './components/Carousel'
// import Services from './components/Services'
// import Features from './components/Features'
// import Last from './components/Last'
// function App() {
//   return (
//     <div className='App'>
//       <Header/>
//       <MyCarousel/>
//       <Services/>
//       <Features/>
//       <Last/>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react';
// import React from 'react';
import { AuthProvider } from './components/AuthContext'
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginOrRegister from './components/LoginOrRegister';
import GastroenterologyDepartment from './components/Gastrology';
import CardiologyDepartment from './components/Cardiology';
import GynecologyDepartment from './components/Gynecology';
import DermatologyDepartment from './components/Dermatology';
import OphthalmologyDepartment from './components/Ophtamology';
import PalmanologyDepartment from './components/Pulmonology';
import PlasticSurgeryPage from './components/PlasticSurgery';
import PsychiatryPage from './components/Psychiatry';
import DentistDepartment from './components/Dentistry';
import ENTDepartment from './components/ENT';
import BookAppointment from './Service/BookAppointment';
import BookHealthCheckUp from './Service/BookHealthCheckUp';
import BuyMedicine from './Service/BuyMedicine';
import FindHospital from './Service/FindHospital';
import AppointmentsList from './components/AppointmentsList';
import ContactForm from './components/ContactForm';
// import ConsultOnline from './Service/ConsultOnline'
// import HomePage from './components/HomePage';
// import Locom from './components/Locom';
function App() {

    return (
      <AuthProvider>
      <div>
      <Provider store={store}>
      <BrowserRouter>
      {/* <LoginComponent /> */}
      {/* <switch> */}
            <Routes>

            <Route path="/login"  element={<LoginComponent />}></Route>
              <Route path="/" element ={<LoginOrRegister/>}></Route>
              {/* <Route path="/home" element ={<LoginOrRegister/>}></Route> */}
              {/* <Route path="/login"  element={<LoginComponent />}></Route> */}
              <Route path="/signup"element={<RegistrationComponent/>}></Route>
              <Route path="/cardiology" element={<CardiologyDepartment/>}></Route>
              <Route path="/gastrology" element={<GastroenterologyDepartment/>}></Route>
              <Route path="/gynecology" element={<GynecologyDepartment/>}></Route>
              <Route path="/dermatology" element={<DermatologyDepartment/>}></Route>
              <Route path='/ophtamology' element={<OphthalmologyDepartment/>}></Route>
              <Route path='/pulmanology' element={<PalmanologyDepartment/>}></Route>
              <Route path='/plastic-surgery' element={<PlasticSurgeryPage/>}></Route>
              <Route path='/psychiatry' element={<PsychiatryPage/>}></Route>
              <Route path="/dentistry" element={<DentistDepartment/>}></Route>
              <Route path="/ENT" element={<ENTDepartment/>}></Route>
              {/* <Route path="/loginorregister" Component={LoginOrRegister} ></Route> */}
              <Route path="/book-appointment" element={<BookAppointment/>}></Route>
              <Route path="/book_health_check-up" element={<BookHealthCheckUp/>}></Route>
              {/* <Route path="/consult_online" element={<ConsultOnline/>}></Route> */}
              {/* <Route path="/buy_medicine" element={<BuyMedicine/>}></Route> */}
              <Route path="/find-hospital" element={<FindHospital/>}></Route>
              <Route path="/view_health
              -record" element={<ENTDepartment/>}></Route>
              <Route path="/appointments" element={<AppointmentsList/>}></Route>
              <Route path="/plan-your-trip" element={<ContactForm/>}></Route>
            </Routes>
          {/* </switch>       */}
      </BrowserRouter>
      </Provider>
      </div>
      </AuthProvider>
    );
  }

  export default App;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header"; // Import your Header component
// import LoginComponent from "./components/LoginComponent"; // Import your Login form component

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login status
//   const [userDetails, setUserDetails] = useState(null); // Store user details

//   // Function to handle successful login
//   const handleLogin = (userData) => {
//     setIsLoggedIn(true); // Set the user as logged in
//     setUserDetails(userData); // Set user details
//   };

//   // Function to handle user logout
//   const handleLogout = () => {
//     setIsLoggedIn(false); // Set the user as logged out
//     setUserDetails(null); // Clear user details
//   };

//   return (
//     <Router>
//       <div>
//         <Header
//           isLoggedIn={isLoggedIn}
//           userDetails={userDetails}
//           handleLogout={handleLogout}
//           openLoginModal={() => {
//             /* Function to open the login modal */
//           }}
//           openRegisterModal={() => {
//             /* Function to open the register modal */
//           }}
//         />
//         <switch>
//           <Routes>
//             <Route path="/login" element = {<LoginComponent onLogin={handleLogin} />}>
              
//             </Route>
//           </Routes>
//           {/* Other routes and components */}
//         </switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import LoginComponent from './components/LoginComponent'; // Import the Login component
// import RegistrationComponent from './components/RegistrationComponent';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import EmployeeList from './components/EmployeeList';

// function App() {
//   const [activeForm, setActiveForm] = useState('login');

//   return (
//     <Provider store={store}>
//       <div className="App">
//         <Header />
//         <div className="container">
//           <h1>Your React-Redux App</h1>
//           <div className="form-switch">
//             <button
//               className={activeForm === 'registration' ? 'active' : ''}
//               onClick={() => setActiveForm('registration')}
//             >
//               Registration
//             </button>
//             <button
//               className={activeForm === 'login' ? 'active' : ''}
//               onClick={() => setActiveForm('login')}
//             >
//               Login
//             </button>
//           </div>
//           {activeForm === 'registration' && <RegistrationComponent />}
//           {activeForm === 'login' && <LoginComponent />} {/* Use the Login component here */}
//           <EmployeeList />
//         </div>
//         <Footer />
//       </div>
//     </Provider>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import MyCarousel from './components/Carousel';
// import LoginPage from './components/LoginPage'; // Create a Login component
// import RegistrationPage from './components/RegistrationPage'; // Create a Registration component
// import HomePage from './components/HomePage'; // Create a Home component

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Use state to track user login status

//   // Function to set user as logged in (e.g., after successful login)
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   // Function to set user as logged out (e.g., after logout)
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div className='App'>
//       <Header />
//       <Router>
//         <Switch>
//           <Route path='/login'>
//             {isLoggedIn ? <Redirect to='/home' /> : <LoginPage onLogin={handleLogin} />}
//           </Route>
//           <Route path='/register'>
//             {isLoggedIn ? <Redirect to='/home' /> : <RegistrationPage />}
//           </Route>
//           <Route path='/home'>
//             {isLoggedIn ? <HomePage onLogout={handleLogout} /> : <Redirect to='/login' />}
//           </Route>
//           <Route exact path='/'>
//             <MyCarousel />
//           </Route>
//           <Redirect to='/' />
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Header from './components/Header';
// import LoginPage from './components/LoginPage';
// import RegistrationPage from './components/RegistrationPage';
// import HomePage from './components/HomePage';
// import UpdatePassword from './components/UpdatePassword';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Function to handle login
//   const handleLogin = () => {
//     // In a real application, you would perform authentication here
//     // For this example, we'll simply set isLoggedIn to true
//     setIsLoggedIn(true);
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//         <UpdatePassword/>
//         <Routes>
//           <Route
//             path="/"
//             element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />}
//           />
//           <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//           <Route path="/register" element={<RegistrationPage />} />
//           <Route
//             path="/home"
//             element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
