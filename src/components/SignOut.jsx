import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./SignOut.css";

const SignOut = () => {
  return (
    <div className="sign-out-container">
      <Link to="/">
        <button className="sign-out-button">Sign Out</button>
      </Link>

      <Link to="/plans">
        <button className="view-plans-button">View Plans</button>
      </Link>

      <div className="image-container">
        <img
          src="https://th.bing.com/th/id/OIP.ETTbWkbQA5_qiI-UspuhjQHaE8?w=254&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Image 1"
          className="image"
        />
        <img
          src="https://th.bing.com/th/id/OIP.Ef0Hb87bP3fMGUi1RaQEwgHaEx?w=260&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Image 2"
          className="image"
        />
        <img
          src="https://th.bing.com/th/id/OIP.zsaWNn9Ut0HDUX_u3XI3mgHaEK?w=263&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Image 3"
          className="image"
        />
        <img
          src="https://th.bing.com/th/id/OIP.1zdsLFspt5ym_cEjMJIMVQHaE7?w=243&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Image 4"
          className="image"
        />
      </div>
    </div>
  );
};

export default SignOut;
