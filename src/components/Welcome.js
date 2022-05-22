import React from 'react';
import { Container } from '../style/GreetingsStyle';
import Greetings from './Greetings';

const Welcome = () => {
  return (
    <Container>
      <h1>Welcome to OneBlue</h1>
      <Greetings />
    </Container>
  );
};

export default Welcome;
