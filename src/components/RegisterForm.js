import React, { useContext, useEffect } from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import Avatar, { genConfig } from 'react-nice-avatar';
import { configWoman } from '../helpers/avatarConfig';
import { AvatarContainer } from '../style/AvatarContainer';
import { FormStyle } from '../style/FormStyle';
import Card from './UI/Card';
import Input from './UI/Input';
import { ButtonContainer } from '../style/ButtonStyle';
import Button from './UI/Button';
import FooterForm from './FooterForm';
import { ErrorMessageForm, InputContainer } from '../style/InputStyle';
import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';

const avatarConfigWoman = genConfig(configWoman);

const RegisterForm = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSendSubmit = (values) => {
    authCtx.onSignup(values);
  };

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      navigate('/');
    }
  }, [authCtx.isLoggedIn, navigate]);

  return (
    <Card>
      <Formik
        initialValues={{
          name: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerSchema}
        onSubmit={handleSendSubmit}
      >
        {({ values, handleChange, handleSubmit, resetForm }) => (
          <FormStyle onSubmit={handleSubmit}>
            <AvatarContainer>
              <Avatar
                style={{ width: '5rem', height: '5rem' }}
                {...avatarConfigWoman}
              />
              <h1>Register</h1>
            </AvatarContainer>
            <InputContainer>
              <Input
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage component={ErrorMessageForm} name="name" />
              <Input
                label="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage component={ErrorMessageForm} name="password" />

              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <ErrorMessage
                component={ErrorMessageForm}
                name="confirmPassword"
              />
            </InputContainer>
            <ButtonContainer>
              <Button primary="primary" type="submit">
                Sign up
              </Button>
            </ButtonContainer>
          </FormStyle>
        )}
      </Formik>
      <FooterForm linkTo={'/'}>
        {'Or login if you already have an account!'}
      </FooterForm>
    </Card>
  );
};

export default RegisterForm;

const registerSchema = yup.object().shape({
  name: yup.string().required('This filed is required'),
  password: yup
    .string()
    .required('Please provide a valid password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
