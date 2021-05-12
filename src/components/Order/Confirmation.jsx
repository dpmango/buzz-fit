import React, { useMemo } from 'react';
import cns from 'classnames';

// import SignupForm from '@components/Forms/Signup';

const Confirmation = ({ ...props }) => {
  const order = {
    name: 'first_name',
    order_number: '2fffFFS24er12323',
    user: {
      name: 'User Name',
      login: 'admin@admin.ad',
      password: 'admin',
    },
  };

  return (
    <section className="confirmation">
      <div className="wrapper">
        <div className="confirmation-wrap">
          <div className="confirmation-logo">
            <a href="#">
              <img src="/img/logo-2.svg" alt="" />
            </a>
          </div>
          <h1 className="confirmation-title">Thank you for your order</h1>
          <div className="confirmation-img">
            <img src="/img/confirmation/img-min.png" alt="" />
          </div>
          <ul>
            <li>Hi {order.user.name},</li>
            <li>
              Your order {order.number} has been processed. The below details allow you access to your physician
              application
            </li>
            <li>Your invoice, shipment tracking, installation details are all available within the app.</li>
            <li>Using the below details please sign in to verify and activate your account.</li>
            <li>
              Username: {order.user.login} <br />
              Password: {order.user.password}
            </li>
          </ul>
          <div className="confirmation-button">
            <a href="#" className="primary-btn">
              Verify and sign in now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
