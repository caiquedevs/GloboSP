import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;

  hr {
    flex: 1;
    height: 1px;
    padding: 0;
    margin: 40px 0;

    display: block;

    border: 0;
    border-top: 1px solid ${(props) => props.theme.colors.cardActive};
  }
`;
