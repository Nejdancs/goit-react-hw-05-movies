import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 400px;
  font-size: 16px;
  padding: 6px 80px 6px 6px;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: border-color 200ms linear;

  &:focus {
    border-color: #006dba;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border: 2px solid #ccc;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fff;
  color: #006dba;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: 200ms linear;

  Form:focus-within & {
    border-color: #006dba;
  }

  &:hover {
    background-color: #006dba;
    border-color: #006dba;
    color: #fff;
  }
`;
