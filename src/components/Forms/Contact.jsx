import React, { useState } from 'react';

import { Input } from '@ui';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert('TODO - contact form submited');
  };

  return (
    <form action="">
      <div className="input-row">
        <div className="input-col">
          <Input value={name} placeholder="Full Name" type="text" onChange={(v) => setName(v)} />
        </div>
        <div className="input-col">
          <Input value={email} placeholder="Email Address" type="email" onChange={(v) => setEmail(v)} />
        </div>
      </div>
      <Input value={message} type="textarea" placeholder="Your Message" onChange={(v) => setMessage(v)} />

      <div className="contactUs-form__btn">
        <button type="submit" className="primary-btn">
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
