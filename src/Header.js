import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul>
          <li><img src="/Logo.svg" alt="Little Lemon"/></li>
          <li><Link to="/">Main</Link></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;