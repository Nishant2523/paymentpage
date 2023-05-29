import React from 'react';
import './styles.css';

const PaymentPage = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">EDYODA</div>
        <ul className="navigation">
          <li>
            <a href="#">Programs</a>
            <span className="dropdown-arrow">▼</span>
          </li>
          <li>
            <a href="#">Courses</a>
            <span className="dropdown-arrow">▼</span>
          </li>
        </ul>
        <div className="search-icon"></div>
        <div className="login">Log In</div>
        <div className="join-now">Join Now</div>
      </nav>
      <div className="content">
        <div className="left-section">
          <h1>
            Access curated courses worth{' '}
            <span className="blue-text">18,500</span> at just{' '}
            <span className="blue-text">99</span> rupees per year
          </h1>
          <p>
            <span className="blue-text">100+</span> job relevant courses
            <br />
            <span className="blue-text">20,000+</span> hours of content
            <br />
            <span className="blue-text">Exclusive</span> webinar access
            <br />
            <span className="blue-text">Scholarship</span> worth{' '}
            <span className="blue-text">94,500</span> rupees
            <br />
            <span className="blue-text">Ad free</span> learning experience
          </p>
          <p className="limited-time-offer">Limited Time Offer: ₹18,401</p>
        </div>
        <div className="right-section">
          <div className="numbered-circles">
            <a href="#" className="circle-link active">
              1
            </a>
            <a href="#" className="circle-link">
              2
            </a>
          </div>
          <p>
            <span>Sign up</span> | <span>Subscribe</span>
          </p>
          <h2>Select your Subscription Plan</h2>
          <div className="subscription-box">
            <div className="plan">
              <input type="radio" name="subscription" id="plan1" />
              <label htmlFor="plan1">12 months</label>
              <span className="price">₹99</span>
            </div>
            <div className="plan">
              <input type="radio" name="subscription" id="plan2" />
              <label htmlFor="plan2">6 months</label>
              <span className="price">₹149</span>
            </div>
            <div className="plan">
              <input type="radio" name="subscription" id="plan3" />
              <label htmlFor="plan3">3 months</label>
              <span className="price">₹199</span>
            </div>
          </div>
          <div className="total-amount">
            <p>Subscription Fee: ₹18,500</p>
            <p className="limited-time-offer">Limited Time Offer: ₹18,401</p>
            <p>Total Amount: ₹99</p>
          </div>
          <div className="buttons">
            <button className="cancel-button">Cancel</button>
            <button className="proceed-button">Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
