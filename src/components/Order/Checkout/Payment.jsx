import React, { useMemo } from 'react';
import cns from 'classnames';

import CheckoutSteps from './Steps';

const Payment = ({ ...props }) => {
  return (
    <section className="checkout">
      <div className="wrapper">
        <CheckoutSteps />

        <form action="">
          <div className="checkout-wrap">
            <div className="checkout-content">
              <div className="checkout-block checkout-block__big">
                <div className="checkout-choice">
                  <div className="choice-col">
                    <div className="choice-wrap">
                      <input type="radio" name="method" />
                      <div className="choice-item"></div>
                    </div>
                  </div>
                  <div className="choice-col">
                    <div className="choice-wrap">
                      <input type="radio" name="method" />
                      <div className="choice-item"></div>
                    </div>
                  </div>
                  <div className="choice-col">
                    <div className="choice-wrap">
                      <input type="radio" name="method" />
                      <div className="choice-item"></div>
                    </div>
                  </div>
                </div>
                <div className="checkout-row">
                  <div className="checkout-col checkout-col__100">
                    <div className="input-block">
                      <label htmlFor="p-1">Name on card</label>
                      <input id="p-1" type="text" name="text" placeholder="Name on card" />
                    </div>
                  </div>
                  <div className="checkout-col">
                    <div className="input-block">
                      <label htmlFor="p-2">Credit card number</label>
                      <input id="p-2" type="text" name="text" placeholder="Credit card number" />
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__25">
                    <div className="input-block">
                      <label htmlFor="p-3">Expiry date</label>
                      <input id="p-3" type="text" name="text" placeholder=" XX  /  XX " />
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__25">
                    <div className="input-block">
                      <label htmlFor="p-4">CVV</label>
                      <input id="p-4" type="text" name="text" placeholder="XXX" />
                    </div>
                  </div>
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <i className="checkbox-ico"></i>
                  <p>Billing address is different to the shipping address</p>
                </div>
                <div className="checkout-bottom">
                  <a href="#" className="checkout-back">
                    Back
                  </a>
                  <div className="checkout-button">
                    <a href="receipt.html" className="primary-btn">
                      Pay now
                    </a>
                  </div>
                </div>
              </div>
              <div className="checkout-block">
                <div className="checkout-row">
                  <div className="checkout-col checkout-col__100">
                    <div className="input-block">
                      <label htmlFor="a-1">Billing address</label>
                      <div className="input-block__wrap">
                        <input id="a-1" type="text" name="text" placeholder="Billing address" />
                        <i className="hb-ico locate-ico"></i>
                      </div>
                    </div>
                  </div>
                  <div className="checkout-col">
                    <div className="input-block">
                      <label htmlFor="a-2">Billing city</label>
                      <input id="a-2" type="text" name="text" placeholder="City" />
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__25">
                    <div className="input-block">
                      <label htmlFor="a-3">Billing state</label>
                      <select name="text" id="a-3">
                        <option value="">State/Province</option>
                        <option value="">Select title</option>
                      </select>
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__25">
                    <div className="input-block">
                      <label htmlFor="a-4">Billing Zip</label>
                      <select name="text" id="a-4">
                        <option value="">ZIP</option>
                        <option value="">Select title</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="checkout-button">
                  <a href="receipt.html" className="primary-btn">
                    Pay now
                  </a>
                </div>
              </div>
            </div>
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
                    <select name="text">
                      <option value="">Qty: 1</option>
                      <option value="">Qty: 1</option>
                      <option value="">Qty: 1</option>
                    </select>
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
          </div>
        </form>
      </div>
    </section>
  );
};

export default Payment;
