import React from "react";
import { Link } from "react-router-dom";
import "./signup.css"; // optional if you have styling

function Signup() {
  return (
    <div className="signup-container">
      <fieldset className="signup-box">
        <h3>Create Account</h3>

        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>phone</label>
        <input type="number" placeholder="Enter your phone number" />

        <label>Password</label>
        <input type="password" placeholder="Create password" />

        <Link to="/login"><button>Submit</button></Link>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </fieldset>
    </div>
  );
}

export default Signup;
