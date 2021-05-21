import React, { useState, useContext, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react';
import { Link, useHistory } from 'react-router-dom';
import cns from 'classnames';

import { CalculatorStoreContext } from '@store/CalculatorStore';
import { isNormalInteger } from '@helpers';
import { Input, Select } from '@ui';
import routes from '@config/routes';

const Calculate = observer(({ ...props }) => {
  const [speciality, setSpeciality] = useState(null);
  const [perWeek, setPerWeek] = useState('140');
  const [perYear, setPerYear] = useState('48');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const calculatorContext = useContext(CalculatorStoreContext);
  const history = useHistory();

  const selectOptions = useMemo(() => {
    return calculatorContext.getSpecialities
      ? calculatorContext.getSpecialities.map((spec) => ({
          value: spec.Code,
          label: spec.Specialty,
        }))
      : [];
  }, [calculatorContext.getSpecialities]);

  const resetForm = useCallback(() => {
    setSpeciality(null);
    setPerWeek('140');
    setPerYear('48');
    setEmail('');
  }, [setSpeciality, setPerWeek, setPerYear, setEmail]);

  const validate = useCallback(() => {
    const specialityCode = speciality && speciality.value;
    const perWeekVal = perWeek.trim();
    const perYearVal = perYear.trim();
    const emailVal = email.trim();

    const validPerWeek = perWeekVal && isNormalInteger(perWeekVal);
    const validPerYear = perYearVal && isNormalInteger(perYearVal);
    const validEmail = emailVal.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!specialityCode) {
      setErrors({ speciality: 'Please select speciality' });
      return false;
    }

    if (!validPerWeek) {
      setErrors({ perWeek: 'Plese type integer' });
      return false;
    }

    if (!validPerYear) {
      setErrors({ perYear: 'Plese type integer' });
      return false;
    }

    if (!validEmail) {
      setErrors({ email: 'Plese type valid e-mail' });
      return false;
    }

    setErrors({});
    return true;
  }, [speciality, perWeek, perYear, email, setErrors]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const postObj = {
        ppw: parseInt(perWeek),
        wpy: parseInt(perYear),
        code: speciality.value,
        email,
      };

      await calculatorContext
        .report(postObj)
        .then((res) => {
          const { Status, ID } = res;

          if (Status === 'ok') {
            resetForm();
            history.push(routes.CALCULATOR.replace(':id', ID));
          }
        })
        .catch((_err) => {
          // addToast(`Ошибка ${_err.text}`, { appearance: 'error' });
        });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-block">
        <Select
          placeholder="Specialty"
          value={speciality}
          options={selectOptions}
          classNamePrefix="calculator"
          onChange={(e) => setSpeciality(e)}
          error={errors.speciality}
        />
      </div>
      <div className="input-row">
        <div className="input-col">
          <Input
            value={perWeek}
            placeholder="Patients per week"
            type="number"
            onChange={(v) => setPerWeek(v)}
            error={errors.perWeek}
          />
        </div>
        <div className="input-col">
          <Input
            value={perYear}
            placeholder="Weeks per year"
            type="number"
            onChange={(v) => setPerYear(v)}
            error={errors.perYear}
          />
        </div>
      </div>
      <Input
        value={email}
        placeholder="Your email address"
        type="email"
        onChange={(v) => setEmail(v)}
        error={errors.email}
      />

      <button type="submit" className="primary-btn">
        calculate
      </button>
    </form>
  );
});

export default Calculate;
