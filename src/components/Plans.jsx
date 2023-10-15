import React from 'react';
import './Plans.css';
import {Link} from 'react-router-dom';

const Plans = () => {
  return (

    
    
    <div className="plans-container">
      <h2>Choose a Plan</h2>
      <div className="plan-option" id="free-plan">
        <h3>Free Plan</h3>
        <p>Basic features for free</p>
        <Link to="/SignOut">
        <button>Choose</button>
        </Link>
      </div>
      
      <div className="plan-option" id="premium-plan">
        <h3>Premium Plan</h3>
        <ul>
            <li>Customizable features like messages and banners, themes</li>
            <li>Admin and support features</li>
            <li>Analytics dashboard</li>
        </ul>
        <p>Rs. 200 per month</p>
        <button>Choose</button>
      </div>
    </div>
  );
};

export default Plans;
