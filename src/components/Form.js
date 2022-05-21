import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import { AvatarContainer } from '../style/AvatarContainer';
import { FormStyle } from '../style/FormStyle';
import Card from './UI/Card';
import Input from './UI/Input';
import { configWoman } from '../helpers/avatarConfig';
import { Formik } from 'formik';
import { ButtonContainer } from '../style/ButtonStyle';
import Button from './UI/Button';

const avatarConfigWoman = genConfig(configWoman);

const Form = (props) => {
  const handleSendSubmit = () => {};

  return (
    <Card>
      <Formik
        initialValues={{
          name: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSendSubmit}
      >
        {({ values, handleChange, handleSubmit, resetForm }) => (
          <FormStyle onSubmit={handleSubmit}>
            <AvatarContainer>
              <Avatar
                style={{ width: '5rem', height: '5rem' }}
                {...avatarConfigWoman}
              />
            </AvatarContainer>
            <Input
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
            />
            <ButtonContainer>
              <Button>Cancel</Button>
              <Button primary="primary" type="submit">
                Send
              </Button>
            </ButtonContainer>
          </FormStyle>
        )}
      </Formik>
    </Card>
  );
};

export default Form;
