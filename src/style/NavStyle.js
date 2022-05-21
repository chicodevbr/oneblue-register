import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: var(--default);
  border: 1px solid var(--secondary);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const MenuLink = styled(NavLink)`
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

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  padding: 1rem 0;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LogoutButton = styled.span`
  cursor: pointer;
`;
