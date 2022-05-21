import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormStyle = styled.form`
  width: 100%;
`;

export const FooterLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: var(--grey);
  transition: all 0.3s ease-in;
  font-size: 1rem;
  &:hover {
    color: var(--primary);
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
