import React from 'react';
import DefaultPage from '../templates/DefaultPage';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <DefaultPage>
      <RegisterForm element="register" />
    </DefaultPage>
  );
};

export default Register;
