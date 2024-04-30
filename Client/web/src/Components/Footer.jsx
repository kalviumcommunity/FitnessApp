import React from 'react';
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About GoFit</h4>
            <p>GoFit is your ultimate fitness companion, helping you achieve your health and wellness goals. With personalized workout plans and expert guidance, we empower you to live a healthier life.</p>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <p>Phone: 9443541516</p>
            <p>Email: info@gofit.com</p>
          </div>
          <div className="col-md-3">
            <h4>Address</h4>
            <p>12, Ambedkar Street</p>
            <p>Pallavaram </p>
            <p>Chennai</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} GoFit All rights reserved.</p>
            <p>Follow us on Social media</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="social-media-icons">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
