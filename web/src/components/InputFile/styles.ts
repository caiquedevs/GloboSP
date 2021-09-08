import styled from 'styled-components';

interface IProps {
  error: string | number | null | undefined;
}

export const Label = styled.label<IProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 16px;
    line-height: 139.8%;

    color: ${({ theme }) => theme.colors.txtSecondary};
  }

  span.error {
    color: ${({ theme }) => theme.colors.primary};
  }

  div.card {
    cursor: pointer;

    border: 1px solid ${({ theme, error }) => (error ? theme.colors.primary : 'transparent')};

    span {
      color: ${({ theme }) => theme.colors.txtPrimary};
    }

    input[type='file'] {
      display: none;
    }
  }
`;
