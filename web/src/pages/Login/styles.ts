import styled, { keyframes } from 'styled-components';

const toBottom = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, -60px)
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px)
  }
`;

const toRight = keyframes`
  from {
    opacity: 0;
    transform: translate(-60px, 0px)
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px)
  }
`;

const toLeft = keyframes`
  from {
    opacity: 0;
    transform: translate(60px, 0px)
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px)
  }
`;

const toTop = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, 60px)
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px)
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    animation: ${toBottom} 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  input {
    animation: ${toTop} 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  button {
    animation: ${toTop} 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  a {
    color: ${({ theme }) => theme.colors.txtSecondary};
    text-decoration: none;
    animation: ${toTop} 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;
