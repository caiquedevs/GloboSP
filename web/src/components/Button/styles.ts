import styled from 'styled-components';

interface IProps {
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  bg?: string;
  txtTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  loading?: boolean | number | string;
}

export const Button = styled.button<IProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 10px;

  user-select: none;
  transition: 0.3s filter;

  border-radius: 5px;
  border: none;

  background-color: ${({ bg, theme }: any) => (bg ? theme.colors[bg] : 'transparent')};

  font-weight: 600;
  font-size: 16px;
  line-height: 139.8%;
  text-transform: ${(props) => props.txtTransform};

  color: #ffffff;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(0.6);
  }

  &:disabled {
    background-color: silver;
  }
`;

Button.defaultProps = {
  width: '100%',
  height: '45px',
  padding: '0px',
  margin: '0px',
  txtTransform: 'capitalize',
};
