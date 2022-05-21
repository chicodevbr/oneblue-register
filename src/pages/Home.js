import React from 'react';
import Welcome from '../components/Welcome';
import DefaultPage from '../templates/DefaultPage';

const Home = () => {
  let content;
  content = <Welcome />;
  return <DefaultPage>{content}</DefaultPage>;
};

export default Home;
