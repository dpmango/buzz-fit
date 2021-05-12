import React from 'react';

const ContactForm = () => {
  return (
    <form action="">
      <div className="input-row">
        <div className="input-col">
          <div className="input-block">
            <input type="text" name="name" placeholder="Full Name" />
          </div>
        </div>
        <div className="input-col">
          <div className="input-block">
            <input type="email" name="email" placeholder="Email Address" />
          </div>
        </div>
      </div>
      <div className="input-block">
        <textarea name="text" placeholder="Your Message"></textarea>
      </div>
      <div className="contactUs-form__btn">
        <button className="primary-btn">Send message</button>
      </div>
    </form>
  );
};

export default ContactForm;
