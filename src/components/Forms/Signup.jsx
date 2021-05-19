import React, { useState } from 'react';

import { Input } from '@ui';

const SignupForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <div className="notMiss-form__row">
        <div className="notMiss-form__col">
          <Input value={firstname} placeholder="First Name" type="text" onChange={(v) => setFirstname(v)} />
        </div>
        <div className="notMiss-form__col">
          <Input value={lastname} placeholder="Last Name" type="text" onChange={(v) => setLastName(v)} />
        </div>
        <div className="notMiss-form__col">
          <Input value={email} placeholder="Your Email Address" type="email" onChange={(v) => setEmail(v)} />
        </div>
        <div className="notMiss-form__btn">
          <button type="submit" className="primary-btn primary-btn-yellow">
            Sign Up!
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
