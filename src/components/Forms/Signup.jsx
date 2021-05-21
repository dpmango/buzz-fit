import React, { useState, useContext, useCallback, useMemo } from 'react';

import { UiStoreContext } from '@store/UiStore';
import { Input, Modal } from '@ui';
import { HubSpot } from '@services';

const SignupForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const UiContext = useContext(UiStoreContext);

  const resetForm = useCallback(() => {
    setFirstname('');
    setLastName('');
    setEmail('');
  }, [setFirstname, setLastName, setEmail]);

  const validate = useMemo(() => {
    const firstNameVal = firstname.trim();
    const lastNameVal = lastname.trim();
    const emailVal = email.trim();

    const validFirstName = firstNameVal && firstNameVal.length > 1;
    const validLastName = lastNameVal && lastNameVal.length > 1;
    const validEmail = emailVal.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!validFirstName) {
      setErrors({ firstname: 'Please type first name' });
      return false;
    }

    if (!validLastName) {
      setErrors({ lastname: 'Please type last name' });
      return false;
    }

    if (!validEmail) {
      setErrors({ email: 'Plese type valid e-mail' });
      return false;
    }

    setErrors({});
    return true;
  }, [firstname, lastname, email, setErrors]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validate) {
      await HubSpot.saveHubSpotContact({ firstname, lastname, email }).then((res) => {
        resetForm();
        UiContext.setModal('signup-success');
      });
      // .catch((_err) => {
      //   // addToast(`Ошибка ${_err.text}`, { appearance: 'error' });
      // });
    }
  };

  return (
    <>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="notMiss-form__row">
          <div className="notMiss-form__col">
            <Input
              value={firstname}
              placeholder="First name"
              type="text"
              onChange={(v) => setFirstname(v)}
              error={errors.firstname}
            />
          </div>
          <div className="notMiss-form__col">
            <Input
              value={lastname}
              placeholder="Last name"
              type="text"
              onChange={(v) => setLastName(v)}
              error={errors.lastname}
            />
          </div>
          <div className="notMiss-form__col">
            <Input
              value={email}
              placeholder="Your email address"
              type="email"
              onChange={(v) => setEmail(v)}
              error={errors.email}
            />
          </div>
          <div className="notMiss-form__btn">
            <button type="submit" className="primary-btn primary-btn-yellow">
              Sign Up!
            </button>
          </div>
        </div>
      </form>

      <Modal variant="narrow" name="signup-success">
        <p>Thank you for signing up!</p>
      </Modal>
    </>
  );
};

export default SignupForm;
