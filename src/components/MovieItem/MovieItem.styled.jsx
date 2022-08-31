import styled from 'styled-components';

export const Item = styled.li`
  width: calc((100% - 4 * 16px) / 5);
  -webkit-box-shadow: 0px 0px 8px 1px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 8px 1px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 8px 1px rgba(204, 204, 204, 1);
`;

export const Content = styled.p`
  font-size: 20px;
  font-weight: 500;
  padding: 12px 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
`;
