import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import { formatPrice } from '@helpers';
import { Select } from '@ui';

const Sidebar = ({ quantity, setQuantity, ...props }) => {
  const [, ...qts] = Array(10 + 1).keys();

  const selectOptions = qts.map((x) => ({ value: x, label: `Qty: ${x}` }));
  const pricePerItem = 199.0;

  const getPrice = useMemo(() => {
    const subtotal = quantity.value * pricePerItem;
    const delivery = 0;

    return {
      subtotal: formatPrice(subtotal),
      delivery: delivery > 0 ? formatPrice(delivery) : 'Included',
      total: formatPrice(subtotal + delivery),
    };
  }, [quantity]);

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
          <p>${formatPrice(pricePerItem)} USD</p>
          <div className="checkout-main__row">
            <Select
              variant="small"
              placeholder="Qty"
              options={selectOptions}
              value={quantity}
              onChange={(e) => setQuantity(e)}
            />

            {/* <a href="#" className="primary-btn primary-btn-yellow">
              update
            </a> */}
          </div>
        </div>
      </div>
      <ul>
        <li>
          <span>Subtotal</span>${getPrice.subtotal} USD
        </li>
        <li>
          <span>Shipping</span>
          {getPrice.delivery}
        </li>
      </ul>
      <div className="checkout-total">
        <span>Total</span>
        <b>${getPrice.total} USD</b>
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

Sidebar.propTypes = {
  quantity: PropTypes.shape({ value: PropTypes.number, label: PropTypes.string }),
  setQuantity: PropTypes.function,
};

export default Sidebar;
