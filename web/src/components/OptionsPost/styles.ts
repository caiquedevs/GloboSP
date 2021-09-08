import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 20px;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.3);

  button {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.txtPrimary};

    &.btn-edit {
      svg {
        color: ${({ theme }) => theme.colors.primary};
      }

      svg.loading path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }

    &.btn-delete {
      svg {
        color: red;
      }

      svg.loading path {
        fill: red;
      }
    }
    z-index: 10;
  }
`;
