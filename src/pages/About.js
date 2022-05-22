import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import DefaultPage from '../templates/DefaultPage';
import Card from '../components/UI/Card';
import {
  Highlight,
  Paragraph,
  AboutContainer,
  Container,
} from '../style/GreetingsStyle';
import { AvatarContainer } from '../style/AvatarContainer';
import { configPunk } from '../helpers/avatarConfig';
import { FaGithub } from 'react-icons/fa';

const avatarConfigWoman = genConfig(configPunk);

const About = () => {
  return (
    <DefaultPage>
      <h1>About</h1>
      <Card>
        <AvatarContainer>
          <Avatar
            style={{ width: '5rem', height: '5rem' }}
            {...avatarConfigWoman}
          />
        </AvatarContainer>
        <AboutContainer>
          <Paragraph>
            Olá, eu sou o{' '}
            <a href="https://www.linkedin.com/in/francisco-j%C3%BAnior-b3071282/">
              <Highlight>Chico</Highlight>
            </a>
            . Esta foi uma aplicação feita para um teste técnico da{' '}
            <a href="https://oneblue.io/">
              <Highlight>OneBlue</Highlight>
            </a>
            .
          </Paragraph>
        </AboutContainer>
        <Container>
          <a href="https://github.com/chicodevbr">
            <FaGithub />
          </a>
        </Container>
      </Card>
    </DefaultPage>
  );
};

export default About;
