import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AddPropertyPage from './pages/AddPropertyPage';
import AuthPage from './pages/AuthPage';
import SignInPage from './pages/AuthPage'; // Using same component for now
import './styles/Navbar.css';
import './styles/HomePage.css';
import './styles/PropertiesPage.css';
import './styles/AddPropertyPage.css';
import './styles/AuthPage.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route 
          path="/add-property" 
          element={
            localStorage.getItem('token') 
              ? <AddPropertyPage /> 
              : <Navigate to="/auth?mode=login" />
          } 
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
