import React, { useMemo } from 'react';
import cns from 'classnames';

import CheckoutSteps from './Steps';

const Checkout = ({ ...props }) => {
  return (
    <section className="checkout">
      <div className="wrapper">
        <CheckoutSteps />

        <form action="">
          <div className="checkout-wrap">
            <div className="checkout-content">
              <div className="checkout-block">
                <span className="checkout-subtitle">Personal information</span>
                <div className="checkout-row">
                  <div className="checkout-col">
                    <div className="input-block">
                      <label htmlFor="i-1">Email</label>
                      <input id="i-1" type="email" name="email" placeholder="Enter email" />
                    </div>
                  </div>
                  <div className="checkout-col">
                    <div className="input-block">
                      <label htmlFor="i-2">Confirm email</label>
                      <input id="i-2" type="email" name="email" placeholder="Confirm email" />
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__33">
                    <div className="input-block">
                      <label htmlFor="i-3">Title</label>
                      <select name="text" id="i-3">
                        <option value="">Select title</option>
                        <option value="">Select title</option>
                      </select>
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__33">
                    <div className="input-block">
                      <label htmlFor="i-4">First name</label>
                      <input id="i-4" type="text" name="text" placeholder="Enter First name" />
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__33">
                    <div className="input-block">
                      <label htmlFor="i-5">Last name</label>
                      <input id="i-5" type="text" name="text" placeholder="Enter last name" />
                    </div>
                  </div>
                  <div className="checkout-col">
                    <div className="input-block">
                      <label htmlFor="i-6">Your NPI number</label>
                      <input id="i-6" type="text" name="text" placeholder="Enter NPI number" />
                    </div>
                  </div>
                  <div className="checkout-col">
                    <div className="input-block">
                      <label htmlFor="i-7">Phone number</label>
                      <input id="i-7" type="text" name="text" placeholder="+1 " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout-block">
                <span className="checkout-subtitle checkout-subtitle__mob">Shipping details</span>
                <div className="checkout-row">
                  <div className="checkout-col checkout-col__100">
                    <div className="input-block">
                      <label htmlFor="o-1">Business name</label>
                      <input id="o-1" type="text" name="text" placeholder="Business name" />
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__100">
                    <div className="input-block">
                      <label htmlFor="o-2">Shipping Address</label>
                      <div className="input-block__wrap">
                        <input id="o-2" type="text" name="text" placeholder="Shipping address" />
                        <i className="hb-ico locate-ico"></i>
                      </div>
                    </div>
                  </div>
                  <div className="checkout-col">
                    <div className="input-block">
                      <label htmlFor="o-3">Shipping city</label>
                      <input id="o-3" type="text" name="text" placeholder="City" />
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__25">
                    <div className="input-block">
                      <label htmlFor="o-4">Shipping state</label>
                      <select name="text" id="o-4">
                        <option value="">State/Province</option>
                        <option value="">Select title</option>
                      </select>
                    </div>
                  </div>
                  <div className="checkout-col checkout-col__25">
                    <div className="input-block">
                      <label htmlFor="o-5">Shipping Zip</label>
                      <select name="text" id="o-5">
                        <option value="">ZIP</option>
                        <option value="">Select title</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout-button">
                <a href="checkout.html" className="primary-btn">
                  next
                </a>
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

export default Checkout;
