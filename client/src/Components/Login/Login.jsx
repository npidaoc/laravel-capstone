import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); // Access navigation function

  // Function to reset form fields
  const resetForm = () => {
    setUsername('');
    setPassword('');
    setPasswordError('');
  };

  useEffect(() => {
    // Clear form fields when the component mounts
    resetForm();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Fetch admin credentials from the API
      const response = await fetch('http://127.0.0.1:8000/api/admin-credentials');
      if (!response.ok) {
        throw new Error('Failed to fetch admin credentials');
      }
      
      const { username: defaultUsername, password: defaultPassword } = await response.json();
  
      console.log('Default Username:', defaultUsername);
      console.log('Default Password:', defaultPassword);
  
      // Check if entered username and password match the default admin credentials
      if (username === defaultUsername && password === defaultPassword) {
        // Redirect to AdminDashboard upon successful login
        navigate('/admin');
      } else {
        // Handle incorrect credentials
        setPasswordError('Incorrect username or password');
      }
    } catch (error) {
      console.error('Error fetching admin credentials:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="container d-flex align-items-center justify-content-center vh100">
        <div className="modal-content">
          <h2 className="title">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="container">
              <div className="username">
                <label htmlFor="username"><b>Username:</b></label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                  id="username"
                />
              </div>

              <div className="password">
                <label htmlFor="password"><b>Password:</b></label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  id="password"
                />
              </div>

              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>
            <div className="clearfix mt-3">
              <button type="submit" className="btn btn-primary common-btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>Login</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-menu">
          <li><a href="/">HOME</a></li>
          <li><span>|</span></li>
          <li><a href="/terms">TERMS</a></li>
          <li><span>|</span></li>
          <li><a href="/privacy">PRIVACY</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Login;


