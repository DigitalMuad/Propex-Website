import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-highlight">Propex</span>
        </Link>
        <div className="navbar-links">
          <Link to="/properties">Properties</Link>
          {isLoggedIn && <Link to="/add-property">Add Property</Link>}
          <Link to="#contact">Contact</Link>
          {!isLoggedIn ? (
            <Link to="/auth" className="login-button">Login</Link>
          ) : (
            <button 
              className="login-button" 
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.reload();
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
