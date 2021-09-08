import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
  bg?: string;
  txtTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  loading?: boolean | number | string;
  children: ReactNode;
}

export default function ButtonComponent(props: IProps) {
  return (
    <Button {...props}>
      {props.children}
      {props.loading ? <img src="./images/loading.svg" alt="loading" /> : null}
    </Button>
  );
}
