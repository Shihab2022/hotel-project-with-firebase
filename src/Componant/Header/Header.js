import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
    const [user]=useAuthState(auth)
    const logout = () => {
        signOut(auth);
      };
  return (
    <div className="hotel-header">
      <h1>MY HOTEL</h1>
      <div className="hotel-navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {
          user? <Link to='/bookingRooms'>Booking</Link> :<Link to='/signIn'>Booking</Link>
        }
        {/* <Link to="/bookingRooms">Booking</Link> */}

        {
         user ?  <Link onClick={logout} to="/signIn">Sign Out</Link> :<Link to="/signIn">Sign In</Link>  
        }

      </div>
    </div>
  );
};

export default Header;
