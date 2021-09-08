import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const ContentPage = styled.div`
  display: grid;
  grid-template-columns: minmax(0px, 100vw);

  aside {
    display: none;

    div.body div.card-aside {
      & + div {
        border-top: 2px solid ${({ theme }) => theme.colors.cardActive};
      }

      small {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.txtSecondary};
      }

      span {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.txtPrimary};
      }
    }
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: minmax(0px, 65vw) minmax(0px, 35vw);

    aside {
      display: initial;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 60px 35px;

  @media screen and (min-width: 0px) and (max-width: 575px) {
    padding: 20px 0;
  }
`;
