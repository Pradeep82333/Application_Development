import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewLoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic or authentication here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="login-label">Email:</label>
            <input
              type="email"
              id="email"
              className="login-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">Password:</label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Link to="/home">
            <button type="submit">Login</button>
          </Link>
        </form>
      </div>
      <p>
        Don't have an account? <Link to="/register" style={{ color: 'blue' }}>Register</Link>
      </p>
      <p>
        Admin login? <Link to="/adminlogin" style={{ color: 'blue' }}>Admin Login</Link>
      </p>
    </div>
  );
};

export default Login;
