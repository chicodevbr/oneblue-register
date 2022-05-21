import React from 'react';
import DefaultPage from '../templates/DefaultPage';
import Form from '../components/Form';

const Register = () => {
  return (
    <DefaultPage>
      <h1>Register</h1>
      <Form element="register" />
    </DefaultPage>
  );
};

export default Register;
