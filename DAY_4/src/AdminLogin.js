import React, { useState } from 'react';
import './adminLogin.css';
import { ToastContainer, toast } from 'react-toastify';

const AdminLogin = () => {
  const [adminLoginId, setAdminLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (adminLoginId === '123456789' && password === '123456789') {
      // Redirect to another page
      window.location.href = '/admin-dashboard';

      // Show toast message
      toast.success('Login successful!');
    } else {
      toast.error('Login unsuccessful!');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="adminLoginId">Admin Login ID:</label>
          <input
            type="text"
            id="adminLoginId"
            value={adminLoginId}
            onChange={(event) => setAdminLoginId(event.target.value)}
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
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;