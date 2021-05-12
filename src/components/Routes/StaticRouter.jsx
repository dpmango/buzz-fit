import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import routes from '@config/routes';
import { About, Contact, Terms, Privacy, Billing, Delivery, Refund } from '@components/Routes';

const StaticRouter = () => {
  return (
    <Switch>
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
    </Switch>
  );
};

export default StaticRouter;
