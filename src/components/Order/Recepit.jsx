import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import routes from '@config/routes';

const Recepit = observer(({ ...props }) => {
  return (
    <section className="thankYou">
      <div className="wrapper">
        <div className="thankYou-top">
          <h1 className="thankYou-title">Thank you for your order</h1>
          <span className="thankYou-subtitle">Access this receipt and more in the physican app</span>
        </div>
        <div className="thankYou-wrap">
          <div className="thankYou-main">
            <div>
              <span>Order #</span>
              <b>47989</b>
            </div>
          </div>
          <div className="thankYou-row">
            <div className="thankYou-col">
              <span>Date</span>
              <b>March 27, 2021</b>
            </div>
            <div className="thankYou-col">
              <span>Payment</span>
              <b>CC * 4444</b>
            </div>
            <div className="thankYou-col">
              <span>Total</span>
              <b>$199.00</b>
            </div>
            <Link to={routes.ORDER.INVOICE} className="primary-btn">
              invoice
            </Link>
          </div>
          <div className="thankYou-info">
            <span>1 X Buzz Fit Box Service</span>
            <b>$199.00</b>
          </div>
        </div>
        <div className="thankYou-bottom">
          <a href="https://app.buzz.fit/" className="primary-btn">
            Access my account
          </a>
          <p>Access details have been sent to your email </p>
        </div>
      </div>
    </section>
  );
});

export default Recepit;
