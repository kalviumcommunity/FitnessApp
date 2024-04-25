// Membership.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Membership.css";

function Membership() {
  return (
    <div>
      <h2>Membership Plans</h2>
      <div className="membership-details">
        <div className="plan">
          <h3>Basic Plan</h3>
          <p>Access to basic features</p>
          <p>Monthly subscription: ₹ 499</p>
          <Link to="/Subscribe"> {/* Link to the Subscribe component */}
            <button>Subscribe Now</button>
          </Link>
        </div>
        <div className="plan">
          <h3>Premium Plan</h3>
          <p>Access to premium features</p>
          <p>Monthly subscription: ₹ 999</p>
          <Link to="/Subscribe"> {/* Link to the Subscribe component */}
            <button>Subscribe Now</button>
          </Link>
        </div>
        <div className="plan">
          <h3>Platinum Plan</h3>
          <p>Access to all features</p>
          <p>Monthly subscription: ₹ 1499</p>
          <Link to="/Subscribe"> {/* Link to the Subscribe component */}
            <button>Subscribe Now</button>
          </Link>
        </div>
      </div>
      <p className="promotion">Limited time offer: Get 20% off on annual subscription!</p>
    </div>
  );
}

export default Membership;
