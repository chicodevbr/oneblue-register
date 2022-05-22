import React from 'react';
import { Container } from '../style/GreetingsStyle';
import DefaultPage from '../templates/DefaultPage';

const NotFound = () => {
  return (
    <DefaultPage>
      <Container>
        <h2>404</h2>
        <h4>Page Not Found</h4>
      </Container>
    </DefaultPage>
  );
};

export default NotFound;
