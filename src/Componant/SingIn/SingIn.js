import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SingIn.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const SingIn = () => {

const [email,setEmail] =useState('')
const [password,setPassword] =useState('')
// const [error,setError]=useState('')
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

const handleEmail =e=>{
    setEmail(e.target.value);
}

const handlePassword =e=>{
    setPassword(e.target.value);
}

const handelSubmit=e=>{
    e.preventDefault();
    createUserWithEmailAndPassword(email,password)

}
console.log(user)

  return (
    <div className="form-container">
      <h1 className="form-title">SIGN IN</h1>
      <div className="form-body">
        <form onSubmit={handelSubmit}>
          <div>
            <label htmlFor="Enter your email">Enter your email</label> <br />
            <input onBlur={handleEmail} type="email" required />
          </div>
          <label htmlFor="Enter your password">Enter your password</label>{" "}
          <br />
          <input onBlur={handlePassword} type="password" required />
          <p>
            Login <Link to="/">Login</Link>{" "}
          </p>

         <p>{loading ? 'Please wait...' : ''}</p>
          <p>{error}</p>
          <input type="submit" className="submit-btn" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default SingIn;
