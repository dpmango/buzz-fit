import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { observer } from 'mobx-react';

import routes from '@config/routes';
import Layout from '@components/Layout';
import { AuthStoreContext } from '@store/AuthStore';

import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';
import StaticRouter from './StaticRouter';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Order from './Pages/Order';

const Routes = observer(() => {
  const location = useRouteMatch(routes.ADMIN.ROOT);
  const { isAuthenticated } = useContext(AuthStoreContext);

  return (
    <Layout variant={!location ? 'main' : 'admin'}>
      <Switch>
        <Route exact path={routes.HOME}>
          <Home />
        </Route>

        <Route path={routes.ORDER.ROOT}>
          <Order />
        </Route>

        <Route path={routes.STATIC.ORDER}>
          <StaticRouter />
        </Route>

        {/* <ProtectedRoute exact path={routes.PERSONAL}>
          <PERSONAL />
        </ProtectedRoute> */}

        <Route path={routes.AUTH.LOGIN}>{isAuthenticated ? <Redirect to={routes.HOME} /> : <Auth />}</Route>

        <Route component={NoMatch} />
      </Switch>
    </Layout>
  );
});

const Router = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default Router;
