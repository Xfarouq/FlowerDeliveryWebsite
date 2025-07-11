import React, { useState } from 'react';

const AuthModal = ({ onClose, onSuccess, initialMode = "signin" }) => {
  const [isSignUp, setIsSignUp] = useState(initialMode === "signup");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleMode = () => setIsSignUp(!isSignUp);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignUp
      ? 'https://flowerdeliverywebsitee-backend.onrender.com/api/users/signup'
      : 'https://flowerdeliverywebsitee-backend.onrender.com/api/users/login';

    const payload = isSignUp
      ? { name: formData.name, email: formData.email, password: formData.password }
      : { email: formData.email, password: formData.password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Login/Signup response:", data);

      if (!res.ok || !data.token) {
        alert(data.message || 'Authentication failed');
        return;
      }

      localStorage.setItem('token', data.token);
      onSuccess();
      onClose();
    } catch (err) {
      console.error('Auth error:', err);
      alert('Something went wrong during authentication.');
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-btn">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="auth-toggle-text">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={toggleMode} className="auth-toggle-link">
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
