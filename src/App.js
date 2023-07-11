import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
         //element={<HomePage />}
        />
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />}
          //element={<HomePage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
