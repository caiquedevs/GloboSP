import styled from 'styled-components';

export const Container = styled.aside`
  width: 100%;
  padding: 60px 35px;

  header {
    padding: 20px;

    border-radius: 5px 5px 0 0;
    background-color: ${({ theme }) => theme.colors.cardActive};

    font-family: 'Bebas Neue', cursive;
    font-weight: normal;
    font-size: 20px;
    letter-spacing: 1px;
  }

  div.body {
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.bgSecondary};
    padding: 10px 15px;
  }
`;
