import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SingIn.css";
import {
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import GoogleSign from "../GoogleSign/GoogleSign";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  console.log(user)
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className='hello'>
 <div className="form-container">
  
  <div className="form-body">

    <form onSubmit={handelSubmit}>
    <h1 className="form-title">LOGIN</h1>
      <div>
        <label htmlFor="Enter your email">Enter your email</label> <br />
        <input onBlur={handleEmail} type="email" required />
      </div>
      <label htmlFor="Enter your password">Enter your password</label>{" "}
      <br />
      <input onBlur={handlePassword} type="password" required />
      <p>{loading ? "Please wait..." : ""}</p>
      <p style={{color:'red'}}>{error?.message ? error?.message+'Please Create an account' :''}</p>
      <input type="submit" className="submit-btn" value="LOGIN" />

     
    </form>
  </div>
  <p style={{ textAlign: "center" }}>
    New to Ema-John ?
    <Link style={{ color: "red", textDecoration: "none" }} to="/register">
      {" "}
      Create new account
    </Link>{" "}
  </p>
  <GoogleSign></GoogleSign>
</div>
    </div>
   
  );
};

export default SingIn;
