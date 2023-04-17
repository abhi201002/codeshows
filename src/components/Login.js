import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"
// import { auth } from './firebase';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './login.css'
import { useDataValue } from './Datalayer';

function Login(props) {
  // const [{cart},dispatch] = useDataValue();
  // const history = useNavigate();
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");
  // const login = (event) =>{
  //   event.preventDefault(); 
  //   signInWithEmailAndPassword(auth,email,password)
  //   .then((userCredential) =>{
  //     history("/");
  //   })
  //   .catch((e) => alert(e.message));
  // }
  // const register = (event) =>{
  //   event.preventDefault(); 
  //   createUserWithEmailAndPassword(auth,email,password)
  //   .then((userCredential) =>{
  //     history("/");
  //   })
  //   .catch((e) => alert(e?.message));
  // }
  return (
    <div className="login">
      <img src="https://media.licdn.com/dms/image/C510BAQHFWz_x28P2wQ/company-logo_200_200/0/1573763330248?e=1689811200&v=beta&t=IcrqrAZDa06MQurO3DcmCVwhfiED2MXRRtxr0Invbt4" alt="" />
      <div className="sign_in">
        <p>Sign In</p>
        <h5>Email Id</h5>
        <input type="email" placeholder='Email Id' />
        <h5>Password</h5>
        <input type="password" placeholder='Password' />
        <button type='Submit' className='btn' >Sign In</button>
        <button type='Submit' >Create New Account</button>
        <button type='Submit' onClick={() => {props.update(props.status)}}>Close</button>
      </div>
    </div>
  )
}

export default Login