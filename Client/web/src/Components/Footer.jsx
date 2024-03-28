import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About GoFit</h4>
            <p>GoFit is your ultimate fitness companion, helping you achieve your health and wellness goals. With personalized workout plans, nutrition tracking, and expert guidance, we empower you to live a healthier life.</p>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <p>Phone: 9443541516</p>
            <p>Email: info@gofit.com</p>
          </div>
          <div className="col-md-3">
            <h4>Address</h4>
            <p>12, AmbetkarStreet</p>
            <p>pallavaram </p>
            <p>chennai</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr />
            <p>&copy; {new Date().getFullYear()} GoFit All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
