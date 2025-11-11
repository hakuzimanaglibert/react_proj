import React from "react";
import "./home.css"; 
import Slider from "./slider.jsx";

function Home() {
  return (
    <div className="home-container">
      <h2>WELCOME TO JIBUY ONLINES SHOP🎁✨</h2>
      <Slider />
      <div className="content">
        <div className="home-section">
          <h2 className="home-logo">Jibuy Online Shop🛒</h2>
          <p>Your trusted online marketplace for quality products.</p>
          <div className="button">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
