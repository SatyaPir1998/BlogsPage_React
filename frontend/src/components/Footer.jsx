import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Address Section */}
        <div className="footer-section">
          <h1 className="footer-logo">IEM Consultancy Services</h1>
          <p style={{ fontSize: "14px" }}>
            Godrej Genesis Building, 15th Floor, Unit No.1502, Sector-V
            <br />
            Block EP & GP, Salt Lake City
            <br />
            Kolkata – 700 091, West Bengal, India.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            {/* <li>
              <Link to="/services">Services</Link>
            </li> */}
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 IEM Consultancy Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
