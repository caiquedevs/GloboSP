import styled, { keyframes } from 'styled-components';

interface IMenu {
  open: boolean;
}

interface IContainer {
  scroll?: boolean;
}

const animateHeaderBar = keyframes`
  from {
    transform: translate(0px, -20px);
  }
  to {
    transform: translate(0px, 0px);
  }
`;

export const Container = styled.header<IContainer>`
  width: 100%;
  height: 22px;

  display: flex;
  align-items: center;

  z-index: 100;

  nav {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      color: ${({ theme }) => theme.colors.white};
    }

    div.row-logo {
      display: none;
    }
  }

  nav.fixed {
    width: 100%;
    height: 70px;
    padding: 0 30px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    background-color: ${({ theme }) => theme.colors.bgSecondary};
    animation: ${animateHeaderBar} 0.2s ease-out forwards;

    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.08);

    svg {
      color: ${({ theme }) => theme.colors.txtPrimary};
    }

    div.row-logo {
      display: flex;
    }
  }
`;

export const Menu = styled.div<IMenu>`
  min-width: 300px;
  height: auto;

  position: absolute;
  top: 40px;

  border-radius: 0 5px 5px 5px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  animation: ${animateHeaderBar} 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};

  div.card a {
    text-decoration: none;
    text-shadow: none;
    font-size: 16px !important;
    line-height: 36px;
    font-family: Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.txtPrimary};
  }
`;
