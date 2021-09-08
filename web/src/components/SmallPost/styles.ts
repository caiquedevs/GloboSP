import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;

  article {
    div.card {
      padding: 30px;

      display: grid;
      grid-template-columns: minmax(0px, 40%) minmax(0px, 60%);
      grid-template-rows: 100%;

      box-shadow: 0 2px 2px 0px rgb(0 0 0 / 12%);
      overflow: hidden;

      div.options {
        display: none;
      }

      &:hover div.options {
        display: flex;
      }

      figure {
        height: 100%;

        display: flex;
        align-items: flex-start;
      }

      small {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.txtSecondary};
      }

      h1 {
        font-family: 'Bebas Neue', cursive;
        font-weight: normal;
        font-size: 24px;
        color: ${({ theme }) => theme.colors.primary};

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        z-index: 10;
      }

      p {
        color: ${({ theme }) => theme.colors.txtSecondary};
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      a {
        margin-top: 10px;
        color: ${({ theme }) => theme.colors.txtPrimary};
        z-index: 10;
      }
    }
  }

  @media screen and (min-width: 1000px) {
  }

  @media screen and (min-width: 0px) and (max-width: 575px) {
    gap: 30px;

    article {
      div.card {
        grid-template-columns: minmax(0px, 100%);
        grid-template-rows: auto 1fr;
        gap: 20px;

        padding-top: 20px;
        border-top: 1px solid ${({ theme }) => theme.colors.cardActive};

        div.text-group {
          padding: 0 25px;
        }
      }
    }
  }
`;
