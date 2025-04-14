import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuthSuccess = (data) => {
    // Store user data
    localStorage.setItem('user', JSON.stringify(data.user));
    // Redirect to home page
    navigate('/');
    // Refresh to update navbar
    window.location.reload();
  };

  return (
    <div className="auth-page">
      <AuthForm isLogin={isLogin} onSuccess={handleAuthSuccess} />
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
  );
}

export default AuthPage;
