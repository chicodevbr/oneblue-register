import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import {
  Nav,
  Logo,
  Menu,
  MenuLink,
  LogoutButton,
  MenuHamburger,
} from '../../style/NavStyle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo src="https://oneblue.io/wp-content/uploads/2022/03/oneblue-500-01-01.png" />
      <MenuHamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </MenuHamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        {authCtx.isLoggedIn && <MenuLink to="/about">About</MenuLink>}
        {!authCtx.isLoggedIn && <MenuLink to="/register">Register</MenuLink>}
        {authCtx.isLoggedIn && (
          <LogoutButton
            onClick={() => {
              authCtx.onLogout();
              navigate('/');
            }}
          >
            Logout
          </LogoutButton>
        )}
      </Menu>
    </Nav>
  );
};

export default NavBar;
