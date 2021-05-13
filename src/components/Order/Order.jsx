import React, { useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import cns from 'classnames';

import routes from '@config/routes';
import { Checkout, Payment, Confirmation, Recepit, Invoice } from '@components/Order';

const Order = observer(({ ...props }) => {
  return (
    <Switch>
      <Route exact path={routes.ORDER.ROOT}>
        <Checkout />
      </Route>

      <Route exact path={routes.ORDER.PAYMENT}>
        <Payment />
      </Route>

      <Route exact path={routes.ORDER.CONFIRMATION}>
        <Confirmation />
      </Route>

      <Route exact path={routes.ORDER.RECEPIT}>
        <Recepit />
      </Route>

      <Route exact path={routes.ORDER.INVOICE}>
        <Invoice />
      </Route>
    </Switch>
  );
});

export default Order;
