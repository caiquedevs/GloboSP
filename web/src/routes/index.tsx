import { ReactElement } from 'react';
import { Switch } from 'react-router-dom';
import routes from './routes';

import PrivateRoute from './Private';

export default function Routes(): ReactElement {
  return (
    <Switch>
      {routes.map((route) => (
        <PrivateRoute key={route.path} exact={route.exact} path={route.path} component={route.component} isPrivate={route.isPrivate} />
      ))}
    </Switch>
  );
}
