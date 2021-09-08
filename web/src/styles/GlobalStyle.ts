import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  /* largura do scroll vertical e horizonal*/
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  /* Cor do scroll*/
  ::-webkit-scrollbar-thumb { background: silver; }
  /* Fundo do scroll*/
  ::-webkit-scrollbar-track { background: transparent; }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    position: relative;
    box-sizing: border-box;
    font-size: inherit;
  }

  body {
    font-size: 100%;
    font-family: Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.txtPrimary};
    background-color: ${({ theme }) => theme.colors.bgPrimary};

    ul {
      list-style: none;
    }

    img {
      width: min-content;
      max-width: 100%;
    }

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.85);
      }

      &:active {
        filter: brightness(0.6);
      }
    }

    span,small {
      display: flex;
    }
  }

  .shadow {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.08);
  }
`;

export default GlobalStyle;
