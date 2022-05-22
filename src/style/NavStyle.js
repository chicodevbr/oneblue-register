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
  z-index: 1;
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
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuHamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: var(--primary);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const LogoutButton = styled.span`
  cursor: pointer;
`;
