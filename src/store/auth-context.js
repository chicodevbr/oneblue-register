import React, { useEffect, useState } from 'react';

import { endpoint, postRequest, url } from '../api';
import { capitalize } from '../helpers/functions';

const AuthContext = React.createContext({
  isLoggedIn: false,
  user: '',
  error: null,
  onLogout: () => {},
  onLogin: (name, password) => {},
  onSignup: (name, password) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState('');

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

        setUser(capitalize(response.data.user.name));
        setIsLoggedIn(true);
      }
    } catch (error) {
      setError(error.message);
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
        setUser(capitalize(response.data.login));
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      return error.message;
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setUser('');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        user: user,
        error: error,
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
