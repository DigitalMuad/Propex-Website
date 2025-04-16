import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AddPropertyPage from './pages/AddPropertyPage';
import AuthPage from './pages/AuthPage';
import './styles/Navbar.css';
import './styles/HomePage.css';
import './styles/PropertiesPage.css';
import './styles/AddPropertyPage.css';
import './styles/AuthPage.css';
import './App.css';

function App() {
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Navigate to="/auth" />;
    }
    return children;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/add-property" element={
          <ProtectedRoute>
            <AddPropertyPage />
          </ProtectedRoute>
        } />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
