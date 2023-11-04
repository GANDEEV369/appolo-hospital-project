import "./Login.css";
import { useState, useEffect,useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Login() {    
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");
const[firstname,setFirstname]=useState("");
const[repass,setRepass]=useState("");
const[phonenumber,setPhonnumber]=useState("");

const sername=useRef();

const enter=async(event)=>{
    event.preventDefault();
    setUsername("");
    setPassword("");
    setFirstname("");
    setRepass("");
    setPhonnumber("");

    try{
        const response=await axios.post("http://localhost:3000//",{
            username,
            password,
            firstname,
            repass,
            phonenumber
        })
    
    if(response.data.message==='1 document inserted'){
        alert("Resigition is successful")
    }
    else{
        alert("Resigition is not successful")
    }
}
catch(e){
    console.error(e);
}

}
  return (
    <div className="row">
      <div className="col-3"></div>
       <div className="col-6  mainCol" >

        <div className="container-fluid container">
        <form className="form" action="#" onSubmit={enter}>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <p className="firstName">Firstname</p>
                </div>
                <div className="col-6">
                  <input className="firstInput" type="text" required placeholder="Enter your Firstname"  value={firstname} 
                  onChange={(e) => setFirstname(e.target.value)} />
                </div>
              </div>


              <div className="row">
                <div className="col-4">
                  <p className="firstName">Lastname</p>
                </div>
                <div className="col-6">
                  <input className="firstInput" type="text" placeholder="Enter your Lastname" required value={username} 
                  onChange={(e) => setUsername(e.target.value)}></input>
                </div>
              </div>
               
              <div className="row">
                <div className="col-4">
                  <p className="firstName">Phonenumber</p>
                </div>
                <div className="col-6">
                  <input className="firstInput" type="number" placeholder="Enter your phonenumber" required value={phonenumber}
                  onChange={(e) => setPhonnumber(e.target.value)} ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <p className="firstName">Password</p>
                </div>
                <div className="col-6">
                  <input className="firstInput" type="password" placeholder="Enter your password" required value={password} 
                  onChange={(e) => setPassword(e.target.value)}></input>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <p className="firstName">Conformpassword</p>
                </div>
                <div className="col-6">
                  <input className="firstInput" type="password" placeholder="Re-enter password" required value={repass} 
                  onChange={(e) => setRepass(e.target.value)}></input>
                </div>
              </div>

               <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                 <button type="submit" className="btn submitbt " ><span className="submit">submit</span></button>
                </div>

               </div>
               <div className="row mt-5">
                <div className="col-4">
                <Link to="/login"><button type="submit" className="btn submitbt " ><span className="submit">Login</span></button></Link>
                </div>

               </div>

            </div>
          </div>
          </form>
        </div>

       </div>
    </div>
  );
}

export default Login;