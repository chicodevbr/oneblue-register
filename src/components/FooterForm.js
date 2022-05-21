import React from 'react';
import { FooterLink, LinkContainer } from '../style/FormStyle';

const FooterForm = ({ children, linkTo }) => {
  return (
    <LinkContainer>
      <FooterLink to={linkTo}>{children}</FooterLink>
    </LinkContainer>
  );
};

export default FooterForm;
