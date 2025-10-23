import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-about">
          <img src="/assets/logo.png" alt="Clark Craft Logo" className="logo-1" />
          <p>
            Since 1957, Clark Craft has been the trusted source for high-quality boat plans, kits, and boatbuilding supplies. We're dedicated to empowering builders of all skill levels to create the boat of their dreams.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        
        <div className="footer-column">
          <h3>OUR COMPANY</h3>
          <ul>
            <li><a href="#">Boat Plans</a></li>
            <li><a href="#">Boatbuilding Supplies</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Customer Testimonials</a></li>
            <li><a href="#">Builder's Blog</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h3>CONTACT DETAILS</h3>
          <p>(800) 223-5452</p>
          <p>Mon - Sat, 9:00 AM - 5:00 PM</p>
          <p>1234 River Road, Buffalo, NY 14228, USA</p>
          <p>info@clarkcraft.com</p>
        </div>

        
        <div className="footer-column">
          <h3>JOIN OUR BUILDER'S LIST</h3>
          <p>
            Subscribe to our newsletter to get updates on new boat plans, exclusive promotions, and expert boatbuilding tips.
          </p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your Email..." />
            <button type="submit">➝</button>
          </form>
        </div>
      </div>

      
      <div className="footer-bottom">
        © 2025 Clarkcraft. All Rights Reserved. &nbsp;
        <a className="link1" href="#">Privacy Policy</a> | <a className="link2" href="#">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
