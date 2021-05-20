import cns from 'classnames';
import React, { useMemo } from 'react';

import ContactForm from '@components/Forms/Contact';
import { DefaultMap } from '../Maps/Maps';

const Contact = ({ ...props }) => {
  return (
    <section className="contactUs">
      <div className="pageTop">
        <div className="wrapper">
          <h1 className="page-title">Contact Us</h1>
        </div>
        <div className="pageTop-img">
          <img src="/img/pageTop/img-1-min.png" alt="" />
        </div>
      </div>
      <div className="contactUs-form">
        <div className="wrapper">
          <div className="contactUs-form__wrap">
            <p>Please fill out your contact details. Our customer support will get in touch with you shortly.</p>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="contactUs-map">
        <div className="map" id="map">
          <DefaultMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
