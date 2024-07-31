// src/Login.js
import React, { useState } from 'react';
import './index.css';
import Navbar from "../../Components/Navbar.jsx";
import Footer from "../../Components/Footer.jsx";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Login with', { username, password });
  };

  return (
    <>
    <Navbar/>
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p className="forgot-password">Forgot Password?</p>
      </form>
      <p className="switch-form">
        Don't have an account? <a href='/createaccount' className="switch-button">Sign Up</a>
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default Login;

