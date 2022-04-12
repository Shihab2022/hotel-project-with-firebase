import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="hotel-header">
      <h1>MY HOTEL</h1>
      <div className="hotel-navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/bookingRooms">Booking</Link>
        <Link to="/signIn:id">Sign In</Link>
      </div>
    </div>
  );
};

export default Header;
