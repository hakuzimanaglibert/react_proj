import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./frontend/home";
import Signup from "./frontend/signup";
import Login from "./frontend/login";
import Footer from "./frontend/footer";
import Products from "./frontend/products";

function App() {
  return (
    <BrowserRouter>
      <div className="all">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/products">products</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;