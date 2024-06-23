import React from "react";
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/booking');
  };

  return (
    <main className="main">
      <div className="left-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served wioth a modern twist.</p>
        <button className="menu-button" onClick={handleReservationClick}>Reserve a Table</button>
      </div>
      <div className="right-section">
        <img src="/restaurantfood.jpg" alt="Restaurant Food"/>
      </div>
    </main>
  );
};

export default Main;