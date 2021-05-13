import React from 'react';

const SignupForm = () => {
  return (
    <form action="">
      <div className="notMiss-form__row">
        <div className="notMiss-form__col">
          <div className="input-block">
            <input type="text" name="text" placeholder="First Name" />
          </div>
        </div>
        <div className="notMiss-form__col">
          <div className="input-block">
            <input type="text" name="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="notMiss-form__col">
          <div className="input-block">
            <input type="email" name="email" placeholder="Your Email Address" />
          </div>
        </div>
        <div className="notMiss-form__btn">
          <button className="primary-btn primary-btn-yellow">Sign Up!</button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
