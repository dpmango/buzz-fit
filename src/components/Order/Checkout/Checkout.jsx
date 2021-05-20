import React, { useState, useMemo } from 'react';
import cns from 'classnames';

import { scrollToStart } from '@helpers';
import { Select, Input } from '@ui';

import CheckoutSteps from './Steps';
import CheckoutSidebar from './Sidebar';

const Checkout = ({ ...props }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [emailRepeat, setEmailRepeat] = useState('');
  const [title, setTitle] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [npiNumber, setNpiNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingState, setShippingState] = useState(null);
  const [shippingZip, setShippingZip] = useState(null);

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [billingIsShipping, setBillingIsShipping] = useState(false); // TODO checkbox
  const [billingAddress, setBillingAddress] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingState, setBillingState] = useState(null);
  const [billingZip, setBillingZip] = useState(null);

  const [quantity, setQuantity] = useState({ value: 1, label: 'Qty: 1' });

  const titleSelectOptions = [
    { value: 'mr', label: 'Mr.' },
    { value: 'ms', label: 'Ms.' },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
      scrollToStart(300);
    } else if (step === 2) {
    }
  };

  return (
    <section className="checkout">
      <div className="wrapper">
        <CheckoutSteps activeStep={step} />

        <div className="checkout-wrap">
          <div className="checkout-content">
            {step === 1 && (
              <form action="" onSubmit={handleFormSubmit}>
                <div className="checkout-block">
                  <span className="checkout-subtitle">Personal information</span>
                  <div className="checkout-row">
                    <div className="checkout-col">
                      <Input
                        value={email}
                        label="Email"
                        placeholder="Enter email"
                        type="email"
                        onChange={(v) => setEmail(v)}
                      />
                    </div>
                    <div className="checkout-col">
                      <Input
                        value={emailRepeat}
                        label="Confirm email"
                        placeholder="Confirm email"
                        type="email"
                        onChange={(v) => setEmailRepeat(v)}
                      />
                    </div>
                    <div className="checkout-col checkout-col__33">
                      <Select
                        label="Title"
                        placeholder="Mr./Mrs"
                        options={titleSelectOptions}
                        value={title}
                        onChange={(e) => setTitle(e)}
                      />
                    </div>
                    <div className="checkout-col checkout-col__33">
                      <Input
                        value={firstName}
                        label="First name"
                        name="first_name"
                        placeholder="Enter First name"
                        type="text"
                        onChange={(v) => setFirstName(v)}
                      />
                    </div>
                    <div className="checkout-col checkout-col__33">
                      <Input
                        value={lastName}
                        label="Last name"
                        placeholder="Enter Last name"
                        type="text"
                        onChange={(v) => setLastName(v)}
                      />
                    </div>
                    <div className="checkout-col">
                      <Input
                        value={npiNumber}
                        label="Your NPI number"
                        placeholder="Enter NPI number"
                        type="text"
                        onChange={(v) => setNpiNumber(v)}
                      />
                    </div>
                    <div className="checkout-col">
                      <Input
                        value={phone}
                        label="Phone number"
                        placeholder="+1 "
                        type="tel"
                        onChange={(v) => setPhone(v)}
                      />
                    </div>
                  </div>
                </div>

                <div className="checkout-block">
                  <span className="checkout-subtitle checkout-subtitle__mob">Shipping details</span>
                  <div className="checkout-row">
                    <div className="checkout-col checkout-col__100">
                      <Input
                        value={businessName}
                        label="Business name"
                        placeholder="Business name"
                        type="text"
                        onChange={(v) => setBusinessName(v)}
                      />
                    </div>
                    <div className="checkout-col checkout-col__100">
                      <Input
                        value={shippingAddress}
                        label="Shipping Address"
                        placeholder="Shipping address"
                        type="text"
                        icon="locate-ico"
                        onChange={(v) => setShippingAddress(v)}
                      />
                    </div>
                    <div className="checkout-col">
                      <Input
                        value={shippingCity}
                        label="Shipping City"
                        placeholder="City"
                        type="text"
                        onChange={(v) => setShippingCity(v)}
                      />
                    </div>
                    <div className="checkout-col checkout-col__25">
                      <Select
                        label="Shipping state"
                        placeholder="State/Province"
                        options={titleSelectOptions}
                        value={shippingState}
                        onChange={(e) => setShippingState(e)}
                      />
                    </div>
                    <div className="checkout-col checkout-col__25">
                      <Select
                        label="Shipping Zip"
                        placeholder="ZIP"
                        options={titleSelectOptions}
                        value={shippingZip}
                        onChange={(e) => setShippingZip(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="checkout-button">
                  <button type="submit" className="primary-btn">
                    next
                  </button>
                </div>
              </form>
            )}
            {step === 2 && (
              <form action="" onSubmit={handleFormSubmit}>
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
                      <Input
                        value={cardName}
                        label="Name on card"
                        placeholder="Name on card"
                        type="text"
                        onChange={(v) => setCardName(v)}
                        name="ccname"
                        autocomplete="cc-name"
                        required
                      />
                    </div>
                    <div className="checkout-col">
                      <Input
                        value={cardNumber}
                        label="Credit card number"
                        placeholder="Credit card number"
                        type="text"
                        onChange={(v) => setCardNumber(v)}
                        inputMode="numeric"
                        pattern="[0-9\s]{13,19}"
                        name="cardnumber"
                        autocomplete="cc-number"
                        required
                      />
                    </div>
                    <div className="checkout-col checkout-col__25">
                      <Input
                        value={cardExp}
                        label="Expiry date"
                        placeholder="XX / XX"
                        type="text"
                        onChange={(v) => setCardExp(v)}
                        name="cc-exp"
                        autocomplete="cc-exp"
                        required
                      />
                    </div>
                    <div className="checkout-col checkout-col__25">
                      <Input
                        value={cardCvc}
                        label="CVV"
                        placeholder="XXX"
                        type="text"
                        onChange={(v) => setCardCvc(v)}
                        name="cc-cvc"
                        autocomplete="cc-cvc"
                        required
                      />
                    </div>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <i className="checkbox-ico"></i>
                    <p>Billing address is different to the shipping address</p>
                  </div>
                  <div className="checkout-bottom">
                    <a href="#" onClick={() => setStep(1)} className="checkout-back">
                      Back
                    </a>
                    <div className="checkout-button">
                      <button type="submit" className="primary-btn">
                        Pay now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="checkout-block">
                  <div className="checkout-row">
                    <div className="checkout-col checkout-col__100">
                      <Input
                        value={billingAddress}
                        label="Billing Address"
                        placeholder="Billing address"
                        type="text"
                        icon="locate-ico"
                        onChange={(v) => setBillingAddress(v)}
                      />
                    </div>
                    <div className="checkout-col">
                      <Input
                        value={billingCity}
                        label="Billing City"
                        placeholder="City"
                        type="text"
                        onChange={(v) => setBillingCity(v)}
                      />
                    </div>
                    <div className="checkout-col checkout-col__25">
                      <Select
                        label="Billing state"
                        placeholder="State/Province"
                        options={titleSelectOptions}
                        value={billingState}
                        onChange={(e) => setBillingState(e)}
                      />
                    </div>
                    <div className="checkout-col checkout-col__25">
                      <Select
                        label="Billing Zip"
                        placeholder="ZIP"
                        options={titleSelectOptions}
                        value={billingZip}
                        onChange={(e) => setBillingZip(e)}
                      />
                    </div>
                  </div>
                  <div className="checkout-button">
                    <button type="submit" className="primary-btn">
                      Pay now
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <CheckoutSidebar quantity={quantity} setQuantity={(e) => setQuantity(e)} />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
