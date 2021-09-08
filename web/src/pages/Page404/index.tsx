import { Link } from 'react-router-dom';

import { Container } from './styled';
import { H1, Row } from 'components';

export default function Page404() {
  return (
    <Container>
      <Row height="100vh" align="center" justify="center">
        <Row direction="column" align="center" justify="center">
          <H1>Opss, Erro 404 - Esta pagina não existe</H1>
          <Link to="/">Voltar a pagina inicial</Link>
        </Row>
      </Row>
    </Container>
  );
}
