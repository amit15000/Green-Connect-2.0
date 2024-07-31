import React, { useState } from 'react';
import './index.css';
import Footer from "../../Components/Footer.jsx";
import Navbar from "../../Components/Navbar.jsx";

function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (!firstName) {
      errors.firstName = 'First name is required';
    }

    if (!lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit the form to the server
      console.log('Form submitted successfully!');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>CREATE AN ACCOUNT</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email id*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <div className='elements1'>
          <input
            type="checkbox"
            id="newsletter"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
          />
          <label htmlFor="newsletter">
            Sign me up to receive exciting news, fun facts, and positive
            environmental stories!
          </label>
          </div>


        </div>

        <button type="submit">Sign Up</button>
        <span className="login-link"> Returning Donar? <a href="/login"> Login →</a></span>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default CreateAccount;