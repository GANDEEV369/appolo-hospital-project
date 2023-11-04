// src/redux/registrationActions.js
// import axios from 'axios';
// import { setRegistrationResult } from './actions';

// export const register = (id, name, batch, salary) => async (dispatch) => {
//   try {
//     const response = await axios.post('http://localhost:4000/register', { id, name, batch, salary });
//     dispatch(setRegistrationResult(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// };
// src/redux/registrationActions.js
// import axios from 'axios';
// import { setRegistrationResult } from './actions';


// export const register = (username,name,email,password,confirmpassword) => async (dispatch) => {
//   try {
//     // console.log({id},{name},{batch},{salary});
//     const response = await axios.post('http://localhost:3005/register', { username, name, email, password, confirmpassword });
    
//     dispatch(setRegistrationResult(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// };
import axios from 'axios';
import { setRegistrationResult } from './actions';

export const register = (username, name, email, password, confirmpassword) => async (dispatch) => {
  try {
    // Check if passwords match and meet requirements
    if (password !== confirmpassword) {
      console.error("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      console.error("Password must be at least 8 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      console.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      console.error("Password must contain at least one special character");
      return;
    }
    
    // Check for spaces in username, email, and password
    if (/\s/.test(username) ) {
      console.error("Spaces are not allowed in username");
      return;
    }
    if ( /\s/.test(email) ) {
      console.error("Spaces are not allowed in email");
      return;
    }
    if ( /\s/.test(password)) {
      console.error("Spaces are not allowed in password");
      return;
    }
    if (/\s/.test(confirmpassword)) {
      console.error("Spaces are not allowed in confirmpassword");
      return;
    }
    

    const response = await axios.post('http://localhost:3005/register', { username, name, email, password });

    // Check if user already exists
    if (response.data.message === "User already exists") {
      console.error("User already exists");
      return;
    }

    dispatch(setRegistrationResult(response.data));
  } catch (error) {
    console.error(error);
  }
};
