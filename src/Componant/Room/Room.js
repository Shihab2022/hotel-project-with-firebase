import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css'
const Room = ({room}) => {
    const {name,picture,about}=room 
    return (
        <div className="room">
             <img src={picture} alt="hotelImage" />
       <div className="details">
       <h2>{name}</h2>
           <p>{about.slice(0,300)}</p>
          <Link  to='/signIn'>Booking</Link>
       </div>
        </div>
    );
};

export default Room;