import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }to {
    opacity: 1;
  }
`;

interface IArticle {
  img: string;
}

export const Main = styled.main`
  display: grid;

  grid-template-columns: minmax(0px, 100vw);
  grid-template-rows: 100vh 50vh 50vh;
  grid-template-areas:
    'card-one'
    'card-two'
    'card-three';

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid #19202a;

    animation: ${fadeIn} 1s ease-in-out;

    h1 {
      font-family: 'Bebas Neue', cursive;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.white};
      text-shadow: 4px 4px 0px #00000045;
      letter-spacing: 0.03em;
      z-index: 10;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    a {
      font-family: Bebas Neue;
      font-style: normal;
      font-weight: normal;
      line-height: 36px;
      letter-spacing: 0.03em;
      text-decoration-line: underline;

      color: ${({ theme }) => theme.colors.white};
      text-shadow: 4px 4px 30px black;

      z-index: 10;
    }

    div.options {
      display: none;
    }

    &:hover div.options {
      display: flex;
    }
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: minmax(384px, 55vw) minmax(384px, 45vw);
    grid-template-rows: 50vh 50vh;
    grid-template-areas:
      'card-one card-two'
      'card-one card-three';
  }

  @media screen and (min-width: 0px) and (max-width: 575px) {
    article.card-one {
      padding: 40px 30px;
    }
    article.card-two {
      padding: 40px 30px;
    }
    article.card-three {
      padding: 40px 30px;
    }
  }
`;

export const ArticleOne = styled.article<IArticle>`
  grid-area: card-one;
  padding: 70px;

  &::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: 50% 20%;
    background-size: cover;

    filter: brightness(0.7);
  }

  h1 {
    font-size: 40px;
    line-height: 48px;
  }

  a {
    font-size: 30px;
  }

  a:hover {
  }
`;

export const ArticleTwo = styled.article<IArticle>`
  grid-area: card-two;
  padding: 70px 50px;

  &::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: 50% 20%;
    background-size: cover;

    filter: brightness(0.7);
  }

  h1 {
    font-size: 28px;
    line-height: 34px;
  }
  a {
    font-size: 20px;
  }
`;

export const ArticleThree = styled.article<IArticle>`
  grid-area: card-three;
  padding: 70px 50px;

  &::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: 50% 20%;
    background-size: cover;

    filter: brightness(0.7);
  }

  h1 {
    font-size: 28px;
    line-height: 34px;
  }
  a {
    font-size: 20px;
  }
`;
