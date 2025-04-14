import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-highlight">Propex</span>
        </Link>
        <div className="navbar-links">
          <Link to="/properties">Properties</Link>
          <Link to="#contact">Contact</Link>
          <Link to="/signin" className="login-button">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
