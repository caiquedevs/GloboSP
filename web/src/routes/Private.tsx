import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ isPrivate, ...rest }: any): any {
  const isLoggedIn = useSelector((state: any) => state.authReducer.isLoggedIn);

  // Se a rota é privada e não passou na autenticação
  if (isPrivate && !isLoggedIn) {
    return window.location.assign('/login');
  }

  // Se não for privada retorna uma rota normal
  return <Route {...rest} />;
}
