import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 1180px;
  height: 100%;

  margin: 0 auto;
  padding: 0 20px;
`;

const Container = ({ children }) => {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default Container;
