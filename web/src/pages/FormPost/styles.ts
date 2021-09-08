import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  padding: 100px 30px 30px 30px;

  animation: ${fadeIn} 1s ease-in-out;

  @media screen and (min-width: 1000px) {
    padding: 100px;
  }
`;
