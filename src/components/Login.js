import React, { useContext } from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import Avatar, { genConfig } from 'react-nice-avatar';
import { configMan } from '../helpers/avatarConfig';
import { AvatarContainer } from '../style/AvatarContainer';
import { FormStyle } from '../style/FormStyle';
import Card from './UI/Card';
import Input from './UI/Input';
import { ButtonContainer } from '../style/ButtonStyle';
import Button from './UI/Button';
import FooterForm from './FooterForm';
import { ErrorMessageForm, InputContainer } from '../style/InputStyle';
import AuthContext from '../store/auth-context';

const avatarConfigWoman = genConfig(configMan);

const Login = () => {
  const authCtx = useContext(AuthContext);
  const handleSendSubmit = (values) => {
    authCtx.onLogin(values);
  };

  return (
    <Card>
      <Formik
        initialValues={{
          name: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleSendSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <FormStyle onSubmit={handleSubmit}>
            <AvatarContainer>
              <Avatar
                style={{ width: '5rem', height: '5rem' }}
                {...avatarConfigWoman}
              />
              <h1>Login</h1>
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
            </InputContainer>

            <ButtonContainer>
              <Button primary="primary" type="submit">
                Login
              </Button>
            </ButtonContainer>
          </FormStyle>
        )}
      </Formik>
      <FooterForm linkTo={'/register'}>
        {"Don't have an account? Sign Up"}
      </FooterForm>
    </Card>
  );
};

export default Login;

const loginSchema = yup.object().shape({
  name: yup.string().required('This filed is required'),
  password: yup
    .string()
    .required('Please provide a valid password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
});
