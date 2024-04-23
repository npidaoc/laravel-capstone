const JWT_KEY = 'jwtToken';

// Function to set JWT in local storage
export const setJWT = (token) => {
    localStorage.setItem(JWT_KEY, token);
};

// Function to get JWT from local storage
export const getJWT = () => {
    return localStorage.getItem(JWT_KEY);
};

// Function to remove JWT from local storage
export const removeJWT = () => {
    localStorage.removeItem(JWT_KEY);
};

// Function to check if user is authenticated
export const isAuthenticated = () => {
    const jwtToken = getJWT();
    console.log("AuthService - isAuthenticated:", !!jwtToken);
    return !!jwtToken;
};
