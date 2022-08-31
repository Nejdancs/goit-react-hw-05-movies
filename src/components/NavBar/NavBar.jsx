import { Nav, StyledLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <Nav>
      <StyledLink to={'/'}>Home</StyledLink>
      <StyledLink to={'/movies'}>Movies</StyledLink>
    </Nav>
  );
};

export default NavBar;
