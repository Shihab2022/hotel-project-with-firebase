import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SingIn.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handelSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  const handleWidthGoogle = () => {
    signInWithGoogle();
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-container">
      <h1 className="form-title">LOGIN</h1>
      <div className="form-body">
        <form onSubmit={handelSubmit}>
          <div>
            <label htmlFor="Enter your email">Enter your email</label> <br />
            <input onBlur={handleEmail} type="email" required />
          </div>
          <label htmlFor="Enter your password">Enter your password</label>{" "}
          <br />
          <input onBlur={handlePassword} type="password" required />
          <p>{loading ? "Please wait..." : ""}</p>
          <p>{error?.message}</p>
          <input type="submit" className="submit-btn" value="SUBMIT" />
        </form>
      </div>
      <button onClick={handleWidthGoogle} className="google-btn">
        CONTINUE WITH GOOGLE
      </button>
      <p style={{ textAlign: "center" }}>
        New to Ema-John ?
        <Link style={{ color: "red", textDecoration: "none" }} to="/register">
          {" "}
          Create new account
        </Link>{" "}
      </p>
    </div>
  );
};

export default SingIn;
