import React, { useState } from 'react';

function AuthForm({ isLogin, onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/login' : '/api/register';
    const body = isLogin 
      ? { email, password }
      : { username: name, email, password };

    setError('');
    setIsLoading(true);
    fetch(`http://localhost:5000${endpoint}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Authentication failed');
      }
      return res.json();
    })
    .then((data) => {
      if (data.message === 'Login successful' || data.message === 'User created successfully') {
        onSuccess(data);
      } else {
        throw new Error(data.message || 'Authentication failed');
      }
    })
    .catch((err) => {
      console.error('Auth error:', err);
      setError(err.message || 'Authentication failed');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      {!isLogin && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <div className="error-message">{error}</div>}
      <button 
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
      </button>
    </form>
  );
}

export default AuthForm;
