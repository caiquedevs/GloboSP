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

  input {
    width: 100%;
    height: 45px;
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-radius: 5px;
    padding: 0 15px;

    font-weight: normal;
    font-size: 17px;
    line-height: 139.8%;

    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.txtPrimary};
    border-color: ${({ error, theme }) => error && theme.colors.primary};
  }

  span.error {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
