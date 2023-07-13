import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here
    setIsRegistered(true);
    // Show toast message
    setTimeout(() => {
      setIsRegistered(false);
      history.push('/login');
    }, 3000);
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </div>
        <Link to="/">
          <button type="submit" className="register-button">Register</button>
        </Link>
      </form>
      {isRegistered && (
        <div className="toast-message">
          Registration successful! Redirecting to login page...
        </div>
      )}
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
