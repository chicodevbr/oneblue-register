import React, { useContext } from 'react';
import Card from './UI/Card';
import Avatar, { genConfig } from 'react-nice-avatar';
import { AvatarContainer } from '../style/AvatarContainer';
import { configWoman2 } from '../helpers/avatarConfig';
import AuthContext from '../store/auth-context';
import { Paragraph, Highlight } from '../style/GreetingsStyle';

const avatarConfigWoman = genConfig(configWoman2);

const Greetings = () => {
  const authCtx = useContext(AuthContext);
  let content;

  if (authCtx.user) {
    content = authCtx.user;
  } else {
    content = 'Stranger';
  }

  return (
    <Card>
      <AvatarContainer>
        <Avatar
          style={{ width: '5rem', height: '5rem' }}
          {...avatarConfigWoman}
        />
      </AvatarContainer>
      <Paragraph>
        Hello <Highlight>{content}</Highlight>! What’s Good Today?
      </Paragraph>
    </Card>
  );
};

export default Greetings;
