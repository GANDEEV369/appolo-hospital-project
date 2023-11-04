// src/redux/authReducer.js
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from './authActions';

const initialState = {
  registrationResult: null,
  loginResult: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registrationResult: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registrationResult: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginResult: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginResult: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
