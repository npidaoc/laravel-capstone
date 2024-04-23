

// Function to set session token in local storage
export const setSessionToken = (token) => {
    localStorage.setItem('sessionToken', token);
  };
  
  // Function to get session token from local storage
  export const getSessionToken = () => {
    return localStorage.getItem('sessionToken');
  };
  
  // Function to remove session token from local storage
  export const removeSessionToken = () => {
    localStorage.removeItem('sessionToken');
  };
  
  // Function to check if user is authenticated
  export const isAuthenticated = () => {
    return !!getSessionToken();
  };
  
  // Function to get JWT from local storage
export const getJWT = () => {
  return localStorage.getItem('jwtToken');
};
