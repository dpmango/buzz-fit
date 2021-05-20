import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { Select } from '@ui';

const Sidebar = ({ ...props }) => {
  const titleSelectOptions = [{ value: 1, label: 'Qty: 1' }];

  return (
    <div className="checkout-sidebar">
      <h2 className="checkout-title">order summary</h2>
      <div className="checkout-main">
        <div className="checkout-main__img">
          <img src="/img/checkout/img-3-min.png" alt="" />
        </div>
        <div className="checkout-main__info">
          <span className="checkout-main__title">Buzz Fit Box Service</span>
          <p>Refundable deposit</p>
          <p>$199.00 USD</p>
          <div className="checkout-main__row">
            <Select
              placeholder="Qty: 1"
              options={titleSelectOptions}
              value={quantiry}
              onChange={(e) => setQuantity(e)}
            />

            <a href="#" className="primary-btn primary-btn-yellow">
              update
            </a>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <span>Subtotal</span>
          $199.00 USD
        </li>
        <li>
          <span>Shipping</span>
          Included
        </li>
      </ul>
      <div className="checkout-total">
        <span>Total</span>
        <b>$199.00 USD</b>
      </div>
      <div className="checkout-logos">
        <div className="checkout-logo">
          <img src="/img/checkout/img-1-min.png" alt="" />
        </div>
        <div className="checkout-logo">
          <img src="/img/checkout/img-2-min.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
