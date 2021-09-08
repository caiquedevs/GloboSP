import { Span } from './styles';

interface Props {
  size?: string;
}

export default function Logo({ size }: Props) {
  return <Span size={size}>globoSP</Span>;
}
