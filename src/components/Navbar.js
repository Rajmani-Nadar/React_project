import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><h1><b>JobRinger</b></h1></div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Jobs</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
