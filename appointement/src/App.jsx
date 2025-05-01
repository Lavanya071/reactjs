import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageAppointment from './pages/PageAppointment';
import FindDoctorPage from './pages/FindDoctorPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageAppointment />} />
        <Route path="/find-doctor" element={<FindDoctorPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
