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

  display: flex;
  flex-direction: column;

  animation: ${fadeIn} 1s ease-in-out;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    line-height: normal;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.txtPrimary};
  }

  figure {
    width: 100%;
    margin-bottom: 35px;
  }

  p {
    font-size: 20px;
  }

  @media screen and (min-width: 1000px) {
    padding: 100px;
  }
`;
