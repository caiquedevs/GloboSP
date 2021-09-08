import styled from 'styled-components';

interface IProps {
  error: string | number | null | undefined;
}

export const Label = styled.label<IProps>`
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
`;

export const Input = styled.textarea<IProps>`
  width: 100%;
  height: min-content;
  min-height: 150px;
  padding: 15px;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  resize: vertical;

  border: 1px solid ${({ theme, error }) => (error ? theme.colors.primary : 'transparent')};

  border-radius: 5px;
  color: ${({ theme }) => theme.colors.txtPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};
`;
