import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { FiPhone } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="seafarer-header">
      <nav className="navbar">
        {/* <div className="nav-left">
          <a href="#" className="search-link">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#ffffff" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span>SEARCH</span>
          </a>
        </div> */}

        <div className="nav-center">
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">BOAT CATEGORIES</Link></li>
            <li><Link to="#">BOAT BUILDING SUPPLIES</Link></li>
          </ul>

          <img src="/assets/logo-2.png" alt="Seafarer Logo" className="logo" />

          <ul className="nav-menu right">
            <li><Link to="#">ABOUT US</Link></li>
            <li><Link to="#">ORDERING INFORMATION</Link></li>
            <li><Link to="#">CONTACT US</Link></li>
          </ul>
        </div>
      </nav>

      
      <div className="nav-icons-fixed">
        <div className="square-icon pink"><FiPhone className="icon" /></div>
        <div className="square-icon white"><FiShoppingCart className="icon" /></div>
      </div>
    </header>
  );
};

export default Header;
