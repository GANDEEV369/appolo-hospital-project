// // src/redux/loginActions.js
// import axios from 'axios';
// import { setLoginResult } from './actions';

// export const login = (name, salary) => async (dispatch) => {
//   try {
//     const response = await axios.get(`http://localhost:4000/login/${name}/${salary}`);
//     dispatch(setLoginResult(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// };
// src/redux/loginActions.js
import axios from "axios";
import { setLoginResult } from "./actions";

export const login = (id) => async (dispatch) => {
  // try {
  //   const response = await axios.get(`http://localhost:4000/login/${name}/${salary}`);
  //   dispatch(setLoginResult(response.data));
  // }
  // try{
  //   const response=await axios.get(`http://localhost:4000/login/${id}`,{
  //       ,

  //   })
  //   if(response.data.message==="1 document found"){
  //     navigate('/Home');

  // }
  //   else{
  //       navigate('/Homenot')
  //   }
  // catch (error) {
  //   console.error(error);
  // }
  try {
    const response = await axios.get(
      `http://localhost:4000/login/${id}`,
      {
        id,
      }
    );
    if (response.data.message === "1 document found") {
      dispatch(setLoginResult(response.data));
    } else {
      navigate("/Homenot");
    }
  } catch (error) {
    console.log(error);
  }
};
