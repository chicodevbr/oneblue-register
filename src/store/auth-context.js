import React, { useEffect, useState } from 'react';
import { endpoint, postRequest, url } from '../api';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (name, password) => {},
  onSignup: (name, password) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInfo === 'ok') {
      setIsLoggedIn(true);
    }
  }, []);

  const signupHandler = async (values) => {
    try {
      const response = await postRequest(
        `${url.base}${endpoint.register}`,
        values
      );
      if (response.data.ok) {
        localStorage.setItem('isLoggedIn', 'ok');
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  const loginHandler = async (values) => {
    try {
      const response = await postRequest(
        `${url.base}${endpoint.login}`,
        values
      );
      if (response.data.ok) {
        localStorage.setItem('isLoggedIn', 'ok');
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onSignup: signupHandler,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
