// import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";

export function Header() {
  const location = useLocation();
  const isKnoBotPage = location.pathname === "/knobot";

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>Friday</h1>
          <span className="tagline">Feel Like Iron Mans</span>
        </Link>
        <nav className="navigation">
          <Link to="/">About Us</Link>
          <Link to="/knobot" className={isKnoBotPage ? "active" : ""}>
            Friday
          </Link>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
