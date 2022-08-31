import { Nav, StyledLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <Nav>
      <StyledLink to={'/'}>Home</StyledLink>
      <StyledLink to={'/movies'}>Movies</StyledLink>
      <StyledLink to={'/library'}>Library</StyledLink>
    </Nav>
  );
};

export default NavBar;
