import React, { useState } from 'react';
import Login from '../components/Login';
import Welcome from '../components/Welcome';
import DefaultPage from '../templates/DefaultPage';

const Home = () => {
  const [logged, setLogged] = useState(false);

  let content;

  if (logged) {
    content = <Welcome />;
  } else {
    content = <Login />;
  }

  return <DefaultPage>{content}</DefaultPage>;
};

export default Home;
