import { ReactNode } from 'react';
import { Container } from './styles';

interface AsideProps {
  children: ReactNode;
}

function Aside({ children }: AsideProps) {
  return (
    <Container>
      <header>
        <h2>Noticias em destaque</h2>
      </header>

      <div className="body shadow">{children}</div>
    </Container>
  );
}

export default Aside;
