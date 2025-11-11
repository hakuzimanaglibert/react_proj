import React from "react";
import { Link } from "react-router-dom";
import "./login.css"; // optional if you want styling

function Login() {
  return (
    <div className="login-container">
      <fieldset className="login-box">
        <h2>Login</h2>

        <label>Email</label>
        <input type="email" placeholder="example@gmail.com" />

        <label>Password</label>
        <input type="password" placeholder="*******" />

        <button>
          <Link to="/products" className="login-link">Login</Link>
        </button>

        <p className="signup">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </fieldset>
    </div>
  );
}

export default Login;
