import { ReactElement } from 'react';
import { Container } from './styles';

interface IProps {
  name: string;
}

function HrComponent({ name }: IProps): ReactElement {
  return (
    <Container>
      {name && <span>{name}</span>}
      <hr />
    </Container>
  );
}

export default HrComponent;
