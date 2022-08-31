import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 26px;
`;
export const StyledLink = styled(NavLink)`
  display: block;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;
  transition: color 200ms linear;

  &:hover:not(.active) {
    color: #006dba;
  }

  &.active {
    color: #ffffff;
    background: #006dba;
    border-radius: 10px;
  }
`;
