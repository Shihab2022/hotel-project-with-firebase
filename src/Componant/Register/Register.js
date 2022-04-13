import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSign from '../GoogleSign/GoogleSign';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
  
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);

  
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };
    const handleConPassword = (e) => {
      setConPassword(e.target.value);
    };
  
    const handelSubmit = (e) => {
      e.preventDefault();

      if(password !==conPassword) {
          return;
      }
      createUserWithEmailAndPassword(email, password);
    };
  
    console.log(user);
    if (user) {
      navigate(from, { replace: true });
    }
    return (
      <div className='hello'>
        <div className="form-container">
       
        <div className="form-body">
          <form onSubmit={handelSubmit}>
          <h1 className="form-title">Create Account</h1>
            <div>
              <label htmlFor="Enter your email">Enter your email</label> <br />
              <input onBlur={handleEmail} type="email" required />
            </div>
            <label htmlFor="Enter your password">Enter your password</label>{" "}
            <br />
            <input onBlur={handlePassword} type="password" required />
            <br />
            <label htmlFor="Enter your password">Confirm password</label>{" "}
            <br />
            <input onBlur={handleConPassword} type="password" required />
            <p>{loading ? "Please wait..." : ""}</p>
            <p style={{color:'red'}}>{error?.message}</p>
            <input type="submit" className="submit-btn" value="SUBMIT" />
          </form>
        </div>
   
        <p style={{ textAlign: "center" }}>
        Already Have an account ?
          <Link style={{ color: "red", textDecoration: "none" }} to="/signIn">
            {" "}
            Login
          </Link>{" "}
        </p>
        <GoogleSign></GoogleSign>
      </div>
      </div>
    );
};

export default Register;