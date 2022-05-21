import { Nav, Logo, Menu, MenuLink } from '../../style/NavStyle';

const NavBar = () => {
  return (
    <Nav>
      <Logo src="https://oneblue.io/wp-content/uploads/2022/03/oneblue-500-01-01.png" />
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default NavBar;
