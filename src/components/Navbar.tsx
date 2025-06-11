import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Jarvis AI</span>
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/assistant" className="nav-item">
            AI Assistant
          </Link>
          <Link to="/features" className="nav-item">
            Features
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </div>

        <div className="nav-buttons">
          <Link to="/assistant" className="try-button">
            Try Jarvis
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 