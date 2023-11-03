// src/redux/actions.js
export const setData = (data) => ({
    type: 'SET_DATA',
    payload: data,
  });
  
  export const setLoginResult = (result) => ({
    type: 'SET_LOGIN_RESULT',
    payload: result,
  });
  
  export const setRegistrationResult = (result) => ({
    type: 'SET_REGISTRATION_RESULT',
    payload: result,
  });
  