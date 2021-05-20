import React, { useState, useContext, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react';

import { FormsStoreContext } from '@store/FormsStore';
import { UiStoreContext } from '@store/UiStore';
import { Input, Modal } from '@ui';

const ContactForm = observer(() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const formsContext = useContext(FormsStoreContext);
  const UiContext = useContext(UiStoreContext);

  const resetForm = useCallback(() => {
    setName('');
    setEmail('');
    setMessage('');
  }, [setName, setEmail, setMessage]);

  const validate = useMemo(() => {
    const nameVal = name.trim();
    const emailVal = email.trim();
    const messageVal = message.trim();

    const validName = nameVal && nameVal.length > 1;
    const validMessage = messageVal && messageVal.length > 1;
    const messageMaxLength = messageVal && messageVal.length <= 1000;
    const validEmail = emailVal.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!validName) {
      setErrors({ name: 'Please type your name' });
      return false;
    }

    if (!validEmail) {
      setErrors({ email: 'Plese type valid e-mail' });
      return false;
    }

    if (!validMessage) {
      setErrors({ message: 'Please type your message' });
      return false;
    }

    if (!messageMaxLength) {
      setErrors({ message: 'Message cant be more than 1000 symbols' });
      return false;
    }

    setErrors({});
    return true;
  }, [name, email, message, setErrors]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validate) {
      const messageCleared = message.replace(/(<([^>]+)>)/gi, '');

      await formsContext
        .contact({ name, email, message: messageCleared })
        .then((res) => {
          console.log(res);
          const { Status } = res;

          if (Status === 'ok') {
            resetForm();
            UiContext.setModal('contact-success');
          }
        })
        .catch((_err) => {
          // addToast(`Ошибка ${_err.text}`, { appearance: 'error' });
        });
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="input-row">
          <div className="input-col">
            <Input value={name} placeholder="Full Name" type="text" onChange={(v) => setName(v)} error={errors.name} />
          </div>
          <div className="input-col">
            <Input
              value={email}
              placeholder="Email Address"
              type="email"
              onChange={(v) => setEmail(v)}
              error={errors.email}
            />
          </div>
        </div>
        <Input
          value={message}
          type="textarea"
          placeholder="Your Message"
          onChange={(v) => setMessage(v)}
          error={errors.message}
        />

        <div className="contactUs-form__btn">
          <button type="submit" className="primary-btn">
            Send message
          </button>
        </div>
      </form>

      <Modal variant="narrow" name="contact-success">
        <p>
          We appreciate you contacting us! A member of our customer service team will be in contact once they have
          reviewed your request.
        </p>
      </Modal>
    </>
  );
});

export default ContactForm;
