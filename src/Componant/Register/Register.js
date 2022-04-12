import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
  
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
  
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
    const handleWidthGoogle = () => {
      signInWithGoogle();
    };
    console.log(user);
    if (user) {
      navigate(from, { replace: true });
    }
    return (
        <div className="form-container">
        <h1 className="form-title">Create Account</h1>
        <div className="form-body">
          <form onSubmit={handelSubmit}>
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
        <button onClick={handleWidthGoogle} className="google-btn">
          CONTINUE WITH GOOGLE
        </button>
        <p style={{ textAlign: "center" }}>
          New to Ema-John ?
          <Link style={{ color: "red", textDecoration: "none" }} to="/signIn:id">
            {" "}
            Create new account
          </Link>{" "}
        </p>
      </div>
    );
};

export default Register;