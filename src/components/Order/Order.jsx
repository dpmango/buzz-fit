import React, { useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import cns from 'classnames';

import routes from '@config/routes';
import { Checkout, Confirmation } from '@components/Order';

const Order = observer(({ ...props }) => {
  return (
    <Switch>
      <Route exact path={routes.ORDER.ROOT}>
        <Checkout />
      </Route>

      <Route path={routes.ORDER.CONFIRMATION}>
        <Confirmation />
      </Route>
    </Switch>
  );
});

export default Order;
