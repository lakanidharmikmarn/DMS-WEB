import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';
import OtpVerification from './pages/auth/otp-verification/OtpVerification';
import NewPassword from './pages/auth/new-password/NewPassword';
import VerifiedSuccessful from './pages/auth/verified-successful/VerifiedSuccessful';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/verified-successful" element={<VerifiedSuccessful />} />
      </Routes>
    </Router>
  );
}

export default App;
