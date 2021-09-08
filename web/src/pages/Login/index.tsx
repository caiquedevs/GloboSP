import { Button, Input, Logo, Row } from 'components';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actionsAuth from 'store/modules/auth/actions';

import { Container } from './styles';

interface LoginProps {}

function Login(props: LoginProps) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleClickLogin = () => {
    dispatch(actionsAuth.loginRequest({ history, phone, setLoading }));
  };

  useEffect(() => {
    dispatch(actionsAuth.logoutRequest());
  }, [dispatch]);

  return (
    <Container>
      <Logo />

      <Row width="304px" margin="17px 0 0 0" direction="column">
        <Input
          inputProps={{
            type: 'text',
            placeholder: 'Número do celular',
            mask: '(00) 0 0000-0000',
            value: phone,
            onChange: handleChangePhone,
          }}
        />

        <Row direction="column" align="center" justify="center" gap="20px">
          <Button type="button" disabled={loading || phone.length < 15} loading={loading ? 1 : 0} bg="primary" margin="15px 0 0 0" onClick={handleClickLogin}>
            Entrar
          </Button>

          <Link to="/">Voltar para o início</Link>
        </Row>
      </Row>
    </Container>
  );
}

export default Login;
