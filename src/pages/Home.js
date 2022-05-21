import React, { useContext } from 'react';
import Login from '../components/Login';
import Welcome from '../components/Welcome';
import AuthContext from '../store/auth-context';
import DefaultPage from '../templates/DefaultPage';

const Home = () => {
  const authCtx = useContext(AuthContext);

  let content;

  if (authCtx.isLoggedIn) {
    content = <Welcome />;
  } else {
    content = <Login />;
  }

  return <DefaultPage>{content}</DefaultPage>;
};

export default Home;
