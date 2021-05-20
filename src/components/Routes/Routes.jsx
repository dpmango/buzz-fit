import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, useRouteMatch, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import routes from '@config/routes';
import Layout from '@components/Layout';
import { AuthStoreContext } from '@store/AuthStore';

import { scrollToStart } from '@helpers';

import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';
import {
  Home,
  Calculator,
  Auth,
  Order,
  How,
  Content,
  Device,
  About,
  Contact,
  Terms,
  Privacy,
  Billing,
  Delivery,
  Refund,
  FAQ,
} from '@components/Routes';

const Routes = observer(() => {
  let location = useLocation();

  const { isAuthenticated } = useContext(AuthStoreContext);

  return (
    <Layout variant={'main'}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Switch location={location}>
            <Route exact path={routes.HOME}>
              <Home />
            </Route>

            <Route path={routes.CALCULATOR}>
              <Calculator />
            </Route>

            <Route path={routes.ORDER.ROOT}>
              <Order />
            </Route>

            {/* info routes */}
            <Route path={routes.INFO.HOW}>
              <How />
            </Route>

            <Route path={routes.INFO.CONTENT}>
              <Content />
            </Route>

            <Route path={routes.INFO.DEVICE}>
              <Device />
            </Route>

            {/* static routes */}
            <Route path={routes.STATIC.ABOUT}>
              <About />
            </Route>

            <Route path={routes.STATIC.CONTACT}>
              <Contact />
            </Route>

            <Route path={routes.STATIC.TERMS}>
              <Terms />
            </Route>

            <Route path={routes.STATIC.PRIVACY}>
              <Privacy />
            </Route>

            <Route path={routes.STATIC.BILLING}>
              <Billing />
            </Route>

            <Route path={routes.STATIC.DELIVERY}>
              <Delivery />
            </Route>

            <Route path={routes.STATIC.REFUND}>
              <Refund />
            </Route>

            <Route path={routes.STATIC.FAQ}>
              <FAQ />
            </Route>

            {/* auth-based routes */}
            <ProtectedRoute exact path={routes.ADMIN.ROOT}>
              <h1>Auth protected route</h1>
            </ProtectedRoute>

            <Route path={routes.AUTH.LOGIN}>{isAuthenticated ? <Redirect to={routes.HOME} /> : <Auth />}</Route>

            <Route component={NoMatch} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
});

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToStart(300);

    // push HubSpot page views
    let _hsq = (window._hsq = window._hsq || []);
    setTimeout(() => {
      _hsq.push(['setPath', pathname]);
      _hsq.push(['trackPageView']);
    }, 500);
  }, [pathname]);

  return null;
};

const Router = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes />
  </BrowserRouter>
);

export default Router;
