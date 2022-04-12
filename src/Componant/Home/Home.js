import React, { useEffect, useState } from "react";
import Room from "../Room/Room";
import "./Home.css";
const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("hotel-data.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <div className='main'>
      <h1 className="rooms-header">OUR ROOMS</h1>
      <div className="rooms-detail">
        {rooms.map((room) => (
          <Room room={room} key={room.id}></Room>
        ))}
      </div>
    </div>
  );
};

export default Home;
