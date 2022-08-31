import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { CgArrowLeftR } from 'react-icons/cg';

export const DetailWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 2px solid #006dba;
`;

export const Label = styled.span`
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
`;

export const ScoreLabel = styled.span`
  font-weight: 700;
`;

export const IconArrowLeft = styled(CgArrowLeftR)`
  font-size: 20px;
  margin-right: 6px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 500;
  text-transform: uppercase;
  color: #000000;
  transition: color 200ms linear;

  &:hover {
    color: #006dba;
  }
`;

export const Thumb = styled.div`
  width: 300px;
  flex-shrink: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const LinkList = styled.ul`
  display: flex;
  padding: 16px 0;
  gap: 16px;
  border-bottom: 2px solid #006dba;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 4px 8px;
  font-size: 16px;
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
