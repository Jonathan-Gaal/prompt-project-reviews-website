import React from 'react';
import './Navbar.css';
import birdLogo from '../../assets/bird-logo.avif'; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={birdLogo} alt="Bird Logo" className="navbar-logo-img" />
          ReviewSite
        </a>
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
