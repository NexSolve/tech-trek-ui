import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Import components
import Header from './components/Header';

// Import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Redirect everything else to Home */}
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/signup" element={<Navigate to="/" />} />
          <Route path="/dashboard" element={<Navigate to="/" />} />
          {/* Optionally you can use more routes if needed */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

// Component to conditionally render the Header
const ConditionalHeader = () => {
  const location = useLocation();
  const showHeader = ["/", "/login", "/signup"].includes(location.pathname);

  return showHeader ? <Header /> : null;
};

export default App;
