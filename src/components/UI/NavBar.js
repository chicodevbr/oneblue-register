import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { Nav, Logo, Menu, MenuLink, LogoutButton } from '../../style/NavStyle';

const NavBar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Nav>
      <Logo src="https://oneblue.io/wp-content/uploads/2022/03/oneblue-500-01-01.png" />
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {!authCtx.isLoggedIn && <MenuLink to="/register">Register</MenuLink>}
        {authCtx.isLoggedIn && (
          <LogoutButton
            onClick={() => {
              authCtx.onLogout();
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
