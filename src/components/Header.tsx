import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">COCKTAIL WIKI</span>
      </div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "link")}>
          Home
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => (isActive ? "active-link" : "link")}>
          Search
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
