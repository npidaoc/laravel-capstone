import React, { useState } from 'react';

const CreateAccount = ({ handleSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code
  const [adminCode, setAdminCode] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [adminCodeError, setAdminCodeError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Password validation
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError('Password must be at least 6 characters long and contain at least one number, one uppercase letter, and one lowercase letter.');
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email format.');
      return;
    }

    // Mobile number validation
    if (!/^\+\d{1,3}\s\d{10}$/.test(mobileNumber)) {
      setMobileError('Mobile number must be in the format "+[country code] [number]", e.g., +63 9071597625.');
      return;
    }

    // Admin code validation
    // You may add validation logic for admin code here if needed

    // Call handleSignup function from parent component with form data
    handleSignup({ username, password, email, mobileNumber, adminCode });
  };

  return (
    <form onSubmit={handleFormSubmit}>
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

        <div className="email">
          <label htmlFor="email"><b>Email:</b></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            id="email"
            className="form-control"
          />
        </div>
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

        <div className="mobilenumber">
          <label htmlFor="mobileNumber"><b>Mobile Number:</b></label>
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            required
            id="mobileNumber"
            className="form-control"
          >
            <option value="+1">+1 (US)</option>
            <option value="+91">+91 (India)</option>
            <option value="+63">+63 (Ph)</option>
            {/* Add more options as needed */}
          </select>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            required
            className="form-control mt-1"
          />
        </div>
        {mobileError && <p style={{ color: 'red' }}>{mobileError}</p>}

        <div className="form-group">
          <label htmlFor="adminCode"><b>Admin Code:</b></label>
          <input
            type="password"
            value={adminCode}
            onChange={(e) => setAdminCode(e.target.value)}
            placeholder="Enter admin code"
            required
            id="adminCode"
            className="form-control"
          />
        </div>
        {adminCodeError && <p style={{ color: 'red' }}>{adminCodeError}</p>}
      </div>
      <div className="clearfix mt-3">
        <button type="submit" className="btn btn-primary common-btn" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>Create Account</button>
      </div>
    </form>
  );
};

export default CreateAccount;
