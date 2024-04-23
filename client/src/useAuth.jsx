// useAuth.js

import { useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const login = () => {
    // Perform login logic (e.g., authenticate user with API)
    // After successful login, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic (e.g., clear authentication token)
    // After logout, set isAuthenticated to false
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
